'use client'

import Image from 'next/image'

import { useEffect, useState } from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

import { useWallet } from '@/hooks/useWallet'
import { Variation } from '@/app/api/coins/variation/route'
import axios from 'axios'
import elephantImage from '@/assets/elephant.png'
import lawImage from '@/assets/law.png'

export function CardDashboard() {
  const { balance } = useWallet()
  const [dailyVariationCrypto, setDailyVariationCrypto] =
    useState<Variation | null>(null)

  const balanceFormatted = balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  async function fetchVariationCrypto() {
    const response = await axios.get('/api/coins/variation')
    const variation = response.data

    setDailyVariationCrypto(variation)
  }

  useEffect(() => {
    fetchVariationCrypto()
  }, [])

  return (
    <div className="w-full h-fit lg:h-auto xl:h-[112px] grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:border-0 md:pb-0 pb-6 border-b border-b-secondary-300">
      <div className="h-[64px] lg:h-full bg-white col col-span-2 shadow-base-lg flex  rounded-lg overflow-hidden">
        <div className="w-[50%] flex gap-4 justify-start lg:justify-center items-center p-1">
          <div className="lg:m-0 mx-4 lg:w-16 lg:h-16 md:w-12 md:h-12 h-8 w-8 p-1 bg-primary-100 rounded-full flex items-center justify-center">
            <Image
              src={lawImage}
              alt=""
              className="lg:min-h-[40px] lg:min-w-[40px] md:min-h-[30px] md:min-w-[30px] min-h-[15px] min-w-[15px]"
            />
          </div>
          <div>
            <h4 className="text-sm md:text-xl lg:text-2xl font-normal">
              Balance{' '}
              <span className="md:text-xl lg:text-2xl text-xs md:text-text-base text-secondary-500 lg:block">
                in US$
              </span>
            </h4>
            <span className="text-sm lg:text-base text-secondary-500 md:block hidden">
              (approximately)
            </span>
          </div>
        </div>
        <div className="w-[50%] h-full bg-primary-100 flex items-center justify-center">
          <h1 className="text-base md:text-[32px] font-bold">
            {balanceFormatted}
          </h1>
        </div>
      </div>

      <div className="md:h-[112px] lg:h-full bg-white shadow-base-lg rounded-lg overflow-hidden flex md:flex-row flex-col">
        <div className="h-full min-w-fit lg:w-[100px] flex flex-col p-2">
          <p className="w-full text-xs mb-4">Daily Variation</p>
          <div className="flex md:flex-col justify-between">
            <div className="flex items-center justify-start gap-2 mb-2">
              {dailyVariationCrypto ? (
                <Image
                  src={dailyVariationCrypto.image}
                  alt=""
                  width={32}
                  height={32}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ) : (
                <div className="w-6 h-6  z-10 rounded-full bg-secondary-500 animate-pulse" />
              )}
              <p
                data-suspense={dailyVariationCrypto === null}
                className="uppercase data-[suspense=true]:w-8 data-[suspense=true]:h-4 data-[suspense=true]:bg-secondary-500 data-[suspense=true]:animate-pulse"
              >
                {dailyVariationCrypto && dailyVariationCrypto.symbol}
              </p>
            </div>
            <span
              data-up={dailyVariationCrypto?.formattedVariation.includes('+')}
              data-suspense={dailyVariationCrypto === null}
              className="text-quartenary-700 data-[up=true]:text-tertiary-700 data-[suspense=true]:w-10 data-[suspense=true]:h-4 data-[suspense=true]:bg-secondary-500 data-[suspense=true]:animate-pulse"
            >
              {dailyVariationCrypto && dailyVariationCrypto.formattedVariation}
            </span>
          </div>
        </div>
        <div
          data-suspense={dailyVariationCrypto === null}
          className="h-[60%] md:h-full md:flex-1 md:mb-0 mb-8 data-[suspense=true]:bg-secondary-500 data-[suspense=true]:animate-pulse"
        >
          {dailyVariationCrypto?.data && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={dailyVariationCrypto.data.slice(0, 10)}
                margin={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#F4CC8F" stopOpacity={1} />
                    <stop offset="100%" stopColor="#FFF6E8" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="url(#colorUv)"
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="md:h-[112px] lg:h-full bg-white shadow-base-lg rounded-lg overflow-hidden flex md:flex-row flex-col">
        <div className="w-full h-full md:h-full md:w-[50%] flex flex-col items-start justify-center md:justify-start md:p-4">
          <p className="text-xs md:text-sm font-bold mb-[5px] px-4 md:px-0">
            NFT's NEWS
          </p>
          <span className="text-xs text-secondary-500 mb-4  md:pr-0  md:pl-0 pl-4">
            New ElephantX NFT to be launched!
          </span>
          <a href="" className="text-xs text-primary-400 hidden md:block">
            Read more +
          </a>
        </div>

        <div className="w-full md:h-full h-[60%] md:w-[50%]">
          <Image
            src={elephantImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
