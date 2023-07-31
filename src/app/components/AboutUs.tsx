import bitcoinImage from '@/app/assets/bitcoin.png'
import atomImage from '@/app/assets/atom.png'
import chartImage from '@/app/assets/chart.png'
import laptopImage from '@/app/assets/laptop.png'
import { Button } from './Button'
import { SignUpModal } from './SignupModal'
import Image, { StaticImageData } from 'next/image'

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
    gridClassName: 'col-start-1 col-end-3',
  },
  {
    image: atomImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    subtitle: 'For your company',
    title: 'Crypto Solutions',
    gridClassName: 'col-start-4 col-end-6',
  },
  {
    image: chartImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    subtitle: 'For your company',
    title: 'Crypto Solutions',
    gridClassName: 'col-start-2 col-end-5',
  },
  {
    image: laptopImage,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam',
    subtitle: 'For your company',
    title: 'Crypto Solutions',
    gridClassName: 'col-start-5 col-end-7',
  },
]

export function AboutUs() {
  return (
    <section className="w-full max-w-[1440px] mx-auto h-[818px] flex">
      <div className="w-[50%] flex items-center justify-center">
        <div className="h-[568px] grid grid-cols-7 gap-8">
          {cards.map((card) => (
            <div key={card.image.src} className={card.gridClassName}>
              <div className="w-[232px] p-6 flex flex-col">
                <Image className="mb-4" src={card.image} alt="" />
                <h3 className="text-p font-bold text-primary-500 leading-6 m-0 mb-1">
                  {card.subtitle}
                </h3>
                <h1 className="text-h4 font-bold text-text-base leading-8 mb-2">
                  {card.title}
                </h1>
                <p className="text-label text-text-base leading-6 font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[50%] flex flex-col justify-center">
        <div className="w-[406px] mx-auto">
          <h3 className="text-h5 font-bold text-primary-500 mb-1">
            Lorem ipsum
          </h3>
          <h1 className="text-h2 font-bold leading-[48px] text-text-base mb-4">
            Lorem ipsum
          </h1>
          <p className="text-p font-normal leading-6 text-text-base mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>

          <SignUpModal>
            <Button.Root
              title="Sign up now"
              className="w-[176px] px-6 leading-6"
            />
          </SignUpModal>
        </div>
      </div>
    </section>
  )
}
