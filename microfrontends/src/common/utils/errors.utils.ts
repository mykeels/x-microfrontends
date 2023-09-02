/**
 *
 * Creates an error object with a name and a message.
 */
export const makeError = <TName extends string>(
  name: TName,
  message: string,
  cause?: unknown
) => ({
  name,
  message,
  stack: new Error().stack,
  cause,
  toString: () => `${name}: ${message}`,
});

/**
 * Throws an error with the given name and message.
 */
export const throwError = <TName extends string>(
  name: TName,
  message: string
) => {
  throw makeError(name, message);
};
