import React, { FC } from "react"

export const NumberField: FC<{
  placeholder: string
  value: string
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ placeholder, value, onChange }) => {
  return (
    <input
      className="py-2.5 px-5 font-medium bg-gray-100 rounded focus:outline-yellow-300 invalid:bg-red-100"
      type="text"
      maxLength={9}
      inputMode="decimal"
      pattern="[0-9]+([\.,][0-9]+)?"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}
