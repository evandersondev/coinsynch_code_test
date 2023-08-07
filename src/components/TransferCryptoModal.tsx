'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import { Button } from './Button'
import { ArrowLeftRight, ChevronDown, ChevronsUpDown, X } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from './Form'
import { ReactNode, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useWallet } from '@/hooks/useWallet'
import { useCrypto } from '@/hooks/useCrypto'
import { Crypto } from '@/app/api/coins/route'
import Image from 'next/image'

const transferFormSchema = z.object({
  quantity: z.string(),
  type: z.enum(['in', 'out']),
})

type TransferFormFormData = z.infer<typeof transferFormSchema>

interface TransferCryptoModalProps {
  crypto: Crypto
  children?: ReactNode | null
}

export function TransferCryptoModal({
  crypto,
  children = null,
}: TransferCryptoModalProps) {
  const { removeBalance } = useWallet()
  const { removeQuatity } = useCrypto()
  const [showModal, setShowModal] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const transferForm = useForm<TransferFormFormData>({
    resolver: zodResolver(transferFormSchema),
  })
  const { handleSubmit, register, watch, setValue, control } = transferForm

  function handleTransferCrypto(data: TransferFormFormData) {
    removeBalance(crypto.priceInUSD * Number(data.quantity))
    removeQuatity(Number(data.quantity), crypto.name)

    control._reset()
    setShowModal(false)
  }

  return (
    <Tooltip.Provider
      disableHoverableContent={!showModal}
      delayDuration={0}
      skipDelayDuration={800}
    >
      <Tooltip.Root>
        <Tooltip.Trigger>
          <Dialog.Root open={showModal} onOpenChange={setShowModal}>
            <Dialog.Trigger asChild>
              <>
                {children === null && (
                  <Button.Root
                    className="w-10 bg-transparent shadow-none p-0"
                    title=""
                    onClick={() => setShowModal(true)}
                  >
                    <Button.Icon
                      className="text-secondary-800 z-10"
                      icon={ArrowLeftRight}
                    />
                  </Button.Root>
                )}
                {children && (
                  <button onClick={() => setShowModal(true)}>{children}</button>
                )}
              </>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-text-base/90 data-[state=open]:animate-overlayShow fixed inset-0" />

              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[272px] md:w-[320px] lg:w-[448px] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px]  focus:outline-none p-4 md:p-8 bg-white">
                <Dialog.Title className="text-center text-base md:text-2xl font-bold">
                  Transfer Crypto
                </Dialog.Title>

                <div className="flex items-center justify-center gap-2 md:gap-4 mt-[49px] mb-6">
                  <p className="text-secondary-400 text-xs md:text-sm">
                    You are transfering
                  </p>
                  <div className="flex items-center gap-2">
                    <Image
                      height={24}
                      width={24}
                      src={crypto.image}
                      alt={crypto.acronym}
                      className="object-cover rounded-full"
                    />
                    <p className="flex items-center gap-1 md:text-base text-sm">
                      {crypto.name}
                      <span className="text-secondary-500 uppercase">
                        {crypto.acronym}
                      </span>
                    </p>
                  </div>
                </div>

                <FormProvider {...transferForm}>
                  <form
                    onSubmit={handleSubmit(handleTransferCrypto)}
                    className="flex flex-col gap-6"
                  >
                    <Form.Label
                      title="Transfer"
                      className="text-text-base -mb-4"
                    />
                    <Select.Root
                      {...register('type')}
                      open={isOpen}
                      onOpenChange={setIsOpen}
                      onValueChange={(value: 'in' | 'out') => {
                        watch('type')
                        setValue('type', value)
                      }}
                    >
                      <Select.Trigger className="h-12 w-full data-[placeholder]:text-text-base/50 border border-secondary-300 rounded-md flex items-center justify-between p-4">
                        <Select.Value placeholder="Tranfer out" />

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
                          className="overflow-hidden bg-white rounded-md w-[228px] md:w-[255px] lg:w-[384px] border border-secondary-300"
                        >
                          <Select.Viewport className="p-4 w-full">
                            <Select.Item
                              className="h-12 w-full text-text-base flex items-center p-4"
                              value="in"
                            >
                              <Select.ItemText className="text-sm">
                                Transfer in
                              </Select.ItemText>
                            </Select.Item>
                            <Select.Item
                              className="h-12 w-full text-text-base flex items-center p-4"
                              value="out"
                            >
                              <Select.ItemText className="text-sm">
                                Transfer out
                              </Select.ItemText>
                            </Select.Item>
                          </Select.Viewport>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>

                    <Form.Root>
                      <Form.Label
                        title="Quantity"
                        className="text-text-base z-50"
                      />

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

                    <Button.Root type="submit" title="Transfer Crypto" />
                  </form>
                </FormProvider>

                <Dialog.Close
                  asChild
                  className="absolute top-2 right-4 h-4 w-4 appearance-none text-secondary-500 items-center justify-center"
                >
                  <button aria-label="Close">
                    <X size={16} />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            sideOffset={-8}
            align="center"
            className="w-[100px] h-12 px-4 py-2 ml-4 bg-primary-500 text-white text-center rounded items-center justify-center text-sm md:flex hidden"
          >
            Transfer Crypto
            <Tooltip.Arrow className="fill-primary-500 -left-3 absolute" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
