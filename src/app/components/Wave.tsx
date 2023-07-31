import Image from 'next/image'
import wavesImage from '@/app/assets/waves.png'

export function Wave() {
  return (
    <div className="h-[335px] w-ful flex items-center">
      <Image
        src={wavesImage}
        alt=""
        className="h-[224px] w-full object-cover"
      />
    </div>
  )
}
