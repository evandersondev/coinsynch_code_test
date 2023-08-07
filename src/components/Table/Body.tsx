import { Crypto } from '@/app/api/coins/route'
import { Button } from '../Button'
import Image from 'next/image'
import { Quantity } from '@/contexts/CryptoContext'
import { TransferCryptoModal } from '../TransferCryptoModal'

interface BodyProps {
  cryptos: Crypto[]
  quantity?: Quantity
  showQuantity: number
  onAction?: () => void
  showImage?: boolean
  transferButton?: boolean
}

export function Body({
  cryptos,
  quantity,
  showQuantity,
  showImage = false,
  transferButton = false,
  onAction,
}: BodyProps) {
  return (
    <tbody>
      {cryptos.slice(0, showQuantity).map((crypto, index) => {
        const hasChageSymbolPlus = crypto.change.includes('+')

        return (
          <tr
            key={crypto.id}
            className="h-16 text-text-base font-normal text-p leading-6 even:bg-secondary-100/50 odd:bg-white hover:bg-secondary-400/30 transition-colors"
          >
            <td className="pl-6 text-secondary-500 text-label leading-4">
              {('0' + (index + 1)).slice(-2)}
            </td>
            <td>
              <div className="h-full flex items-center gap-1">
                {showImage && (
                  <Image
                    width={24}
                    height={24}
                    src={crypto.image}
                    alt={crypto.name}
                    className="lg:w-6 lg:h-6 w-8 h-8 rounded-full object-cover mr-3"
                  />
                )}
                {crypto.name}{' '}
                <span className="text-p text-secondary-500 uppercase">
                  {crypto.acronym}
                </span>
              </div>
            </td>
            <td>
              {crypto.price}

              {quantity && (
                <p className="text-xs text-primary-500">
                  {(quantity[crypto.name] / crypto.priceInUSD).toFixed(4)}{' '}
                  {crypto.acronym.toLocaleUpperCase()}
                </p>
              )}
            </td>
            <td
              data-haschagesymbolplus={hasChageSymbolPlus}
              className="text-quartenary-700 data-[haschagesymbolplus=true]:text-tertiary-700"
            >
              {crypto.change}
            </td>
            <td className="max-w-fit">
              {!transferButton && (
                <Button.Root
                  title="Buy"
                  onClick={onAction}
                  className="w-[80px] h-[32px] px-4 py-2 bg-tertiary-700"
                />
              )}
              {transferButton && <TransferCryptoModal crypto={crypto} />}
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
