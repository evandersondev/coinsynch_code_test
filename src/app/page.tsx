import Image from 'next/image'
import { Header } from './Components/Header'
import { Hero } from './Components/Hero'
import wavesImage from '@/app/assets/waves.png'

export default function Home() {
  return (
    <div className="h-full bg-white overflow-x-hidden">
      <Header />

      <Hero />

      {/* <div className="h-[224px] w-full">
        <Image src={wavesImage} alt="" />
      </div> */}
      <div className="h-[4000px]"></div>
    </div>
  )
}
