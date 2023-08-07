'use client'

import Image from 'next/image'
import { z } from 'zod'

import waveSuscribeImage from '@/assets/waves-2.png'
import { Button } from './Button'
import { api } from '@/services/api'
import { Form } from './Form'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'

const subscribeFormSchema = z.object({
  email: z.string().email(),
})

type SubscribeFormData = z.infer<typeof subscribeFormSchema>

export function NewsLetters() {
  const subscribeForm = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeFormSchema),
  })

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = subscribeForm

  async function handleSubscribe({ email }: SubscribeFormData) {
    const response = await api.post('/newsletter', { email })

    console.log(response)
    control._reset()
  }

  return (
    <div className="w-full md:h-[412px] flex items-center overflow-hidden relative bg-gradient-to-138deg from-primary-500 to-primary-700 lg:p-0 px-12 py-[56px]">
      <main className="w-full max-w-[1440px] mx-auto flex md:flex-row flex-col lg:gap-0 md:gap-8 gap-10">
        <aside className="w-full md:w-[50%] text-white flex flex-col z-10">
          <h4 className="text-base md:text-[20px] lg:text-h4 text-primary-200 leading-6 md:leading-8 font-bold md:mb-1">
            Lorem ipsum
          </h4>
          <h2 className="text-2xl md:text-4xl text-white font-bold leading-[32px] md:leading-[48px] tracking-[.4px] mb-4">
            Lorem ipsum
          </h2>
          <p className="block w-full max-w-[385px] text-white text-base leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </aside>

        <div className="w-full md:w-[50%] z-10">
          <FormProvider {...subscribeForm}>
            <form
              onSubmit={handleSubmit(handleSubscribe)}
              className="w-full max-w-[384px] mx-auto flex flex-col"
            >
              <Form.Root>
                <Form.Label title="Email" htmlFor="email" />

                <Form.Field className="h-12 w-full rounded-md border-0 border-secondary-300 px-4 relative flex items-center gap-2 mb-[21px]">
                  <Form.Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoFocus={false}
                    disabled={isSubmitting}
                    className="min-h-12 placeholder:text-transparent md:placeholder:text-text-base/50 pl-4 z-0 rounded-md absolute left-0 right-0 top-0 bottom-0 focus:outline-white focus:outline-1 focus:outline-offset-2 data-[error=true]:outline-red-700 text-text-base disabled:opacity-30 disabled:cursor-not-allowed"
                  />
                </Form.Field>
              </Form.Root>

              <Button.Root
                type="submit"
                data-active={isSubmitting}
                title={isSubmitting ? '' : 'Subscribe'}
                className="data-[active=true]:cursor-not-allowed"
              >
                {isSubmitting && (
                  <Button.Icon
                    icon={Loader2Icon}
                    className="h-6 animate-spin"
                  />
                )}
              </Button.Root>
            </form>
          </FormProvider>
        </div>
      </main>

      <Image
        src={waveSuscribeImage}
        alt=""
        className="w-full absolute right-0 left-0 bottom-0 z-0"
      />
    </div>
  )
}
