export function isObjectEquivalent(
  objA: Record<string, any>,
  objB: Record<string, any>,
): boolean {
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

export function getPageNumberFromTheURL(url: string): number {
  const regex = /\b\d{1,3}\b/;

  var page = url.match(regex);

  if (page) {
    return Number(page[0]);
  } else {
    return 1;
  }
}
