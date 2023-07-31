'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Mail, Lock, Eye, EyeOff, X } from 'lucide-react'
import { MouseEvent, ReactNode, useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'
import { NavLink } from './NavLink'
import { useModal } from '../hooks/useModal'
import { SignUpModal } from './SignupModal'

interface SignInModalProps {
  children: ReactNode
}

export function SignInModal({ children }: SignInModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const { showSignIn, handleShowSignIn, handleShowSignUp, handleClose } =
    useModal()

  function handleShowPassword() {
    setShowPassword((oldValue) => !oldValue)
  }

  function handleShowSignUpModal(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    handleShowSignUp()
    // handleClose()
  }

  return (
    <Dialog.Root open={showSignIn} onOpenChange={handleShowSignIn}>
      <Dialog.Root>
        <Dialog.Trigger asChild>{children}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-text-base/90 data-[state=open]:animate-overlayShow fixed inset-0" />

          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] w-full max-w-[448px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white shadow-base p-8">
            <Dialog.Title className="text-text-base text-h4 leading-8 text-center mb-6">
              Sign in to
              <strong className="text-secondary-500">
                <span className="text-primary-500">Coin</span>Synch
              </strong>
            </Dialog.Title>

            <form className="w-full flex flex-col gap-6">
              <Input.Root>
                <Input.Field type="email" placeholder="Email" />
                <Input.LeadingIcon icon={Mail} />
              </Input.Root>

              <Input.Root>
                <Input.Field
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                <Input.LeadingIcon icon={Lock} />
                <Input.TrailingIcon
                  icon={showPassword ? Eye : EyeOff}
                  onClick={handleShowPassword}
                />
              </Input.Root>

              <NavLink
                href=""
                title="Forgot password?"
                className="w-fit ml-auto text-right text-xs text-secondary-500 mt-[-20px] leading-[14px] hover:border-transparent"
              />

              <Button.Root title="Sign in" />

              <div className="text-center font-normal text-label text-text-base flex justify-center items-center gap-1">
                Don’t have an account?
                <Button.Root
                  title="Sign up to "
                  className="m-0 p-0 h-fit w-fit bg-transparent text-text-base font-bold"
                  onClick={handleShowSignUpModal}
                >
                  <span className="text-primary-500">Coin</span>
                  <span className="text-secondary-500">Synch</span>
                </Button.Root>
              </div>
            </form>

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
