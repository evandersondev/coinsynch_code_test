import { ElementType } from 'react'

interface LeadingIconProps {
  icon: ElementType
  onClick?: () => void
}

export function LeadingIcon({ icon: Icon, onClick }: LeadingIconProps) {
  return (
    <button
      data-submit={!!onClick}
      type="button"
      className="z-10 data-[submit=false]:cursor-default"
      onClick={onClick}
    >
      <Icon size={16} className="text-secondary-300" />
    </button>
  )
}
