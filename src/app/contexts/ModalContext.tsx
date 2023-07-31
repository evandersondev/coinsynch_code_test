'use client'

import { ReactNode, createContext, useState } from 'react'

interface ModalContextType {
  showSignIn: boolean
  showSignUp: boolean
  handleClose: () => void
  handleShowSignIn: () => void
  handleShowSignUp: () => void
}

export const ModalContext = createContext({} as ModalContextType)

interface ModalContextProviderProps {
  children: ReactNode
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [showSignIn, setShowSignIn] = useState(true)
  const [showSignUp, setShowSignUp] = useState(false)

  function handleClose() {
    setShowSignIn(false)
    setShowSignUp(false)
  }

  function handleShowSignIn() {
    setShowSignIn((old) => !old)
  }

  function handleShowSignUp() {
    setShowSignUp((old) => !old)
  }

  return (
    <ModalContext.Provider
      value={{
        showSignIn,
        showSignUp,
        handleShowSignIn,
        handleShowSignUp,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
