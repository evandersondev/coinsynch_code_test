'use client'

import { useSidebar } from '@/hooks/useSidebar'
import * as Tooltip from '@radix-ui/react-tooltip'
import Image, { StaticImageData } from 'next/image'

interface SidebarItemProps {
  image: StaticImageData
  title: string
  href: string
}

export function SidebarItem({ href, image, title }: SidebarItemProps) {
  const { isOpen } = useSidebar()

  return (
    <Tooltip.Provider delayDuration={0} skipDelayDuration={800}>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex items-center gap-4">
          <a href={href}>
            <Image src={image} alt="" className="h-8 w-8" />
          </a>
          {isOpen && <p className="lg:hidden block">{title}</p>}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="right"
            sideOffset={8}
            data-open={isOpen}
            className="data-[open=true]:hidden h-8 py-2 px-6 bg-primary-500 text-white rounded bottom-0 left-12 flex items-center text-sm"
          >
            {title}
            <Tooltip.Arrow className="fill-primary-500" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
