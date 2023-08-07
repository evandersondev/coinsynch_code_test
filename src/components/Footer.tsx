import Image from 'next/image'
import logoImage from '@/assets/logo.png'

interface FooterProps {
  showLogo?: boolean
}

export function Footer({ showLogo = true }: FooterProps) {
  return (
    <footer
      data-logo={showLogo}
      className="w-full max-w-[1440px] h-16 mx-auto flex justify-center md:justify-between data-[logo=false]:justify-center items-center text-text-base text-label font-normal lg:p-0 px-12"
    >
      <p className="md:block hidden">Copyright © 2022 - All rights reserved</p>
      {showLogo && <Image src={logoImage} alt="" className="h-[16px] w-auto" />}
    </footer>
  )
}
