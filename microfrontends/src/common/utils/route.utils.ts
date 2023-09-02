import { pathToRegexp } from "path-to-regexp";

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

type Permission = `${"manage" | "read-only"}:${string}`;

/**
 * Whether the given user can match the given permissions
 */
export const canMatchPermissions = (
  user: {
    permissions: Permission[];
  },
  permissions: Permission[]
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
