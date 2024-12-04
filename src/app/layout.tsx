import RootProvider from '@/base/provider/RootProvider'
import type { Metadata } from 'next'
import '@/base/styles/globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: '마음실타래래',
  description: '사용자가 자신의 내면을 마주하고 치유할 수 있도록 도와주는 상담사',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang={'ko'}>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
