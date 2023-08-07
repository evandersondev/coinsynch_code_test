import { ButtonHTMLAttributes, ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface TrailingIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  size?: number
}

export function TrailingIcon({
  icon: Icon,
  onClick,
  size,
  ...rest
}: TrailingIconProps) {
  return (
    <button
      {...rest}
      data-submit={!!onClick}
      className={twMerge(
        'z-10 ml-auto data-[submit=false]:cursor-default',
        rest.className,
      )}
      onClick={onClick}
    >
      <Icon size={size || 16} className="text-secondary-300 " />
    </button>
  )
}
