'use client'

import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const isError = Boolean(errors[props.name])

  return (
    <input
      data-error={isError}
      className={twMerge(
        'min-h-12 placeholder:text-text-base/50 pl-[40px] z-0 absolute left-0 right-0 top-0 bottom-0 focus:outline-primary-500 data-[error=true]:outline-red-700 text-text-base',
        props.className,
      )}
      {...register(props.name)}
      {...props}
    />
  )
}
