import Image from 'next/image'
import logoImage from '@/assets/logo.png'

interface FooterProps {
  showLogo?: boolean
  width?: 'center' | 'full'
}

export function Footer({ showLogo = true, width = 'center' }: FooterProps) {
  return (
    <footer
      data-width={width}
      data-logo={showLogo}
      className="w-full data-[width=center]:max-w-[1440px] h-16 bg-white mx-auto flex justify-center md:justify-between data-[logo=false]:justify-center items-center text-text-base text-label font-normal  px-12 shadow-base-top"
    >
      <p className="md:block hidden">Copyright © 2022 - All rights reserved</p>
      {showLogo && <Image src={logoImage} alt="" className="h-[16px] w-auto" />}
    </footer>
  )
}
