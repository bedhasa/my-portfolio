"use client";

import Image from "next/image";
import { Download } from "lucide-react";
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
        <a
          href="#home"
          className="rounded-token-md px-2 py-1 font-heading text-xl font-bold text-accent transition-token hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Bdhs.
        </a>

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
        </div>
      </nav>
    </header>
  );
}
