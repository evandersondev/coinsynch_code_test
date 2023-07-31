import { ElementType } from 'react'

interface ButtonIconProps {
  icon: ElementType
}

export function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return <Icon className="h-3 w-auto ml-[10px]" />
}
