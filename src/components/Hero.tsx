import Image from 'next/image'
import carouselImage1 from '@/assets/carousel-1.png'
// import carouselImage2 from '@/app/assets/carousel-2.png'
// import carouselImage3 from '@/app/assets/carousel-3.png'
import { Button } from './Button'
import { MoveRight } from 'lucide-react'
import { useModal } from '../hooks/useModal'
import { ModalType } from '../contexts/ModalContext'

const images = [carouselImage1]

export function Hero() {
  const { handleShowModal } = useModal()

  return (
    <div className="md:h-[397px] lg:h-[655px] max-w-[1216px] flex items-center mx-auto gap-6 px-6 md:px-12">
      <div className="w-full md:w-[50%] md:mt-0 mt-[56px]">
        <h1 className="font-bold lg:leading-[56px] leading-[32px] md:leading-[40px] text-xl md:text-[32px] lg:text-5xl  -tracking-[0.48px] text-primary-500 mb-2 md:mb-4 lg:mb-6 md:text-left text-center md:p-0 px-16">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        <h5 className="font-normal text-center md:text-left text-sm md:text-base lg:text-xl leading-6 lg:leading-8 text-text-base px-12 md:pr-16 mb-6 lg:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </h5>

        <Button.Root
          onClick={() => handleShowModal(ModalType.signup)}
          title="SIGN UP NOW"
          className="w-[278px] font-bold md:m-0 mx-auto"
        >
          <Button.Icon icon={MoveRight} />
        </Button.Root>

        <div className="mt-6 md:mt-[44px] lg:mt-20 flex gap-8 items-center justify-center md:justify-start">
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

      <div className="w-[50%] hidden md:flex items-center justify-center relative">
        {images.map((image, index) => (
          <div className="" key={index}>
            <Image
              className="h-[280px] w-auto lg:min-h-[496px] lg:min-w-[469px]"
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}
