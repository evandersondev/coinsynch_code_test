'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ReactNode } from 'react'

interface ModalProps {
  button: () => ReactNode
  title: string
  children: ReactNode
  isOpen: boolean
  onChange: () => void
}

export function Modal({
  button,
  title,
  isOpen,
  onChange,
  children,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange}>
      <Dialog.Root>
        <Dialog.Trigger asChild>{button()}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-text-base/90 data-[state=open]:animate-overlayShow fixed inset-0" />

          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-full max-w-[448px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-base p-8">
            <Dialog.Title className="text-text-base text-h4 leading-8 text-center mb-6">
              {title}{' '}
              <strong className="text-secondary-500">
                <span className="text-primary-500">Coin</span>Synch
              </strong>
            </Dialog.Title>

            {children}

            <Dialog.Close asChild>
              <button
                className="absolute top-4 right-4 h-4 w-4 appearance-none text-secondary-500 items-center justify-center"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </Dialog.Root>
  )
}
