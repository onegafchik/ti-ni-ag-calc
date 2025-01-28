import { FC, useEffect, useState } from "react"
import { Note } from "@/components/Note"
import { NumberField } from "@/components/NumberField"
import { calculateDepth } from "./utils"

interface Lines {
  a: number
  b: number
  c: number
}

export const App: FC = () => {
  const [depth, setDepth] = useState<number>(0)

  const [lines, setLines] = useState<Lines>({
    a: 0,
    b: 0,
    c: 0
  })

  useEffect(() => {
    setDepth(calculateDepth(lines.a, lines.b, lines.c))
  }, [lines])

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div>
        <div className="mb-2 font-medium text-xl">Укажите размеры (мкм)</div>
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
      </div>
      <div className="my-2 font-medium text-xl">Результат: {depth.toFixed(3)} мкм</div>
      <div className="flex gap-4">
        {[
          {
            title: "Ti",
            needfulDepth: 0.1,
            inaccuracy: 0.02
          },
          {
            title: "Ni",
            needfulDepth: 0.5,
            inaccuracy: 0.1
          },
          {
            title: "Ag",
            needfulDepth: 0.6,
            inaccuracy: 0.1
          }
        ].map((note, index) => (
          <Note
            key={index}
            title={note.title}
            needfulDepth={note.needfulDepth}
            inaccuracy={note.inaccuracy}
            depth={depth}
          />
        ))}
      </div>
    </div>
  )
}
