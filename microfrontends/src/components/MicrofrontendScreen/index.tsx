import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { makeError } from "../../common";

import { Microfrontend } from "../Microfrontend";
import { getMicrofrontendsMatchingLocation } from "./MicrofrontendScreen.utils";
import {
  MicrofrontendManifest,
  MicrofrontendMountProps,
} from "../Microfrontend/Microfrontend.types";
import { MicrofrontendErrorFallback } from "../ErrorBoundary/ErrorBoundary.types";

type MicrofrontendScreenProps = {
  host?: string;
  Loading: React.ComponentType;
  Fallback: MicrofrontendErrorFallback;
  Microfrontend: typeof Microfrontend;
} & Omit<MicrofrontendMountProps, "manifests" | "ErrorBoundary"> &
  (
    | {
        getMicrofrontendManifests: () => Promise<MicrofrontendManifest[]>;
      }
    | {
        manifests: MicrofrontendManifest[];
      }
  );

/**
 * Route-level component, that loads Microfrontends based on
 * whether their manifest routes matches the current location.
 */
export const MicrofrontendScreen = ({
  host,
  Loading,
  Fallback,
  navigate,
  Microfrontend,
  ...props
}: MicrofrontendScreenProps) => {
  const location = useLocation();
  const url = location.pathname;
  const {
    data: manifests = "manifests" in props ? props.manifests : [],
    isLoading,
    isError,
    error,
  } = useQuery(
    "manifests",
    () =>
      "getMicrofrontendManifests" in props
        ? props.getMicrofrontendManifests()
        : props.manifests,
    {
      enabled: "getMicrofrontendManifests" in props,
    }
  );
  const [targetMF] =
    getMicrofrontendsMatchingLocation(manifests || [], url, {
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
