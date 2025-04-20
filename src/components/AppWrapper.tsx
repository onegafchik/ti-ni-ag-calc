import { FC, PropsWithChildren } from "react"

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-3xl mx-auto p-4">{children}</div>
}
