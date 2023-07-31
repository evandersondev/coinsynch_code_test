'use client'

import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react'
import { Modal } from './Modal'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'
import { useModal } from '../hooks/useModal'

interface SignUpModalProps {
  children: ReactNode
}

export function SignUpModal({ children: ModalButton }: SignUpModalProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { showSignUp, handleClose } = useModal()

  function handleShowPassword() {
    setShowPassword((oldValue) => !oldValue)
  }

  function handleShowConfirmPassword() {
    setShowConfirmPassword((oldValue) => !oldValue)
  }

  return (
    <Modal
      isOpen={showSignUp}
      onChange={handleClose}
      title="Sign up to"
      button={() => ModalButton}
    >
      <form className="w-full flex flex-col gap-6">
        <Input.Root>
          <Input.Field placeholder="Name" />
          <Input.LeadingIcon icon={User} />
        </Input.Root>

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

        <Input.Root>
          <Input.Field
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
          />
          <Input.LeadingIcon icon={Lock} />
          <Input.TrailingIcon
            icon={showConfirmPassword ? Eye : EyeOff}
            onClick={handleShowConfirmPassword}
          />
        </Input.Root>

        <Button.Root title="Sign up" />

        <p className="text-center font-normal text-label text-text-base">
          Already have and account?{' '}
          <Link href="" className="font-bold">
            Sign in to <span className="text-primary-500">Coin</span>
            <span className="text-secondary-500">Synch</span>
          </Link>
        </p>
      </form>
    </Modal>
  )
}
