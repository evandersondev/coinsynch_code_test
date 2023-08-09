'use client'

import Image from 'next/image'

import LogoImage from '@/assets/logo.png'
import axios from 'axios'
import { MenuBar } from './MenuBar'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { useSidebar } from '@/hooks/useSidebar'

interface UserData {
  name: string
  imageUrl: string
}

export function HeaderDashboard() {
  const { handleChange } = useSidebar()
  const [user, setUser] = useState<UserData>({
    name: '',
    imageUrl: '',
  })

  async function fetchUser() {
    const response = await axios.get('/api/user')
    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <header className="h-16 w-full py-4 px-6 md:px-8 flex items-center justify-between">
      <div className="block lg:hidden">
        <button onClick={handleChange}>
          <Menu height={24} width={24} className="text-secondary-500" />
        </button>
      </div>

      <Image src={LogoImage} alt="CoinSynch Logo" height={21} width={124} />

      <div className="flex items-center gap-2">
        <Image
          src={user.imageUrl}
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />

        <MenuBar fullname={user.name} />
      </div>
    </header>
  )
}
