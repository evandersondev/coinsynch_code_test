'use client'

import { ReactNode, createContext, useState } from 'react'

interface WalletContextType {
  balance: number
  addBalance: (value: number) => void
  removeBalance: (value: number) => void
}

export const WalletContext = createContext({} as WalletContextType)

interface WalletContextProviderProps {
  children: ReactNode
}

export function WalletContextProvider({
  children,
}: WalletContextProviderProps) {
  const [balance, setBalance] = useState<number>(0)

  function addBalance(value: number) {
    setBalance((oldValue) => oldValue + value)
  }

  function removeBalance(value: number) {
    if (value > balance) {
      throw new Error('Balance insuficiente')
    }

    setBalance((oldValue) => oldValue - value)
  }

  return (
    <WalletContext.Provider
      value={{
        balance,
        addBalance,
        removeBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
