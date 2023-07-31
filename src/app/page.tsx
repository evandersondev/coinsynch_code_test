import { Header } from './components/Header'
import { Hero } from './components/Hero'

import { AboutUs } from './components/AboutUs'
import { TopCryptos } from './components/TopCryptos'
import { NewsLetters } from './components/NewsLetters'
import { Footer } from './components/Footer'
import { Wave } from './components/Wave'

export default function Home() {
  return (
    <div className="h-full bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Wave />
      <AboutUs />
      <TopCryptos />
      <NewsLetters />
      <Footer />
    </div>
  )
}
