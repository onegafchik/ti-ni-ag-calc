import React, { FC, useState } from "react"

interface NumberFieldProps {
  placeholder: string
  handle: (currentValue: number) => void
}

export const NumberField: FC<NumberFieldProps> = ({ placeholder, handle }) => {
  const [currentValue, setCurrentValue] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value)
    handle(Number(event.target.value.replace(",", ".")) ?? 0)
  }

  return (
    <input
      className="py-2.5 px-5 font-medium bg-gray-100 rounded focus:outline-yellow-300 invalid:bg-red-100"
      type="text"
      maxLength={9}
      inputMode="decimal"
      pattern="[0-9]+([\.,][0-9]+)?"
      placeholder={placeholder}
      onChange={handleChange}
      value={currentValue}
    />
  )
}
