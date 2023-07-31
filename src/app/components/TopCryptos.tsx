'use client'

import { Button } from './Button'
import { useState } from 'react'

interface Crypto {
  id: string
  name: string
  acronym: string
  price: string
  change: string
}

interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap_change_percentage_24h: number

  price?: string
  percentage_24h?: string
}

export function TopCryptos() {
  const initialCryptosToShow = 4
  const [showQuantity, setShowQuantity] = useState(initialCryptosToShow)
  const [topCryptos, setTopCryptos] = useState<Crypto[]>([])
  const totalTopCryptos = topCryptos.length + 1

  function handleShowMore() {
    setShowQuantity((oldValue) =>
      oldValue === 4
        ? topCryptos.length + totalTopCryptos
        : initialCryptosToShow,
    )
  }

  // const response = await fetch(
  //   'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  // )
  // const data: Coin[] = await response.json()
  // const cryptos: Crypto[] = data.map((coin) => ({
  //   id: coin.id,
  //   name: coin.name,
  //   acronym: coin.symbol,
  //   price: coin.price || 'R$ 0,00',
  //   change: coin.percentage_24h || '0%',
  // }))
  // setTopCryptos(cryptos)

  return (
    <div className="w-full max-w-[1440px] py-[120px] mx-auto">
      <h1 className="text-h3 font-bold text-text-base leading-10 text-center mb-12">
        Top Cryptos
      </h1>

      <table className="table-auto w-full max-w-[1216px] mx-auto">
        <thead>
          <tr className="text-left text-secondary-500 text-label leading-4">
            <th className="font-normal w-[162px] pl-6">#</th>
            <th className="font-normal">Crypto</th>
            <th className="font-normal">Price</th>
            <th className="font-normal">Change</th>
            <th className="font-normal w-[104px]">Trade</th>
          </tr>
        </thead>

        <tbody>
          {topCryptos.slice(0, showQuantity).map((crypto) => {
            const hasChageSymbolPlus = crypto.change.includes('+')

            return (
              <tr
                key={crypto.id}
                className="h-16 text-text-base font-normal text-p leading-6 even:bg-secondary-100/50 odd:bg-white hover:bg-secondary-400/30 transition-colors"
              >
                <td className="pl-6 text-secondary-500 text-label leading-4">
                  {crypto.id}
                </td>
                <td className="">
                  {crypto.name}{' '}
                  <span className="text-p text-secondary-500">
                    {crypto.acronym}
                  </span>
                </td>
                <td>{crypto.price}</td>
                <td
                  data-haschagesymbolplus={hasChageSymbolPlus}
                  className="text-quartenary-700 data-[haschagesymbolplus=true]:text-tertiary-700"
                >
                  {crypto.change}
                </td>
                <td className="max-w-fit">
                  <Button.Root
                    title="Buy"
                    className="w-[80px] h-[32px] px-4 py-2 bg-tertiary-700"
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Button.Root
        title={showQuantity <= 4 ? 'View more +' : 'View less'}
        className="w-fit mx-auto text-center mt-8 text-p text-primary-500 bg-transparent leading-6 font-normal"
        onClick={handleShowMore}
      />
    </div>
  )
}
