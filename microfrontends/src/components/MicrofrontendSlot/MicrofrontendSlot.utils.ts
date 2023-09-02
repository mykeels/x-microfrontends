import {
  assert,
  canMatchHost,
  canMatchPermissions,
  selectProps,
} from "../../common";
import {
  MicrofrontendCustomSlotOptions,
  MicrofrontendManifest,
  MicrofrontendPermission,
} from "../Microfrontend/Microfrontend.types";

type MicrofrontendMatchingName = {
  module: string;
  entry: string;
  scope: string;
  [key: string]: any;
};

/**
 *
 * @param manifests
 * @param name
 * @param options
 * @param options.transformPermission Use this to replace keywords in permissions such as :companyAccountId or :userId
 * @returns Slots matching the given name
 */
export const getMicrofrontendsByName = (
  manifests: MicrofrontendManifest[],
  name: string,
  options?: {
    host?: string;
    user?: { permissions: MicrofrontendPermission[] };
    transformPermission?: (
      permission: MicrofrontendPermission
    ) => MicrofrontendPermission;
  }
): MicrofrontendMatchingName[] =>
  manifests
    ?.reduce(
      (arr, manifest) =>
        [
          ...arr,
          ...(manifest.slots[name]?.map((slot) => ({
            ...selectProps(["entry", "scope", "module", "auth"])(manifest),
            ...(typeof slot === "string" ? { slot } : slot),
          })) || []),
        ] as MicrofrontendMatchingName[],
      [] as MicrofrontendMatchingName[]
    )
    .filter(({ host: routeHost }: MicrofrontendCustomSlotOptions) =>
      canMatchHost(routeHost, options?.host)
    )
    .filter(
      ({ auth }: MicrofrontendCustomSlotOptions) =>
        !auth?.required ||
        canMatchPermissions(
          assert(options?.user, "options.user must exist"),
          auth?.permissions?.map((p) =>
            typeof options?.transformPermission === "function"
              ? options?.transformPermission(p)
              : p
          ) || []
        )
    );
