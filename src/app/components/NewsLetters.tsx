import Image from 'next/image'
import waveSuscribeImage from '@/app/assets/waves-2.png'
import { Button } from './Button'

export function NewsLetters() {
  return (
    <div className="w-full h-[412px] flex items-center overflow-hidden relative bg-gradient-to-138deg from-primary-500 to-primary-700">
      <main className="w-full max-w-[1440px] mx-auto flex">
        <aside className="w-[50%] text-white flex flex-col z-10">
          <h4 className="text-h4 text-primary-200 leading-8 font-bold mb-1">
            Lorem ipsum
          </h4>
          <h2 className="text-h2 text-white font-bold leading-[48px] tracking-[.4px] mb-4">
            Lorem ipsum
          </h2>
          <p className="block w-full max-w-[385px] text-white text-p leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </p>
        </aside>

        <div className="w-[50%] z-10">
          <div className="w-full max-w-[384px] mx-auto flex flex-col">
            <label
              htmlFor="email"
              className="text-label text-white leading-4 mb-2"
            >
              Email
            </label>
            <input
              className="h-12 rounded-md w-full bg-white shadow-base p-4 border-0 placeholder:text-secondary-400 text-text-base mb-[21px] focus:outline focus:outline-offset-0 focus:outline-2 focus:outline-text-base"
              type="email"
              id="email"
              placeholder="Email"
              autoFocus={false}
            />

            <Button.Root title="Subscribe" />
          </div>
        </div>
      </main>

      <Image
        src={waveSuscribeImage}
        alt=""
        className="w-full absolute right-0 left-0 bottom-0 z-0"
      />
    </div>
  )
}
