import { ComponentProps, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonIconProps extends ComponentProps<'p'> {
  icon: ElementType
}

export function ButtonIcon({ icon: Icon, className }: ButtonIconProps) {
  return <Icon className={twMerge('h-3 w-auto ml-[10px]', className)} />
}
