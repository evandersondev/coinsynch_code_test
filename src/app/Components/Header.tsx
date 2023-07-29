'use client'

import LogoImage from '@/app/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Cryptor {
  name: string
  value: string
  range: string
}

const cryptors: Cryptor[] = [
  {
    name: 'BIT',
    value: 'R$ 245,98',
    range: '+56,00',
  },
  {
    name: 'OTO',
    value: 'R$ 45,98',
    range: '-26,00',
  },
  {
    name: 'USD',
    value: 'R$ 5,98',
    range: '+6,00',
  },
  {
    name: 'DOI',
    value: 'R$ 245,98',
    range: '+56,00',
  },
  {
    name: 'REL',
    value: 'R$ 45,98',
    range: '-26,00',
  },
  {
    name: 'ORO',
    value: 'R$ 12,00',
    range: '+6,00',
  },
]

export function Header() {
  return (
    <header className="h-16 w-full max-w-[1216px] flex items-center py-4  m-auto">
      <Image src={LogoImage} alt="CoinSynch Logo" height={21} width={124} />

      <nav className="ml-10 flex gap-6 font-normal text-label leading-4 text-text-base">
        <Link href="#">About us</Link>
        <Link href="#">Top Cryptos</Link>
      </nav>

      <div className="w-full max-w-[344px] ml-auto overflow-hidden flex p-4 gap-6">
        {cryptors.map((crypto) => (
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
            className="w-[200px] flex gap-2 items-end font-normal text-label leading-4"
          >
            <span className="text-secondary-800">{crypto.name}</span>
            <span className="min-w-fit text-text-base">{crypto.value}</span>
            <span
              className={
                crypto.range.includes('+')
                  ? `text-tertiary-700`
                  : 'text-quartenary-700'
              }
            >
              {crypto.range}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="ml-20 flex gap-6">
        <button className="leading-4 text-label font-normal text-text-base">
          Sign in
        </button>
        <button className="w-[100px] h-8 py-4 px-4 flex items-center justify-center bg-primary-500 text-white leading-4 text-label font-normal rounded-[32px]">
          Sign up
        </button>
      </div>
    </header>
  )
}
