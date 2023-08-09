import walletImage from '@/assets/wallet.png'
import atomImage from '@/assets/atom.png'
import bitcoinImage from '@/assets/bitcoin.png'
import chartImage from '@/assets/chart.png'
import { SidebarItem } from './SidebarItem'
import { useSidebar } from '@/hooks/useSidebar'
import { ArrowLeftCircle } from 'lucide-react'

export function Sidebar() {
  const { isOpen, handleChange } = useSidebar()

  return (
    <div
      data-open={isOpen}
      className="min-h-full data-[open=true]:absolute data-[open=true]:top-0 data-[open=true]:bottom-0 data-[open=true]:left-0 data-[open=true]:right-0 data-[open=true]:z-50 bg-secondary-900/70 data-[open=true]:overflow-hidden"
    >
      <aside
        data-open={isOpen}
        className="data-[open=true]:w-[240px] data-[open=true]:block hidden lg:w-[86px] min-h-full lg:flex flex-col lg:items-center space-y-8 border-t border-b border-t-secondary-300 border-b-secondary-300 pt-12 pl-6 lg:pl-0 overflow-hidden bg-white"
      >
        <SidebarItem image={walletImage} title="Lorem Ipsum" href="" />
        <SidebarItem image={atomImage} title="Lorem Ipsum" href="" />
        <SidebarItem image={bitcoinImage} title="Lorem Ipsum" href="" />
        <SidebarItem image={chartImage} title="Lorem Ipsum" href="" />

        {isOpen && (
          <button onClick={handleChange}>
            <ArrowLeftCircle size={32} className="text-primary-500 mt-[88px]" />
          </button>
        )}
      </aside>
    </div>
  )
}
