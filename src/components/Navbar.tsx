"use client";

import Image from "next/image";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkClass =
    "rounded-token-full px-3 py-2 text-sm font-medium text-foreground transition-token hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const openGithub = () => {
    window.open("https://github.com/bedhasa", "_blank", "noopener,noreferrer");
  };

  const showResumeNotice = () => {
    alert("CV not inserted yet");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-container items-center justify-between px-section-x py-3"
        aria-label="Primary navigation"
      >
        <div className="flex items-center gap-2">
          {/* Circular profile button that opens the sidebar on smaller screens */}
          <button
            type="button"
            aria-label="Open profile menu"
            aria-expanded={false}
            onClick={onMenuClick}
            className="group relative h-10 w-10 overflow-hidden rounded-token-full border-2 border-accent/60 bg-surface shadow-soft transition-token hover:border-accent hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          >
            <Image
              src="/images/profile.jpg"
              alt="Bedasa Negash profile"
              fill
              priority
              sizes="40px"
              className="object-cover object-top"
            />
          </button>

          <a
            href="#home"
            className="rounded-token-md px-2 py-1 font-heading text-xl font-bold text-accent transition-token hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Bdhs.
          </a>
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <Button variant="ghost" size="icon" aria-label="Open GitHub profile" onClick={openGithub}>
              <FaGithub aria-hidden size={18} />
            </Button>
            <Button variant="secondary" size="sm" onClick={showResumeNotice}>
              <Download aria-hidden size={16} />
              Resume
            </Button>
          </div>

          <ThemeToggle />

          {/* Right hamburger that toggles the mobile nav links dropdown */}
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-token-full border border-border bg-background text-foreground transition-token hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
          >
            {mobileOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav links dropdown */}
      {mobileOpen ? (
        <div className="border-t border-border/80 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-container flex-col gap-1 px-section-x py-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-token-full px-3 py-2.5 text-sm font-medium text-foreground transition-token hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
