import classNames from "classnames/dedupe";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { makeError, assert } from "../../common";
import { loadMicrofrontend } from "./Microfrontend.service";
import { MicrofrontendErrorFallback } from "../ErrorBoundary/ErrorBoundary.types";
import { MicrofrontendManifest } from "./Microfrontend.types";
import { ErrorBoundary } from "../ErrorBoundary";

type MicrofrontendProps = {
  scope: string;
  module: string;
  entry: string;
  manifests: MicrofrontendManifest[];
  url?: string;
  id?: string;
  className?: string | string[] | { [key: string]: boolean };
  navigate?: (href: string) => any;
  Loading: React.ComponentType;
  Fallback: MicrofrontendErrorFallback;
  loadMicrofrontend?: typeof loadMicrofrontend;
};

export const Microfrontend = ({
  id,
  scope,
  entry,
  module,
  Loading,
  Fallback,
  className,
  loadMicrofrontend,
  ...props
}: MicrofrontendProps) => {
  const {
    isFetched: isMounted,
    isError,
    error,
    data: { mount } = {},
  } = useQuery(`microfrontend?entry=${entry}&module=${module}`, async () => {
    assert(loadMicrofrontend, "props.loadMicrofrontend must be a function");
    return loadMicrofrontend?.({ entry, scope, module });
  });

  const mfClassName = classNames(
    "microfrontend-container spin-when-empty",
    className
  );

  const containerId = `mount-${(id || scope).toLowerCase()}-container`;
  const [mfError, setMFError] = useState<{ message: string } | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const ErrorFallback: MicrofrontendErrorFallback = (errorProps) =>
    typeof Fallback === "function" ? (
      <Fallback
        {...{
          containerId,
          scope,
          entry,
          module,
          ...props,
        }}
        {...errorProps}
        retry={() => setRetryCount(retryCount + 1)}
      />
    ) : (
      Fallback
    );

  const _ErrorBoundary = ({ children }: { children: React.ReactElement }) => (
    <ErrorBoundary Fallback={ErrorFallback}>{children}</ErrorBoundary>
  );

  useEffect(() => {
    if (!isMounted || isError || typeof mount !== "function") {
      return;
    }
    let unmount: (() => void) | null = null;
    try {
      unmount = mount(containerId, {
        ...props,
        ErrorBoundary: _ErrorBoundary,
      });
    } catch (error) {
      setMFError(
        makeError(
          "MountError",
          `Could not mount Microfrontend: ${scope} (${module})`,
          error
        )
      );
    }
    return () => {
      try {
        if (typeof unmount === "function") {
          console.log("unmount", scope);
          unmount();
        }
      } catch (err) {
        console.error(err);
        setMFError(
          makeError(
            "UnmountError",
            `Could not unmount Microfrontend: ${scope} (${module})`,
            error
          )
        );
      }
    };
  }, [isMounted, isError, entry, module, retryCount]);

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
  ) : mfError ? (
    <ErrorFallback error={mfError} />
  ) : !isMounted ? (
    typeof Loading === "function" ? (
      <Loading />
    ) : (
      Loading
    )
  ) : (
    <div
      id={containerId}
      className={mfClassName}
      {...{ "data-mf-scope": scope, "data-mf-module": module }}
    ></div>
  );
};

export * from "./Microfrontend.types";
