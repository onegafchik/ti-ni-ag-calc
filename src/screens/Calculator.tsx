import { Button } from "@/components/Button"
import { NumberField } from "@/components/NumberField"
import { useCalculationsStore } from "@/store"
import { calculateThickness, parseToDouble } from "@/utils"
import { FC, useEffect, useState } from "react"
import { FaRegSave, FaRegTrashAlt } from "react-icons/fa"

type Lines = {
  a: string
  b: string
  c: string
}

const emptyLines: Lines = {
  a: "",
  b: "",
  c: ""
}

export const Calculator: FC = () => {
  const { add } = useCalculationsStore()

  const [lines, setLines] = useState<Lines>(Object.assign({}, emptyLines))

  const [thickness, setThickness] = useState<number>(0)

  const updateLine = (line: keyof Lines, value: string) => {
    setLines({
      ...lines,
      [line]: value
    })
  }

  const save = () => {
    add({
      thickness: thickness,
      lineA: parseToDouble(lines.a),
      lineB: parseToDouble(lines.b),
      lineC: parseToDouble(lines.c)
    })
  }

  const clear = () => {
    setLines(Object.assign({}, emptyLines))
  }

  useEffect(() => {
    setThickness(
      calculateThickness(parseToDouble(lines.a), parseToDouble(lines.b), parseToDouble(lines.c))
    )
  }, [lines])

  return (
    <>
      <div className="mb-2 font-medium text-xl">Измеренные значения</div>
      <div className="flex flex-col gap-2">
        <NumberField
          placeholder="A"
          value={lines.a}
          onChange={(event) => updateLine("a", event.target.value)}
        />
        <NumberField
          placeholder="B"
          value={lines.b}
          onChange={(event) => updateLine("b", event.target.value)}
        />
        <NumberField
          placeholder="C"
          value={lines.c}
          onChange={(event) => updateLine("c", event.target.value)}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="my-2 font-medium text-xl">Результат: {thickness.toFixed(3)} мкм</div>
        <div className="flex gap-1">
          <Button
            className="bg-green-500 disabled:bg-green-300"
            isDisabled={!Object.values(lines).every((value) => value !== "")}
            onClick={save}>
            <FaRegSave color="white" />
          </Button>
          <Button
            className="bg-red-500 disabled:bg-red-300"
            isDisabled={!Object.values(lines).some((value) => value !== "")}
            onClick={clear}>
            <FaRegTrashAlt color="white" />
          </Button>
        </div>
      </div>
    </>
  )
}
