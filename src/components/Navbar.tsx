// components/Navbar.tsx
'use client'

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const linkClass = `px-4 py-2 rounded-full transition text-gray-700 hover:bg-orange-100 dark:hover:bg-orange-600`

  return (
    <header className="sticky top-0 z-50 bg-orange-50 dark:bg-zinc-900 shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          {/* Hamburger menu (mobile only) */}
          <button
            className="sm:hidden text-orange-600 text-2xl"
            onClick={onMenuClick}
          >
            ☰
          </button>
          <h1 className="text-xl font-bold text-orange-600">Bdhs.</h1>
        </div>

        <div className="hidden sm:flex gap-4">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#skills" className={linkClass}>Skills</a>
          <a href="#projects" className={linkClass}>Projects</a>
        </div>
      </nav>
    </header>
  )
}
