'use client'

import * as Menubar from '@radix-ui/react-menubar'
import { ChevronDown, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface MenuBarProps {
  fullname: string
}

export function MenuBar({ fullname }: MenuBarProps) {
  const router = useRouter()

  function handleLogout() {
    router.push('/')
  }

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger className="text-text-base text-sm flex items-center gap-1">
          <p className="hidden md:block">{fullname}</p>
          <ChevronDown height={12} width={12} className="text-gray-500" />
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            align="end"
            sideOffset={12}
            alignOffset={-3}
            className="bg-white h-[55px] p-6 flex items-center justify-center rounded drop-shadow-menu"
          >
            <Menubar.Item>
              <button
                onClick={handleLogout}
                className="flex items-center gap-4 text-gray-500 text-sm"
              >
                <LogOut size={16} />
                Logout
              </button>
            </Menubar.Item>

            <Menubar.Arrow
              height={5}
              className="h-[8px] w-[16px] fill-white absolute right-6"
            />
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  )
}
