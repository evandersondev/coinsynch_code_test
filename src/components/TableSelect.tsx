import { Crypto } from '@/app/api/coins/route'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface TableSelectProps {
  cryptos: Crypto[]
  showQuantity: number
}

export function TableSelect({ cryptos, showQuantity }: TableSelectProps) {
  const [open, setOpen] = useState('')

  return (
    <Accordion.Root
      className="w-full"
      type="single"
      onValueChange={setOpen}
      collapsible
    >
      {cryptos.slice(0, showQuantity).map((crypto) => {
        const hasChageSymbolPlus = crypto.change.includes('+')

        return (
          <Accordion.Item key={crypto.id} value={crypto.id}>
            <Accordion.Trigger className="w-full h-14 flex items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <Image
                  height={24}
                  width={24}
                  src={crypto.image}
                  alt={crypto.acronym}
                />
                <p className="text-xs">
                  {crypto.name}{' '}
                  <span className="uppercase text-secondary-500">
                    {crypto.acronym}
                  </span>
                </p>
              </div>
              <ChevronDown
                size={24}
                strokeWidth={3}
                data-state={open === crypto.id}
                className="font-bold text-primary-500 data-[state=true]:rotate-180"
              />
            </Accordion.Trigger>
            <Accordion.Content>
              <div className="w-full h-[80px] flex flex-col justify-center gap-4 p-4">
                <div className="flex items-center justify-between text-xs">
                  <p className="text-secondary-500">Price</p>
                  <p className="text-sm">US{crypto.price}</p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <p className="text-secondary-500">Change</p>
                  <p
                    className="text-sm text-quartenary-700 data-[haschagesymbolplus=true]:text-tertiary-700"
                    data-haschagesymbolplus={hasChageSymbolPlus}
                  >
                    {crypto.formattedChange}
                  </p>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}

// <Collapsible.Root
//   key={crypto.id}
//   className="w-full"
//   open={open}
//   onOpenChange={setOpen}
// >
//   <Collapsible.Trigger asChild>
//     <button>
//
//     </button>
//   </Collapsible.Trigger>

//   <Collapsible.Content>
//     <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7">
//       <span className="text-violet11 text-[15px] leading-[25px]">
//         @radix-ui/colors
//       </span>
//     </div>
//     <div className="bg-white rounded my-[10px] p-[10px] shadow-[0_2px_10px] shadow-blackA7">
//       <span className="text-violet11 text-[15px] leading-[25px]">
//         @stitches/react
//       </span>
//     </div>
//   </Collapsible.Content>
// </Collapsible.Root>
