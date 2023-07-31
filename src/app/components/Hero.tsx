import Image from 'next/image'
import carouselImage1 from '@/app/assets/carousel-1.png'
// import carouselImage2 from '@/app/assets/carousel-2.png'
// import carouselImage3 from '@/app/assets/carousel-3.png'
import { SignUpModal } from './SignupModal'
import { Button } from './Button'
import { MoveRight } from 'lucide-react'

const images = [carouselImage1]

export function Hero() {
  return (
    <div className="h-[655px] max-w-[1216px] flex items-center mx-auto gap-6 pr-4">
      <div className="w-[50%]">
        <h1 className="font-bold leading-[56px] text-5xl  -tracking-[0.48px] text-primary-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
        <h5 className="font-normal text-xl leading-8 text-text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </h5>

        <SignUpModal>
          <Button.Root title="SIGN UP NOW" className="w-[278px] font-bold">
            <Button.Icon icon={MoveRight} />
          </Button.Root>
        </SignUpModal>

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

      <div className="w-[50%] flex items-center justify-center relative">
        {images.map((image, index) => (
          <div className="" key={index}>
            <Image className="min-h-[496px] min-w-[469px]" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
