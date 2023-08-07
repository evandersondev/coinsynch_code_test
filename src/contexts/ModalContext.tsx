'use client'

import { ReactNode, createContext, useState } from 'react'

export enum ModalType {
  'signin',
  'signup',
}

interface ModalContextType {
  modal: ModalType | null
  handleClose: () => void
  handleShowModal: (type: ModalType) => void
}

export const ModalContext = createContext({} as ModalContextType)

interface ModalContextProviderProps {
  children: ReactNode
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modal, setModal] = useState<ModalType | null>(null)

  function handleClose() {
    setModal(null)
  }

  function handleShowModal(type: ModalType) {
    setModal(type)
  }

  return (
    <ModalContext.Provider
      value={{
        modal,
        handleShowModal,
        handleClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
