import { assert, sleep } from "../../common";
import {
  MicrofrontendManifest,
  MicrofrontendDefaultExport,
} from "./Microfrontend.types";

declare function __webpack_init_sharing__(scope: string): Promise<void>;
declare const __webpack_share_scopes__: { default: any };

export function loadComponent<TScope extends string>(
  scope: TScope,
  module: string
): () => Promise<MicrofrontendDefaultExport> {
  return async () => {
    if (typeof window === "undefined") {
      return;
    }
    const $window = window as {
      [key in TScope]: {
        init: (webpackShareScope: any) => Promise<any>;
        get: (module: string) => Promise<{ [key: string]: any }>;
      };
    };
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = $window[scope];
    // Initialize the container, it may provide shared modules
    try {
      await container.init(__webpack_share_scopes__.default);
    } catch (err) {
      console.warn(err, { scope, module, container });
    }
    const factory = await Promise.race([
      $window[scope]?.get(module),
      sleep(300).then(() =>
        Promise.reject(
          new Error(
            `No module ${module} was found in window.${scope} container`
          )
        )
      ),
    ]);
    const Module =
      typeof factory === "function"
        ? factory()
        : Promise.reject(
            new Error(
              `No module ${module} was found in window.${scope} container`
            )
          );
    return Module;
  };
}

export const loadScript = (
  id: string,
  src: string
): Promise<HTMLScriptElement> => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[id="${id}"]`)) {
      const script: HTMLScriptElement = assert(
        document.querySelector(`script[id="${id}"]`),
        `script must exist: [id=${id}]`
      );
      return resolve(script);
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => resolve(script);
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export const loadMicrofrontend = async ({
  entry,
  scope,
  module,
}: Pick<MicrofrontendManifest, "entry" | "scope" | "module">) =>
  loadScript(`mf-${scope.toLowerCase()}-entry`, entry)
    .then(() => loadComponent(scope, module)())
    .then((exported) => exported.default)
    .then(({ mount, unmount }) => {
      return {
        mount,
        unmount,
      };
    })
    .catch((error: unknown) => Promise.reject(error));
