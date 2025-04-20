import { Calculation } from "@/types"
import { FC } from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import { MaterialIndicator } from "@/components/MaterialIndicator"

export const CalculationNote: FC<Omit<Calculation, "id"> & { onDelete: () => void }> = ({
  lineA,
  lineB,
  lineC,
  thickness,
  onDelete
}) => {
  return (
    <div className="py-2 px-4 flex justify-between items-center bg-gray-100 rounded">
      <div>
        <div className="font-medium ">
          {thickness.toFixed(3)} мкм{" "}
          <span className="font-normal text-sm text-gray-600">{`${lineA} ${lineB} ${lineC}`}</span>
        </div>
        <div className="flex gap-1">
          <MaterialIndicator
            materialDesignation="Ti"
            needfulThickness={0.1}
            inaccuracy={0.02}
            thickness={thickness}
          />
          <MaterialIndicator
            materialDesignation="Ni"
            needfulThickness={0.5}
            inaccuracy={0.1}
            thickness={thickness}
          />
          <MaterialIndicator
            materialDesignation="Ag"
            needfulThickness={0.6}
            inaccuracy={0.1}
            thickness={thickness}
          />
        </div>
      </div>
      <div className="flex gap-1.5">
        {/* <FaRegEye /> */}
        {/* <FaRegEdit /> */}
        <FaRegTrashAlt
          className="cursor-pointer"
          onClick={onDelete}
        />
      </div>
    </div>
  )
}
