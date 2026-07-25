// src/app/layout.tsx (DO NOT add 'use client')
import './globals.css'
import type { Metadata } from 'next'
import ResponsiveLayout from '../components/ResponsiveLayout'
import { DesignSystemProvider } from '@/components/providers/DesignSystemProvider'

export const metadata: Metadata = {
  title: 'Bedasa | Portfolio',
  description: 'Personal portfolio of Bedasa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <DesignSystemProvider>
          <ResponsiveLayout>{children}</ResponsiveLayout>
        </DesignSystemProvider>
      </body>
    </html>
  )
}
