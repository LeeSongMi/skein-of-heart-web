'use client'

import MantineProvider from '@/base/provider/MantineProvider'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'

export default function RootProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <MantineProvider>
      {children}
      <Toaster richColors={true} closeButton={true} position={'top-right'} toastOptions={{ duration: 3000 }} />
    </MantineProvider>
  )
}
