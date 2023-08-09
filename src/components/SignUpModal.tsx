'use client'

import { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, User, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Form } from './Form'
import { Button } from './Button'
import { useModal } from '../hooks/useModal'
import { ModalType } from '../contexts/ModalContext'

const signUpFormSchema = z
  .object({
    name: z.string().nonempty('The name is required.'),
    email: z.string().nonempty().email('E-mail must be valid.'),
    password: z.string().min(6, 'Password must be atleast 6 characters.'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be atleast 6 characters.'),
    terms: z.boolean().refine((term) => term, '*'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "The passwords don't match.",
    path: ['confirmPassword'],
  })

type SignUpFormData = z.infer<typeof signUpFormSchema>

export function SignUpModal() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { handleClose, handleShowModal } = useModal()

  const signUpForm = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  })

  const { handleSubmit } = signUpForm

  function handleSignUpSubmit(data: SignUpFormData) {
    console.log(data)
    toast.success(`${data.email} are signup!`)

    handleClose()
  }

  function handleShowPassword() {
    setShowPassword((oldValue) => !oldValue)
  }

  function handleShowConfirmPassword() {
    setShowConfirmPassword((oldValue) => !oldValue)
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
            Sign up to{' '}
            <strong className="text-secondary-500">
              <span className="text-primary-500">Coin</span>Synch
            </strong>
          </h1>

          <FormProvider {...signUpForm}>
            <form
              onSubmit={handleSubmit(handleSignUpSubmit)}
              className="w-full flex flex-col gap-6"
            >
              <Form.Root>
                <Form.Field>
                  <Form.LeadingIcon icon={User} />
                  <Form.Input placeholder="Name" name="name" />
                </Form.Field>
                <Form.Error field="name" />
              </Form.Root>

              <Form.Root>
                <Form.Field>
                  <Form.LeadingIcon icon={Mail} />
                  <Form.Input placeholder="Email" name="email" />
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

              <Form.Root>
                <Form.Field>
                  <Form.LeadingIcon icon={Lock} />
                  <Form.Input
                    name="confirmPassword"
                    placeholder="Confirm password"
                    type={showConfirmPassword ? 'text' : 'password'}
                  />
                  <Form.TrailingIcon
                    icon={showConfirmPassword ? Eye : EyeOff}
                    onClick={handleShowConfirmPassword}
                  />
                </Form.Field>
                <Form.Error field="confirmPassword" />
              </Form.Root>

              <div className="flex gap-4 items-start">
                <Form.Root>
                  <Form.Field className="max-w-[16px] max-h-[16px] border-0 p-0">
                    <Form.Input
                      className="appearance-none w-[16px] h-[16px] p-1 mt-1 rounded accent-primary-500 border-primary-500 border-2 cursor-pointer checked:bg-primary-500 data-[error=true]:border-red-700"
                      type="checkbox"
                      name="terms"
                    />
                  </Form.Field>
                  <Form.Error
                    className="ml-[5px] -mt-[1px] text-base"
                    field="terms"
                  />
                </Form.Root>

                <p className="text-sm">
                  I have read and accept the <strong>Privacy Policy</strong> and{' '}
                  <strong>Terms of User Sign up</strong>.
                </p>
              </div>

              <Button.Root type="submit" title="Sign up" />

              <div className="text-center font-normal text-xs lg:text-sm text-text-base flex justify-center items-center gap-1">
                Already have and account?
                <Button.Root
                  title="Sign in to "
                  className="m-0 p-0 h-fit w-fit bg-transparent text-sm text-text-base font-bold"
                  onClick={() => handleShowModal(ModalType.signin)}
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
