export function isObjectEquivalent(
  objA: Record<string, any>,
  objB: Record<string, any>,
): boolean {
  // Converts objects to JSON strings and compares them to check for equality
  return JSON.stringify(objA) === JSON.stringify(objB);
}

export function isObjectUniqueInArray(
  array: Record<string, any>[],
  targetObject: Record<string, any>,
): boolean {
  for (const obj of array) {
    if (isObjectEquivalent(obj, targetObject)) {
      return false;
    }
  }
  return true;
}
