import { CryptoContextProvider } from '@/contexts/CryptoContext'
import { ModalContextProvider } from '../contexts/ModalContext'
import { Roboto } from 'next/font/google'
import { WalletContextProvider } from '@/contexts/WalletContext'
import { SidebarContextProvider } from '@/contexts/SidebarContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="text-text-base">
      <body className={roboto.className}>
        <ModalContextProvider>
          <CryptoContextProvider>
            <WalletContextProvider>
              <SidebarContextProvider>
                {children}
                <ToastContainer />
              </SidebarContextProvider>
            </WalletContextProvider>
          </CryptoContextProvider>
        </ModalContextProvider>
      </body>
    </html>
  )
}
