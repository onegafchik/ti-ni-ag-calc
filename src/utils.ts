export function calculateDepth(a: number, b: number, c: number): number {
  const result: number = ((c - b) / (b - a)) * 0.27
  return Number.isNaN(result) ? 0 : result
}

export function getIsWrongDepth(depth: number, needfulDepth: number, inaccuracy: number): boolean {
  return !(depth > needfulDepth - inaccuracy && depth < needfulDepth + inaccuracy)
}
