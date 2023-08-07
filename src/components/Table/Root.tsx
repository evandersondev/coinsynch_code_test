import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <table className="table-auto w-full max-w-[1216px] mx-auto">
      {children}
    </table>
  )
}
