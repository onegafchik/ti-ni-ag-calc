import { getIsWrongDepth } from "@/utils"
import { FC } from "react"

interface NoteProps {
  title: string
  needfulDepth: number
  inaccuracy: number
  depth: number
}

export const Note: FC<NoteProps> = ({ title, needfulDepth, inaccuracy, depth }) => {
  return (
    <div
      className={`p-4 w-[100px] flex flex-col items-center rounded ${
        getIsWrongDepth(depth, needfulDepth, inaccuracy) ? "bg-red-400" : "bg-green-400"
      }`}>
      <div className="mb-2 inline text-white text-2xl font-medium">{title}</div>
      <div className="inline text-white">{`${needfulDepth}±${inaccuracy}`}</div>
    </div>
  )
}
