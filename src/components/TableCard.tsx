import { Crypto } from '@/app/api/coins/route'
import { Quantity } from '@/contexts/CryptoContext'
import { Button } from './Button'
import Image from 'next/image'
import { TransferCryptoModal } from './TransferCryptoModal'

interface TableCardProps {
  cryptos: Crypto[]
  quantity: Quantity
  showQuantity: number
  onAction?: () => void
  showImage?: boolean
  transferButton?: boolean
}

export function TableCard({ cryptos, showQuantity, quantity }: TableCardProps) {
  return (
    <div className="w-full grid grid-cols-2">
      {cryptos.slice(0, showQuantity).map((crypto) => {
        const hasChageSymbolPlus = crypto.change.includes('+')

        return (
          <div
            key={crypto.id}
            className="shadow-base-lg flex flex-col rounded-md overflow-hidden"
          >
            <div className="h-[49px] bg-primary-100 p-4 flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Image
                  height={16}
                  width={16}
                  src={crypto.image}
                  alt={crypto.acronym}
                />
                <p className="text-sm">
                  {crypto.name}{' '}
                  <span className="text-xs uppercase text-secondary-500">
                    {crypto.acronym}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col p-4 gap-1">
              <p className="text-xs text-secondary-500">Holdings</p>
              <span className="text-sm">US{crypto.price}</span>
              <p className="text-xs text-primary-500">
                {(quantity[crypto.name] / crypto.priceInUSD).toFixed(4)}{' '}
                {crypto.acronym.toLocaleUpperCase()}
              </p>
            </div>
            <div className="h-[1px] bg-secondary-200 mx-4" />
            <div className="p-4">
              <p className="text-xs text-secondary-500">Change</p>
              <span
                data-haschagesymbolplus={hasChageSymbolPlus}
                className="text-quartenary-700 data-[haschagesymbolplus=true]:text-tertiary-700 text-sm"
              >
                {crypto.formattedChange}
              </span>
            </div>

            <TransferCryptoModal crypto={crypto}>
              <Button.Root
                title="Trade"
                className="bg-primary-500 text-white h-6 w-[96px] text-sm mx-auto mb-4"
              />
            </TransferCryptoModal>
          </div>
        )
      })}
    </div>
  )
}
