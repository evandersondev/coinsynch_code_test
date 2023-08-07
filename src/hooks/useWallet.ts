import { useContext } from 'react'
import { WalletContext } from '@/contexts/WalletContext'

export function useWallet() {
  const context = useContext(WalletContext)

  return context
}
