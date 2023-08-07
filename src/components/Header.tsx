import LogoImage from '@/assets/logo.png'
import Image from 'next/image'

import { Button } from './Button'
import { CoinCarousel } from './CoinCarousel'
import { NavLink } from './NavLink'
import { useModal } from '../hooks/useModal'
import { ModalType } from '../contexts/ModalContext'
import { Menu } from 'lucide-react'

export function Header() {
  const { handleShowModal } = useModal()

  return (
    <div className="flex flex-col lg:flex-row md:px-12 px-6">
      <header className="h-16 w-full max-w-[1216px] flex items-center py-4  m-auto">
        <Image src={LogoImage} alt="CoinSynch Logo" height={21} width={124} />

        <nav className="hidden ml-10 md:flex gap-6 font-normal text-label leading-4 text-text-base">
          <NavLink title="About us" href="#" />
          <NavLink title="Top Cryptos" href="#" />
        </nav>

        <div className="ml-auto hidden lg:block">
          <CoinCarousel />
        </div>

        <div className="ml-auto hidden md:flex items-center gap-6 lg:ml-20">
          <Button.Root
            title="Sign in"
            onClick={() => handleShowModal(ModalType.signin)}
            className="text-sm text-text-base w-fit max-h-min p-0 bg-transparent"
          />

          <Button.Root
            title="Sign up"
            onClick={() => handleShowModal(ModalType.signup)}
            className="w-[100px] h-8 py-4 px-4 leading-4 rounded-[32px] text-sm text-white"
          />
        </div>

        <div className="ml-auto block md:hidden">
          <Menu height={24} width={24} className="text-secondary-500" />
        </div>
      </header>
      <div className="w-full block lg:hidden m-auto shadow-base border-t border-t-secondary-200">
        <CoinCarousel />
      </div>
    </div>
  )
}
