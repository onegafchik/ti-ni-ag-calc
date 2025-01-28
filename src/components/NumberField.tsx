import React, { FC, useState } from "react"

interface NumberFieldProps {
  placeholder: string
  handle: (currentValue: number) => void
}

export const NumberField: FC<NumberFieldProps> = ({ placeholder, handle }) => {
  const [currentValue, setCurrentValue] = useState<number>(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value: number = Number(event.target.value) ?? 0

    setCurrentValue(value)
    handle(value)
  }

  return (
    <input
      className="py-2.5 px-5 font-medium bg-gray-100 rounded focus:outline-yellow-300"
      type="number"
      placeholder={placeholder}
      onChange={handleChange}
      value={currentValue}
    />
  )
}
