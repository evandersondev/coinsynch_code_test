import Image from 'next/image'
import wavesImage from '@/assets/waves.png'

export function Wave() {
  return (
    <div className="h-[247px] lg:h-[335px] w-ful flex items-center md:mt-0 -mt-10">
      <Image
        src={wavesImage}
        alt=""
        className="h-[224px] w-full object-cover"
      />
    </div>
  )
}
