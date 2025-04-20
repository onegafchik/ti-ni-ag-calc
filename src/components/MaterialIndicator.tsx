import { FC, memo } from "react"

export const MaterialIndicator: FC<{
  materialDesignation: string
  needfulThickness: number
  inaccuracy: number
  thickness: number
}> = memo(({ materialDesignation, needfulThickness, inaccuracy, thickness }) => {
  return (
    <div
      className={`w-5 h-5 flex justify-center items-center text-xs text-white text-center rounded ${
        thickness > needfulThickness - inaccuracy && thickness < needfulThickness + inaccuracy
          ? "bg-green-500"
          : "bg-red-500"
      }`}>
      {materialDesignation}
    </div>
  )
})
