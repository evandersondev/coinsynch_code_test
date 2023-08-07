'use client'

import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'
import { NavLink } from './NavLink'
import { useModal } from '../hooks/useModal'
import { ModalType } from '../contexts/ModalContext'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Form } from './Form'

const signInFormSchema = z.object({
  email: z.string().nonempty().email('E-mail must be valid.'),
  password: z.string().min(6, 'Password must be atleast 6 characters.'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignInModal() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const { handleClose, handleShowModal } = useModal()
  const signInForm = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  const { handleSubmit } = signInForm

  function handleShowPassword() {
    setShowPassword((oldValue) => !oldValue)
  }

  function handleSignInSubmit(data: SignInFormData) {
    console.log(data)

    router.push('/dashboard')
  }

  return (
    <div className="top-0 left-0 right-0 bottom-0 z-10 fixed flex items-center justify-center bg-text-base/90 ">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 20 }}
          className="w-full max-w-[320px] lg:max-w-[448px] rounded-lg bg-white shadow-base p-6 lg:p-8 relative"
        >
          <h1 className="text-text-base text-xl lg:text-2xl leading-8 text-center mb-6">
            Sign in to{' '}
            <strong className="text-secondary-500">
              <span className="text-primary-500">Coin</span>Synch
            </strong>
          </h1>

          <FormProvider {...signInForm}>
            <form
              onSubmit={handleSubmit(handleSignInSubmit)}
              className="w-full flex flex-col gap-6 z-50"
            >
              <Form.Root>
                <Form.Field>
                  <Form.LeadingIcon icon={Mail} />
                  <Form.Input name="email" placeholder="Email" />
                </Form.Field>
                <Form.Error field="email" />
              </Form.Root>

              <Form.Root>
                <Form.Field>
                  <Form.LeadingIcon icon={Lock} />
                  <Form.Input
                    name="password"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <Form.TrailingIcon
                    icon={showPassword ? Eye : EyeOff}
                    onClick={handleShowPassword}
                  />
                </Form.Field>
                <Form.Error field="password" />
              </Form.Root>

              <NavLink
                href=""
                title="Forgot password?"
                className="w-fit ml-auto text-right text-xs text-secondary-500 mt-[-20px] leading-[14px] hover:border-transparent"
              />

              <Button.Root title="Sign in" type="submit" />

              <div className="text-center font-normal text-xs lg:text-sm text-text-base flex justify-center items-center gap-1">
                Don’t have an account?
                <Button.Root
                  title="Sign up to"
                  className="m-0 p-0 h-fit w-fit bg-transparent text-sm text-text-base font-bold"
                  onClick={() => handleShowModal(ModalType.signup)}
                >
                  <span className="text-primary-500 ml-1">Coin</span>
                  <span className="text-secondary-500">Synch</span>
                </Button.Root>
              </div>
            </form>
          </FormProvider>

          <button
            className="absolute top-4 right-4 h-4 w-4 appearance-none text-secondary-500 items-center justify-center"
            aria-label="Close"
            onClick={handleClose}
          >
            <X size={16} />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
