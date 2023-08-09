'use client'

import {
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  Plus,
  X,
} from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'

import { Form } from '@/components/Form'
import { Button } from '@/components/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Crypto } from '@/app/api/coins/route'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useCrypto } from '@/hooks/useCrypto'
import { useWallet } from '@/hooks/useWallet'

const walletSchema = z.object({
  quantity: z.string(),
  crypto: z.object({
    id: z.string(),
    name: z.string(),
    acronym: z.string(),
    price: z.string(),
    change: z.string(),
    image: z.string(),
    formattedChange: z.string(),
    priceInUSD: z.number(),
  }),
})

type WalletFormData = z.infer<typeof walletSchema>

export function AddCryptoModal() {
  const { addCrypto } = useCrypto()
  const { addBalance } = useWallet()
  const [showModal, setShowModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [options, setOptions] = useState<Crypto[]>([])

  const walletForm = useForm<WalletFormData>({
    resolver: zodResolver(walletSchema),
  })

  const { handleSubmit, register, setValue, watch, getValues, control } =
    walletForm

  async function getOptions() {
    const response = await axios.get<Crypto[]>('/api/coins')

    setOptions(response.data)
  }

  useEffect(() => {
    getOptions()
  }, [])

  async function handleAddWallet({ crypto, quantity }: WalletFormData) {
    addCrypto(crypto, Number(quantity))
    addBalance(crypto.priceInUSD * Number(quantity))
    control._reset()
    setShowModal(false)
  }

  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
      <Dialog.Trigger asChild>
        <button className="w-[120px] h-8 py-2 px-4 flex items-center justify-center flex-nowrap gap-2 rounded-full bg-primary-500 text-sm text-white">
          <Plus width={12} height={12} />
          Add crypto
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-text-base/90 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[272px] md:w-[320px] lg:w-[448px] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px]  focus:outline-none p-8 bg-white space-y-6">
          <Dialog.Title className="text-center text-base md:text-2xl font-bold">
            Add Crypto
          </Dialog.Title>

          <FormProvider {...walletForm}>
            <form
              onSubmit={handleSubmit(handleAddWallet)}
              className="flex flex-col gap-6"
            >
              <Select.Root
                {...register('crypto')}
                open={isOpen}
                onOpenChange={setIsOpen}
                onValueChange={(value) => {
                  const crypto = options.find((option) => option.id === value)
                  watch('crypto')
                  setValue('crypto', crypto as Crypto)
                }}
              >
                <Select.Trigger className="md:h-12 w-full data-[placeholder]:text-text-base/50 border border-secondary-300 rounded-md flex items-center justify-between p-4">
                  <Select.Value asChild>
                    {getValues().crypto ? (
                      <div className="h-12 w-full text-text-base flex items-center p-4 pl-0">
                        <Image
                          src={getValues().crypto.image}
                          alt=""
                          height={16}
                          width={16}
                          className="rounded-full object-cover mr-2"
                        />
                        <p className="text-sm">
                          {getValues().crypto.name}{' '}
                          <span className="text-secondary-500">
                            {getValues().crypto.acronym}
                          </span>
                        </p>
                        <ChevronRight
                          size={12}
                          className="text-secondary-300 ml-auto"
                        />
                      </div>
                    ) : (
                      <p className="text-text-base/50">Choose Crypto</p>
                    )}
                  </Select.Value>

                  <Select.Icon>
                    <ChevronDown
                      size={24}
                      strokeWidth={3}
                      data-state={isOpen}
                      className="text-secondary-300 font-bold data-[state=true]:text-primary-500 data-[state=true]:rotate-180"
                    />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content
                    position="popper"
                    align="center"
                    sideOffset={8}
                    defaultValue=""
                    className="overflow-y-scroll h-[384px] bg-white rounded-md w-[212px] md:w-[255px] lg:w-[384px] border border-secondary-300"
                  >
                    <Select.Viewport className="p-4 w-full">
                      {options.map((crypto) => (
                        <Select.Item
                          key={crypto.id}
                          className="h-12 w-full text-text-base flex items-center p-4"
                          value={crypto.id}
                        >
                          <Image
                            src={crypto.image}
                            alt=""
                            height={16}
                            width={16}
                            className="rounded-full object-cover mr-2"
                          />
                          <Select.ItemText className="text-sm">
                            {crypto.name}{' '}
                            <span className="text-secondary-500">
                              {crypto.acronym}
                            </span>
                          </Select.ItemText>
                          <ChevronRight
                            size={12}
                            className="text-secondary-300 ml-auto"
                          />
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>

              <Form.Root>
                <Form.Field className="h-12 w-fullrounded-md border border-secondary-300 px-4 relative flex items-center gap-2">
                  <Form.Input
                    className="pl-4 min-h-12 placeholder:text-text-base/50 z-0 absolute left-0 right-0 top-0 bottom-0 focus:outline-primary-500 data-[error=true]:outline-red-700 text-text-base"
                    min="1"
                    placeholder="0,00"
                    name="quantity"
                    type="number"
                  />
                  <Form.TrailingIcon
                    size={28}
                    className="text-primary-500"
                    icon={ChevronsUpDown}
                  />
                </Form.Field>
              </Form.Root>

              <Button.Root type="submit" title="Add Crypto" />
            </form>
          </FormProvider>

          <Dialog.Close
            asChild
            className="absolute -top-2 right-4 h-4 w-4 appearance-none text-secondary-500 items-center justify-center"
          >
            <button aria-label="Close">
              <X size={16} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
