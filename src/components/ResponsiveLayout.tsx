// components/ResponsiveLayout.tsx
'use client'

import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useState } from 'react'

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="flex min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-white">
      {/* Mobile Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/30 z-30 sm:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Sidebar */}
    <aside
  className={`fixed top-0 left-0 z-40 w-[280px] h-screen overflow-y-auto border-r border-gray-200 dark:border-zinc-800 p-4 bg-gray-100 dark:bg-zinc-800 transform transition-transform duration-300
  ${showSidebar ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
>
  <Sidebar closeSidebar={() => setShowSidebar(false)} />
</aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col sm:ml-[280px]">
  <Navbar onMenuClick={() => setShowSidebar(true)} />
  
  <main className="flex-1 px-6 md:px-10 mt-10 scroll-smooth">
    {children}
  </main>
</div>

    </div>
  )
}
