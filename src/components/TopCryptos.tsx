'use client'

import axios from 'axios'
import { Button } from './Button'
import { useEffect, useState } from 'react'
import { Crypto } from '@/app/api/coins/route'
import { Table } from './Table'
import { TableSelect } from './TableSelect'

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

  async function getTopCryptos() {
    const response = await axios.get('/api/coins')
    setTopCryptos(response.data)
  }

  useEffect(() => {
    getTopCryptos()
  }, [])

  return (
    <div className="w-full max-w-[1440px] py-[56px] md:py-[120px] mx-auto p-8 md:px-12 lg:p-0">
      <h1 className="text-h3 font-bold text-text-base leading-10 text-center mb-4 mb:mb-12">
        Top Cryptos
      </h1>

      <div className="hidden md:block">
        <Table.Root>
          <Table.Head headers={['#', 'Crypto', 'Price', 'Change', 'Trade']} />
          <Table.Body
            showImage
            cryptos={topCryptos}
            showQuantity={showQuantity}
          />
        </Table.Root>
      </div>

      <div className="block md:hidden">
        <div className="flex items-center justify-between px-4 text-xs text-secondary-500">
          <p>Crypto</p>
          <p>Trade</p>
        </div>
        <TableSelect cryptos={topCryptos} showQuantity={showQuantity} />
      </div>

      <Button.Root
        title={showQuantity <= 4 ? 'View more +' : 'View less'}
        className="w-fit mx-auto text-center mt-8 text-p text-primary-500 bg-transparent leading-6 font-normal"
        onClick={handleShowMore}
      />
    </div>
  )
}
