import LogoImage from '@/app/assets/logo.png'
import Image from 'next/image'

import { SignInModal } from './SignInModal'
import { SignUpModal } from './SignupModal'
import { Button } from './Button'
import { CoinCarousel } from './CoinCarousel'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className="h-16 w-full max-w-[1216px] flex items-center py-4  m-auto">
      <Image src={LogoImage} alt="CoinSynch Logo" height={21} width={124} />

      <nav className="ml-10 flex gap-6 font-normal text-label leading-4 text-text-base">
        <NavLink title="About us" href="#" />
        <NavLink title="Top Cryptos" href="#" />
      </nav>

      <CoinCarousel />

      <div className="ml-20 flex items-center gap-6">
        <SignInModal>
          <Button.Root
            title="Sign in"
            className="text-sm text-text-base w-fit max-h-min p-0 bg-transparent"
          />
        </SignInModal>

        <SignUpModal>
          <Button.Root
            title="Sign in"
            className="w-[100px] h-8 py-4 px-4 leading-4 rounded-[32px] text-sm text-white"
          />
        </SignUpModal>
      </div>
    </header>
  )
}
