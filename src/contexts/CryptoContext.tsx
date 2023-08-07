'use client'

import { Crypto } from '@/app/api/coins/route'
import { ReactNode, createContext, useState } from 'react'

export interface Quantity {
  [cryptoName: string]: number
}

interface CryptoContextType {
  cryptos: Crypto[]
  quantity: Quantity
  removeQuatity: (quantityToRemove: number, cryptoName: string) => void
  addCrypto: (crypto: Crypto, quantity: number) => void
}

export const CryptoContext = createContext({} as CryptoContextType)

interface CryptoContextProviderProps {
  children: ReactNode
}

export function CryptoContextProvider({
  children,
}: CryptoContextProviderProps) {
  const [cryptos, setCryptos] = useState<Crypto[]>([])
  const [quantity, setQuantity] = useState<Quantity>({})

  function addCrypto(crypto: Crypto, quantity: number) {
    setCryptos((oldValue) => [...oldValue, crypto])
    setQuantity((oldValue) => ({
      [crypto.name]: quantity,
      ...oldValue,
    }))
  }

  function removeQuatity(quantityToRemove: number, cryptoName: string) {
    const cryptoQuantity = quantity[cryptoName]

    if (quantityToRemove > cryptoQuantity) {
      throw new Error('Your balance is not suficient.')
    }

    setQuantity({
      ...quantity,
      [cryptoName]: quantity[cryptoName] - quantityToRemove,
    })

    if (quantity[cryptoName] - quantityToRemove === 0) {
      const cryptoRemoved = cryptos.filter(
        (crypto) => crypto.name !== cryptoName,
      )
      setCryptos(cryptoRemoved)
    }
  }

  return (
    <CryptoContext.Provider
      value={{
        cryptos,
        quantity,
        removeQuatity,
        addCrypto,
      }}
    >
      {children}
    </CryptoContext.Provider>
  )
}
