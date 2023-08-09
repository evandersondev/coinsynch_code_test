'use client'

import Image from 'next/image'

import walletImage from '@/assets/wallet.png'

import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { HeaderDashboard } from '@/components/HeaderDashboard'
import { AddCryptoModal } from '@/components/AddCryptoModal'
import { Empty } from '@/components/Empty'
import { useCrypto } from '@/hooks/useCrypto'
import { Table } from '@/components/Table'
import { CardDashboard } from '@/components/CardDashboard'
import { TableCard } from '@/components/TableCard'
import { useState } from 'react'
import { Button } from '@/components/Button'

export default function Dashboard() {
  const { cryptos, quantity } = useCrypto()
  const initialCryptosToShow = 4
  const [showQuantity, setShowQuantity] = useState(initialCryptosToShow)
  const [topCryptos] = useState<Crypto[]>([])
  const totalTopCryptos = cryptos.length + 1

  function handleShowMore() {
    setShowQuantity((oldValue) =>
      oldValue === 4
        ? topCryptos.length + totalTopCryptos
        : initialCryptosToShow,
    )
  }

  return (
    <div className="h-screen w-full max-w-[1440px] mx-auto flex flex-col ">
      <HeaderDashboard />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 py-14 px-6 md:px-[69px]">
          <CardDashboard />

          <div className="h-[389px] w-full shadow-base-lg p-6 flex flex-col">
            <div className="w-full flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <Image src={walletImage} alt="" className="h-8 w-8" />
                <h2 className="text-2xl font-bold">My Wallet</h2>
              </div>

              <AddCryptoModal />
            </div>

            <div className="md:block hidden">
              {cryptos.length === 0 ? (
                <Empty />
              ) : (
                <Table.Root>
                  <Table.Head
                    headers={['#', 'Crypto', 'Holdings', 'Change', 'Trade']}
                  />
                  <Table.Body
                    showImage
                    transferButton
                    cryptos={cryptos}
                    showQuantity={cryptos.length}
                    quantity={quantity}
                  />
                </Table.Root>
              )}
            </div>

            <div className="block md:hidden">
              {cryptos.length === 0 ? (
                <Empty />
              ) : (
                <>
                  <TableCard
                    cryptos={cryptos}
                    showQuantity={showQuantity}
                    quantity={quantity}
                  />

                  <Button.Root
                    title={showQuantity <= 4 ? 'View more +' : 'View less'}
                    className="w-fit mx-auto text-center mt-8 text-p text-primary-500 bg-transparent leading-6 font-normal shadow-none"
                    onClick={handleShowMore}
                  />
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      <div className="hidden lg:block">
        <Footer showLogo={false} />
      </div>

      <div className="block lg:hidden">
        <Footer showLogo />
      </div>
    </div>
  )
}
