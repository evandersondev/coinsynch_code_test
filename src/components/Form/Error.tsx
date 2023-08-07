import { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface ErrorProps extends ComponentProps<'span'> {
  field: string
}

export function Error(props: ErrorProps) {
  const {
    formState: { errors },
  } = useFormContext()

  if (!errors[props.field]) return <div />

  return (
    <span className={twMerge('text-xs text-red-700 mt-1', props.className)}>
      {String(errors[props.field]?.message)}
    </span>
  )
}
