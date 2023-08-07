import Image from 'next/image'
import emptyImage from '@/assets/empty.png'

export function Empty() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={emptyImage} alt="" height={68} />
      <h2 className="text-xl font-bold mb-2 mt-12">Nothing here yet...</h2>
      <p className="text-sm font-normal">Add a cryptor and start earning</p>
    </div>
  )
}
