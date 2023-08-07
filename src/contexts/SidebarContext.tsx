'use client'

import { ReactNode, createContext, useState } from 'react'

interface SidebarContextType {
  isOpen: boolean
  handleChange: () => void
}

export const SidebarContext = createContext({} as SidebarContextType)

interface SidebarContextProviderProps {
  children: ReactNode
}

export function SidebarContextProvider({
  children,
}: SidebarContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function handleChange() {
    setIsOpen((old) => !old)
  }

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        handleChange,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
