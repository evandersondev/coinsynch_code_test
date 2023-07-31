import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>

export function InputField({ type = 'text', ...rest }: InputFieldProps) {
  return (
    <input
      type={type}
      {...rest}
      className={twMerge(
        'placeholder:text-text-base/50 pl-[40px] z-0 absolute left-0 right-0 top-0 bottom-0 focus:outline-primary-500',
        rest.className,
      )}
    />
  )
}
