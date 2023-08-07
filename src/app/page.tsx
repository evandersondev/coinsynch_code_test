'use client'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

import { AboutUs } from '../components/AboutUs'
import { TopCryptos } from '../components/TopCryptos'
import { NewsLetters } from '../components/NewsLetters'
import { Footer } from '../components/Footer'
import { Wave } from '../components/Wave'
import { useModal } from '../hooks/useModal'
import { ModalType } from '../contexts/ModalContext'
import { SignInModal } from '../components/SignInModal'
import { SignUpModal } from '../components/SignUpModal'

export default function Home() {
  const { modal } = useModal()

  return (
    <>
      <div className="h-full bg-white overflow-x-hidden">
        <Header />
        <Hero />
        <Wave />
        <AboutUs />
        <TopCryptos />
        <NewsLetters />
        <Footer />
      </div>

      {modal === ModalType.signin && <SignInModal />}
      {modal === ModalType.signup && <SignUpModal />}
    </>
  )
}
