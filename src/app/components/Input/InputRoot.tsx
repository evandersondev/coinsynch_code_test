import { ReactNode } from 'react'

interface InputRootProps {
  children: ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return (
    <div className="h-12 w-full rounded-md border border-secondary-300 px-4 relative flex items-center gap-2">
      {children}
    </div>
  )
}
