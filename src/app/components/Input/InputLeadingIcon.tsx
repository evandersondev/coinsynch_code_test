import { ElementType } from 'react'

interface InputLeadingIconProps {
  icon: ElementType
  onClick?: () => void
}

export function InputLeadingIcon({
  icon: Icon,
  onClick,
}: InputLeadingIconProps) {
  return (
    <button
      data-submit={!!onClick}
      type="button"
      className="z-10 mr-auto data-[submit=false]:cursor-default"
      onClick={onClick}
    >
      <Icon size={16} className="text-secondary-300" />
    </button>
  )
}
