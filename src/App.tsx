import { FC } from "react"
import { AppWrapper } from "@/components/AppWrapper"
import { Calculator } from "@/screens/Calculator"
import { CalculationsList } from "@/screens/CalculationsList"

export const App: FC = () => {
  return (
    <AppWrapper>
      <Calculator />
      <CalculationsList />
    </AppWrapper>
  )
}
