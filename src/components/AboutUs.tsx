import bitcoinImage from '@/assets/bitcoin.png'
import atomImage from '@/assets/atom.png'
import chartImage from '@/assets/chart.png'
import laptopImage from '@/assets/laptop.png'
import { Button } from './Button'
import Image, { StaticImageData } from 'next/image'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useModal } from '../hooks/useModal'
import { ModalType } from '../contexts/ModalContext'
import { useEffect, useRef, useState } from 'react'

interface Card {
  image: StaticImageData
  subtitle: string
  title: string
  description: string
  gridClassName: string
}

const cards: Card[] = [
  {
    image: bitcoinImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    subtitle: 'For your company',
    title: 'Crypto Solutions',
    gridClassName: 'col-start-1 col-end-4 lg:col-end-4',
  },
  {
    image: atomImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    subtitle: 'For your company',
    title: 'Crypto Solutions',
    gridClassName: 'lg:col-start-4 lg:col-end-6 col-start-5 col-end-7',
  },
  {
    image: chartImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    subtitle: 'For your company',
    title: 'Crypto Solutions',
    gridClassName: 'col-start-2 lg:col-end-5 col-end-5',
  },
  {
    image: laptopImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    subtitle: 'For your company',
    title: 'Crypto Solutions',
    gridClassName: 'lg:col-start-5 lg:col-end-7 col-start-6 col-end-8',
  },
]

export function AboutUs() {
  const { handleShowModal } = useModal()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 765) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
      console.log(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="w-full max-w-[672px] lg:max-w-[1440px] mx-auto lg:h-[818px] flex flex-col-reverse lg:flex-row pl-[28px] md:px-12 pb-[56px] lg:p-0">
      <div className="w-full lg:w-[50%] flex items-center lg:justify-center">
        {isMobile && (
          <ScrollContainer horizontal>
            <div className="md:h-[568px] md:cursor-default flex md:grid md:grid-cols-8 lg:grid-cols-7 gap-4 md:gap-6 lg:gap-8">
              {cards.map((card) => (
                <div key={card.image.src} className={card.gridClassName}>
                  <div className="w-[200px] md:w-[280px] lg:w-[232px] p-6 flex flex-col shadow-base">
                    <Image className="mb-4 " src={card.image} alt="" />
                    <h3 className="text-sm md:text-base font-bold text-primary-500 leading-6 m-0 mb-1">
                      {card.subtitle}
                    </h3>
                    <h1 className="text-xl md:text-2xl font-bold text-text-base leading-8 mb-2">
                      {card.title}
                    </h1>
                    <p className="text-sm text-text-base leading-6 font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollContainer>
        )}

        {!isMobile && (
          <div className="md:h-[568px] cursor-grabbing md:cursor-default flex md:grid md:grid-cols-8 lg:grid-cols-7 gap-4 md:gap-6 lg:gap-8">
            {cards.map((card) => (
              <div key={card.image.src} className={card.gridClassName}>
                <div className="w-[200px] md:w-[280px] lg:w-[232px] p-6 flex flex-col shadow-base">
                  <Image className="mb-4 " src={card.image} alt="" />
                  <h3 className="text-sm md:text-base font-bold text-primary-500 leading-6 m-0 mb-1">
                    {card.subtitle}
                  </h3>
                  <h1 className="text-xl md:text-2xl font-bold text-text-base leading-8 mb-2">
                    {card.title}
                  </h1>
                  <p className="text-sm text-text-base leading-6 font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-full lg:w-[50%] flex flex-col justify-center">
        <div className="w-[494px] lg:w-[406px] mx-auto">
          <h3 className="text-base lg:text-h5 font-bold text-primary-500 mb-1">
            Lorem ipsum
          </h3>
          <h1 className="text-[32px] lg:text-h2 font-bold leading-8 lg:leading-[48px] text-text-base mb-4">
            Lorem ipsum
          </h1>
          <p className="text-p font-normal leading-6 text-text-base mb-6 md:mb-10 md:pr-0 pr-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>

          <Button.Root
            title="Sign up now"
            className="w-[176px] px-6 leading-6 hidden lg:block"
            onClick={() => handleShowModal(ModalType.signup)}
          />
        </div>
      </div>
    </section>
  )
}
