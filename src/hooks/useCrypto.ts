import { useContext } from 'react'
import { CryptoContext } from '@/contexts/CryptoContext'

export function useCrypto() {
  const context = useContext(CryptoContext)

  return context
}
