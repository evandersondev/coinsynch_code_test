import { ElementType } from 'react'

interface InputTrailingIconProps {
  icon: ElementType
  onClick?: () => void
}

export function InputTrailingIcon({
  icon: Icon,
  onClick,
}: InputTrailingIconProps) {
  return (
    <button type="button" className="z-10 ml-auto" onClick={onClick}>
      <Icon size={16} className="text-secondary-300 " />
    </button>
  )
}
