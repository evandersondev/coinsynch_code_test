import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
}

export function NavLink({ title, ...rest }: NavLinkProps) {
  return (
    <Link
      {...rest}
      className={twMerge(
        'transition-colors pt-1 pb-[2px] border-b-2 border-b-transparent hover:border-b-primary-500',
        rest.className,
      )}
      href="#"
    >
      {title}
    </Link>
  )
}
