import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { makeError } from "../../common";

import { Microfrontend } from "../Microfrontend";
import { getMicrofrontendSlotsMatchingLocation } from "./MicrofrontendScreen.utils";
import {
  MicrofrontendManifest,
  MicrofrontendMountProps,
} from "../Microfrontend/Microfrontend.types";
import { MicrofrontendErrorFallback } from "../ErrorBoundary/ErrorBoundary.types";

type MicrofrontendScreenProps = {
  host?: string;
  getMicrofrontendManifests: () => Promise<MicrofrontendManifest[]>;
  Loading: React.ComponentType;
  Fallback: MicrofrontendErrorFallback;
  Microfrontend: typeof Microfrontend;
} & MicrofrontendMountProps;

/**
 * Route-level component, that loads Microfrontends based on
 * whether their manifest routes matches the current location.
 */
export const MicrofrontendScreen = ({
  host,
  getMicrofrontendManifests,
  Loading,
  Fallback,
  navigate,
  Microfrontend,
  ...props
}: MicrofrontendScreenProps) => {
  const location = useLocation();
  const url = location.pathname;
  const {
    data: manifests = [],
    isLoading,
    isError,
    error,
  } = useQuery("manifests", () => getMicrofrontendManifests());
  const [targetMF] =
    getMicrofrontendSlotsMatchingLocation(manifests || [], url, {
      host,
      user: props?.user,
    }) || [];

  const ErrorFallback = (errorProps: { error: any }) =>
    typeof Fallback === "function" ? (
      <Fallback {...props} {...errorProps} />
    ) : (
      Fallback
    );

  return isError ? (
    <ErrorFallback
      error={
        error instanceof Error
          ? error
          : makeError(
              "UnknownError",
              typeof error === "string"
                ? error
                : `An error occurred in a microfrontend: ${error}`,
              error
            )
      }
    />
  ) : isLoading ? (
    typeof Loading === "function" ? (
      <Loading />
    ) : (
      Loading
    )
  ) : !targetMF && manifests?.length ? (
    <ErrorFallback
      error={makeError(
        "NoRouteMatchFound",
        `No microfrontend was found capable of handling the route: ${url}`
      )}
    />
  ) : targetMF ? (
    <Microfrontend
      {...props}
      url={url}
      entry={targetMF.entry}
      scope={targetMF.scope}
      module={targetMF.module}
      manifests={manifests}
      navigate={navigate}
      Loading={Loading}
      Fallback={Fallback}
    />
  ) : null;
};

MicrofrontendScreen.defaultProps = {
  Microfrontend,
};

export * from "./MicrofrontendScreen.utils";
