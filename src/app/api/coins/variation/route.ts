import { NextResponse } from 'next/server'

interface Price {
  price: number
}

export interface Variation {
  image: string
  symbol: string
  data: Price[]
  isPositiveVariation: boolean
  formattedVariation: string
}

export async function GET() {
  const crypto = 'ethereum'

  const responseCrypto = await fetch(
    `https://api.coingecko.com/api/v3/coins/${crypto}`,
  )
  const coin = await responseCrypto.json()

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=usd&days=1`,
    {
      next: {
        revalidate: 60,
      },
    },
  )
  const data: { prices: [number[]] } = await response.json()

  const numberFormatter = new Intl.NumberFormat('en-US', {
    signDisplay: 'exceptZero',
    maximumFractionDigits: 2,
  })

  const [, firstPrice] = data.prices[0]
  const [, lastPrice] = data.prices[data.prices.length - 1]
  const dailyVariation = ((lastPrice - firstPrice) / firstPrice) * 100

  const variationCrypto: Variation = {
    image: coin.image.small,
    symbol: coin.symbol,
    data: data.prices.map(([, price]) => ({ price: price % 1 })),
    isPositiveVariation: dailyVariation >= 0,
    formattedVariation: `${numberFormatter.format(dailyVariation)}%`,
  }

  return NextResponse.json(variationCrypto)
}
