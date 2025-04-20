import { FC, PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export const Button: FC<
  PropsWithChildren<{
    className?: string
    isDisabled?: boolean
    onClick?: () => void
  }>
> = ({ children, className, isDisabled = false, onClick }) => {
  return (
    <button
      className={twMerge(
        "px-3.5 py-2 rounded bg-transparent focus:outline-yellow-300 not-disabled:cursor-pointer",
        className
      )}
      disabled={isDisabled}
      onClick={onClick}>
      {children}
    </button>
  )
}
