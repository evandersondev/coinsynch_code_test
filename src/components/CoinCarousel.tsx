'use client'
import { Crypto } from '@/app/api/coins/route'
import { api } from '@/services/api'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CoinCarousel() {
  const [cryptos, setCryptos] = useState<Crypto[]>([])

  async function getCoins() {
    const response = await api.get<Crypto[]>('/coins')
    setCryptos(response.data)
  }

  useEffect(() => {
    getCoins()
  }, [])

  return (
    <div className="w-full md:max-w-[360px] lg:max-w-[344px] lg:ml-auto overflow-hidden md:p-2 lg:p-4 flex mx-auto gap-10">
      {cryptos.map((crypto) => (
        <motion.div
          animate={{ x: -344 - 100 }}
          transition={{
            duration: 30,
            repeatType: 'loop',
            ease: 'linear',
            repeat: Infinity,
            repeatDelay: 2,
          }}
          key={crypto.name}
          className="min-w-[135px] flex gap-2 items-end font-normal text-sm leading-4"
        >
          <span className="text-secondary-800 uppercase">{crypto.acronym}</span>
          <span className="min-w-fit text-text-base">{crypto.price}</span>
          <span
            className={
              crypto.change.includes('+')
                ? `text-tertiary-700`
                : 'text-quartenary-700'
            }
          >
            {crypto.change}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
