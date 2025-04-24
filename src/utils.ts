export function calculateThickness(a: number, b: number, c: number): number {
  return parseToDouble((((c - b) / (b - a)) * 0.27).toString())
}

export function parseToDouble(value: string): number {
  const result = Number(value.replace(",", "."))
  return Number.isFinite(result) ? result : 0
}
