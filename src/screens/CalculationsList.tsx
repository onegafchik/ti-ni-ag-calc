import { CalculationNote } from "@/components/CalculationNote"
import { useCalculationsStore } from "@/store"
import { FC } from "react"

export const CalculationsList: FC = () => {
  const { calculationsList, remove } = useCalculationsStore()

  return (
    <>
      {calculationsList.length !== 0 && (
        <>
          <div className="my-2 font-medium text-xl">Расчёты</div>
          <div className="flex flex-col gap-2">
            {[...calculationsList].reverse().map((calculation) => (
              <CalculationNote
                key={calculation.id}
                onDelete={() => remove(calculation.id)}
                {...calculation}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}
