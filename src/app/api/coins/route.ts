import { NextResponse } from 'next/server'

export interface Crypto {
  id: string
  name: string
  acronym: string
  price: string
  change: string
  image: string
  formattedChange: string
  priceInUSD: number
}

export interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap_change_percentage_24h: number

  price?: string
  percentage_24h?: string
}

export async function GET() {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
  )
  const data: Coin[] = await response.json()

  const numberFormatter = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
    maximumFractionDigits: 2,
  })

  const cryptos: Crypto[] = data.map((coin, index) => ({
    id: String(index + 1),
    name: coin.name,
    acronym: coin.symbol,
    image: coin.image,
    price: coin.current_price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    }),
    change: `${numberFormatter.format(coin.market_cap_change_percentage_24h)}%`,
    formattedChange: `${numberFormatter.format(
      coin.market_cap_change_percentage_24h,
    )}%`,
    priceInUSD: coin.current_price,
  }))

  return NextResponse.json(cryptos)
}
