import { pathToRegexp } from "path-to-regexp";

import { assert } from "../../common";
import {
  MicrofrontendCustomSlotOptions,
  MicrofrontendManifest,
  MicrofrontendPermission,
  MicrofrontendRouteOptions,
} from "../Microfrontend/Microfrontend.types";

/**
 * Whether the given route can match the other route
 */
export const canMatchRoute = (route1: string, route2: string): boolean => {
  const route1Regex = pathToRegexp(route1.replace(/\/\*+/g, "/:params*"), []);
  const route2Regex = pathToRegexp(route2.replace(/\/\*+/g, "/:params*"), []);
  return route1Regex.test(route2) || route2Regex.test(route1);
};

/**
 * Whether the given permission can match the other permission
 */
export const canMatchPermission = (
  permission1: string,
  permission2: string
): boolean => {
  const route1Regex = pathToRegexp(
    permission1.replace(/\/\*\*+/g, "/:params*").replace(/\/\*/g, "/:params"),
    []
  );
  const route2Regex = pathToRegexp(
    permission2.replace(/\/\*\*+/g, "/:params*").replace(/\/\*/g, "/:params"),
    []
  );
  return route1Regex.test(permission2) || route2Regex.test(permission1);
};

/**
 * Whether the given host can match the other host
 */
export const canMatchHost = (hostA?: string, hostB?: string): boolean => {
  return !hostA || !hostB || hostA === hostB;
};

/**
 * Whether the given user can match the given permissions
 */
export const canMatchPermissions = (
  user: {
    permissions: MicrofrontendPermission[];
  },
  permissions: MicrofrontendPermission[]
): boolean => {
  return permissions?.every((permission) => {
    const [action, ...objectPaths] = permission.split(":");
    const objectPath = objectPaths.join(":");
    return user.permissions.some((p) => {
      const [uAction, ...uObjectPaths] = p.split(":");
      const uObjectPath = uObjectPaths.join(":");
      const objectPathsMatching =
        uObjectPath === objectPath ||
        canMatchPermission(uObjectPath, objectPath);
      const actionsMatching =
        uAction === action || (action === "read-only" && uAction === "manage");
      return objectPathsMatching && actionsMatching;
    });
  });
};

export const selectProps =
  <TKeys extends readonly string[]>(keys: TKeys) =>
  <TObj extends { [key in TKeys[number]]: any }>(
    obj: TObj
  ): {
    [key in TKeys[number]]: TObj extends Record<key, infer TValue>
      ? TValue
      : never;
  } => {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]: [any, any]) => keys.includes(key))
    ) as Record<TKeys[number], any>;
  };

type MicrofrontendSlotMatchingName = {
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
export const getMicrofrontendSlotsByName = (
  manifests: MicrofrontendManifest[],
  name: string,
  options?: {
    host?: string;
    user?: { permissions: MicrofrontendPermission[] };
    transformPermission?: (
      permission: MicrofrontendPermission
    ) => MicrofrontendPermission;
  }
): MicrofrontendSlotMatchingName[] =>
  manifests
    ?.reduce(
      (arr, manifest) =>
        [
          ...arr,
          ...(manifest.slots[name]?.map((slot) => ({
            ...selectProps(["entry", "scope", "module", "auth"])(manifest),
            ...(typeof slot === "string" ? { slot } : slot),
          })) || []),
        ] as MicrofrontendSlotMatchingName[],
      [] as MicrofrontendSlotMatchingName[]
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

type MicrofrontendSlotMatchingRoute = {
  entry: string;
  scope: string;
  module: string;
  route: string;
  host?: string;
};

/**
 *
 * @param manifests
 * @param url
 * @param options
 * @param options.transformPermission Use this to replace keywords in permissions such as :companyAccountId or :userId
 * @returns slots matching the current location url
 */
export const getMicrofrontendSlotsMatchingLocation = (
  manifests: MicrofrontendManifest[],
  url: string,
  options: {
    host?: string;
    user?: { permissions: MicrofrontendPermission[] };
    transformPermission?: (
      permission: MicrofrontendPermission
    ) => MicrofrontendPermission;
  }
): MicrofrontendSlotMatchingRoute[] =>
  manifests
    ?.reduce(
      (arr, manifest) =>
        [
          ...arr,
          ...(manifest.slots.routes?.map((route) => ({
            ...selectProps(["entry", "scope", "module", "auth"])(manifest),
            ...(typeof route === "string" ? { route } : route),
          })) || []),
        ] as MicrofrontendSlotMatchingRoute[],
      [] as MicrofrontendSlotMatchingRoute[]
    )
    .filter(
      ({ route, host: routeHost }: MicrofrontendRouteOptions) =>
        canMatchRoute(route, url) && canMatchHost(routeHost, options?.host)
    )
    .filter(
      ({ auth }: MicrofrontendRouteOptions) =>
        !auth?.required ||
        canMatchPermissions(
          assert(options?.user, "options.user must exist"),
          auth?.permissions?.map(
            typeof options?.transformPermission === "function"
              ? options?.transformPermission
              : (p) => p
          ) || []
        )
    );
