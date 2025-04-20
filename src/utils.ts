export function calculateThickness(a: number, b: number, c: number): number {
  return parseToDouble((((c - b) / (b - a)) * 0.27).toString())
}

export function parseToDouble(value: string): number {
  const result: number = Number(value.replace(",", ".")) ?? 0
  return Number.isNaN(result) ? 0 : result
}
