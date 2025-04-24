import { create } from "zustand"
import { Calculation } from "@/types"
import { nanoid } from "nanoid"

type CalculationsStore = {
  calculationsList: Calculation[]
  add: (calculation: Omit<Calculation, "id">) => void
  remove: (id: string) => void
}

export const useCalculationsStore = create<CalculationsStore>()((set) => ({
  calculationsList: [],
  add: (calculation) =>
    set((state) => ({
      calculationsList: [
        ...state.calculationsList,
        {
          ...calculation,
          id: nanoid()
        }
      ]
    })),
  remove: (id) =>
    set((state) => ({
      calculationsList: state.calculationsList.filter((calculation) => calculation.id !== id)
    }))
}))
