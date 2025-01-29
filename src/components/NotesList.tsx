import { FC } from "react"
import { Note } from "./Note"

export const NotesList: FC<{ depth: number }> = ({ depth }) => {
  return (
    <div className="flex gap-4">
      <Note
        title="Ti"
        needfulDepth={0.1}
        inaccuracy={0.02}
        depth={depth}
      />
      <Note
        title="Ni"
        needfulDepth={0.5}
        inaccuracy={0.1}
        depth={depth}
      />
      <Note
        title="Ag"
        needfulDepth={0.6}
        inaccuracy={0.1}
        depth={depth}
      />
    </div>
  )
}
