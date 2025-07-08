// src/app/layout.tsx
import './globals.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Bedasa | Portfolio',
  description: 'Personal portfolio of Bedasa',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-white">
        
        {/* Sidebar */}
        <aside className="w-[280px]  min-h-screen border-r border-gray-200 dark:border-zinc-800 p-4 bg-gray-100 dark:bg-zinc-800">
          <Sidebar />
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Page content */}
          <main className="flex-1 px-6 md:px-10 mt-10 scroll-smooth">
  {children}
</main>

        </div>
      </body>
    </html>
  )
}
