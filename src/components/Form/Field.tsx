import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function Field(props: FieldProps) {
  return (
    <div
      className={twMerge(
        'h-12 w-fullrounded-md border border-secondary-300 px-4 relative flex items-center gap-2',
        props.className,
      )}
    >
      {props.children}
    </div>
  )
}
