export function assertDefined<T>(
  value: T,
  message = 'Value is not defined'
): asserts value is NonNullable<T> {
  if (value == null) {
    // Covers both `null` and `undefined`
    throw new Error(message);
  }
}
