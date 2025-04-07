/**
 * Asserts that a given value is neither null nor undefined.
 * If the value is null or undefined, an error is thrown with the provided message.
 *
 * @param value - The value to be checked for non-null and non-undefined.
 * @param message - An optional error message to be used if the assertion fails.
 * @return This method does not return a value but ensures the value is a non-nullable type if the assertion passes.
 */
export function assertDefined<T>(
  value: T,
  message = 'Value is not defined'
): asserts value is NonNullable<T> {
  if (value == null) {
    // Covers both `null` and `undefined`
    throw new Error(message);
  }
}