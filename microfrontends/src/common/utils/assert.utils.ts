import invariant from "tiny-invariant";

/**
 * Asserts that the given condition is truthy, otherwise throws an error.
 */
export const assert = <TOptional>(
  condition: TOptional,
  message: string | (() => string)
): NonNullable<TOptional> => {
  invariant(
    condition,
    typeof message === "string"
      ? `AssertError: ${message}`
      : message || `AssertError: condition must be truthy`
  );
  const _condition = condition;
  return _condition;
};
