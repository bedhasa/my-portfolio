"use client";

import { Download, Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass =
    "rounded-token-full px-3 py-2 text-sm font-medium text-muted transition-token hover:bg-surface hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

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
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open sidebar"
            className="rounded-token-md p-2 text-accent transition-token hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
            onClick={onMenuClick}
          >
            <Menu aria-hidden size={22} />
          </button>
          <a
            href="#home"
            className="font-heading text-xl font-bold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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

        <div className="hidden items-center gap-2 sm:flex">
          <Button variant="ghost" size="icon" aria-label="Open GitHub profile" onClick={openGithub}>
            <FaGithub aria-hidden size={18} />
          </Button>
          <Button variant="secondary" size="sm" onClick={showResumeNotice}>
            <Download aria-hidden size={16} />
            Resume
          </Button>
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </Button>
        </div>
      </nav>

      <div
        className={cn(
          "grid border-t border-border/70 bg-background/95 backdrop-blur-xl transition-[grid-template-rows] duration-300 ease-premium lg:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-container flex-col gap-1 px-section-x py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex gap-2 border-t border-border pt-3">
              <Button variant="secondary" size="sm" onClick={openGithub}>
                <FaGithub aria-hidden size={16} />
                GitHub
              </Button>
              <Button variant="primary" size="sm" onClick={showResumeNotice}>
                <Download aria-hidden size={16} />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
