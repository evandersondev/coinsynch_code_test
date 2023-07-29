'use client'
import Image from 'next/image'
import {
  motion,
  useAnimation,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import carouselImage1 from '@/app/assets/carousel-1.png'
import carouselImage2 from '@/app/assets/carousel-2.png'
import carouselImage3 from '@/app/assets/carousel-3.png'
import { useInView } from 'react-intersection-observer'
import { useEffect, useRef, useState } from 'react'
import { HorizontalWrapper } from './HorizontalWrapper'

const images = [carouselImage1, carouselImage2, carouselImage3]

export function Hero() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll()

  const handleScroll = () => {
    if (scrollRef.current === null) return
    // Implemente a lógica para verificar o scroll e atualizar o slide aqui
    // Neste exemplo, estou usando um valor fixo para mudar o slide apenas para fins de demonstração
    const scrollPosition = window.scrollY

    if (scrollPosition > 200) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollPosition,
        top: 0,
        behavior: 'smooth',
      })
    } else {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - scrollPosition,
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen max-w-[1216px] flex items-center m-auto">
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-[10px] bg-red-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      /> */}

      <div className="w-[48%]">
        <h1 className="font-bold text-h1 leading-[-048px] text-primary-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        <h5 className="font-normal text-h5 leading-8 text-text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </h5>
        <button className="w-[278px] h-12 flex items-center justify-center bg-primary-500 p-[14px] gap-[10px] rounded-[32px] text-white font-bold text-p">
          SIGN UP NOW
        </button>

        <div className="mt-20 flex gap-8 items-center">
          <span className="bg-primary-100 px-4 py-1 font-normal text-primary-500 leading-4 text-h5">
            Cryptos
          </span>
          <span className="bg-primary-100 px-4 py-1 font-normal text-primary-500 leading-4 text-h5">
            NFTs
          </span>
          <span className="bg-primary-100 px-4 py-1 font-normal text-primary-500 leading-4 text-h5">
            Games
          </span>
        </div>
      </div>

      {/* <motion.div className="max-w-[48%] ">
        <motion.div className="flex items-center gap-[120px]">
          {images.map((image, index) => (
            <motion.div key={index} className="min-h-[499px] min-w-[496px]">
              <Image src={image} alt="woman touch a tablet" height={499} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}

      <div
        ref={scrollRef}
        className="max-w-[48%] flex items-center gap-12 overflow-hidden"
      >
        {images.map((image, index) => (
          <div
            key={index}
            // className="absolute w-full h-full object-cover"
          >
            <Image
              className="min-h-[496px] min-w-[469px] "
              src={image}
              alt={image.src}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
