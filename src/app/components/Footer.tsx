import Image from 'next/image'
import logoImage from '@/app/assets/logo.png'

export function Footer() {
  return (
    <footer className="w-full max-w-[1440px] h-12 mx-auto flex justify-between items-center text-text-base text-label font-normal">
      <p>Copyright © 2022 - All rights reserved</p>
      <Image src={logoImage} alt="" className="h-[16px] w-auto" />
    </footer>
  )
}
