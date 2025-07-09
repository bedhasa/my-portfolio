'use client'

// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

export default function Navbar() {
  const linkClass = `px-4 py-2 rounded-full transition text-gray-700 hover:bg-orange-100`

  return (
    <header className="sticky top-0 z-50 bg-orange-50 shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-orange-600">Bdhs.
        </h1>

        <div className="flex gap-4">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#skills" className={linkClass}>Skills</a>
          <a href="#projects" className={linkClass}>Projects</a>
        </div>
      </nav>
    </header>
  )
}
