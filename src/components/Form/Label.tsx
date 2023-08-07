import { LabelHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  title: string
}

export function Label({ title, ...rest }: LabelProps) {
  return (
    <label
      {...rest}
      className={twMerge(
        'text-label text-white leading-4 mb-2',
        rest.className,
      )}
    >
      {title}
    </label>
  )
}
