import { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  children?: ReactNode
}

export function ButtonRoot({ title, children, ...rest }: ButtonRootProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'w-full h-12 px-8 py-[14px] rounded-[32px] bg-primary-500 shadow-base flex items-center justify-center font-normal text-white text-base',
        rest.className,
      )}
    >
      {title}

      {children}
    </button>
  )
}
