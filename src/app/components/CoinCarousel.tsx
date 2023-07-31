'use client'
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

export function CoinCarousel() {
  return (
    <div className="w-full max-w-[344px] ml-auto overflow-hidden p-4 flex gap-10">
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
          className="w-[135px] flex gap-2 items-end font-normal text-sm leading-4"
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
  )
}
