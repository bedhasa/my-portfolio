// src/app/layout.tsx (DO NOT add 'use client')
import './globals.css'
import ResponsiveLayout from '../components/ResponsiveLayout'

export const metadata = {
  title: 'Bedasa | Portfolio',
  description: 'Personal portfolio of Bedasa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ResponsiveLayout>{children}</ResponsiveLayout>
      </body>
    </html>
  )
}
