import { FC, useEffect, useState } from "react"
import { NumberField } from "@/components/NumberField"
import { calculateDepth } from "./utils"

export const App: FC = () => {
  const [depth, setDepth] = useState<number>(0)

  const [lines, setLines] = useState<{ a: number; b: number; c: number }>({
    a: 0,
    b: 0,
    c: 0
  })

  useEffect(() => {
    setDepth(calculateDepth(lines.a, lines.b, lines.c))
  }, [lines])

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="mb-2 font-medium text-xl">Измеренные значения</div>
      <div className="flex flex-col gap-2">
        <NumberField
          placeholder="A"
          handle={(currentValue) => setLines({ ...lines, a: currentValue })}
        />
        <NumberField
          placeholder="B"
          handle={(currentValue) => setLines({ ...lines, b: currentValue })}
        />
        <NumberField
          placeholder="C"
          handle={(currentValue) => setLines({ ...lines, c: currentValue })}
        />
      </div>
      <div className="my-2 font-medium text-xl">Результат: {depth.toFixed(3)} мкм</div>
    </div>
  )
}
