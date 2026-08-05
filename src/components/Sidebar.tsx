"use client";

import Image from "next/image";
import { Mail, Phone, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialButton } from "@/components/ui/SocialButton";
import { cn } from "@/lib/utils";

export default function Sidebar({
  closeSidebar,
  collapsed = false,
}: {
  closeSidebar?: () => void;
  collapsed?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative text-center text-foreground transition-token",
        collapsed ? "space-y-5" : "space-y-6",
      )}
    >
      {closeSidebar ? (
        <button
type="button"
          onClick={closeSidebar}
          aria-label="Close sidebar"
          className="absolute right-0 top-0 rounded-token-md p-2 text-accent transition-token hover:bg-accent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
        >
          <X aria-hidden size={22} />
        </button>
      ) : null}

      <div className="mx-auto pt-8 sm:pt-0">
        <Image
          src="/images/profile.jpg"
          alt="Bedasa"
          width={collapsed ? 56 : 160}
          height={collapsed ? 56 : 160}
          priority
          className={cn(
            "mx-auto rounded-token-lg border-accent object-cover shadow-soft transition-token",
            collapsed ? "h-14 w-14 border-2" : "h-40 w-40 border-4",
          )}
        />
      </div>

      <div className={cn(collapsed && "sr-only")}>
        <h1 className="font-heading text-2xl font-bold text-accent">Bedasa Negash</h1>
        <p className="mt-1 text-sm italic text-neutral-800 dark:text-neutral-200">I am a developer, code for fun</p>
      </div>

      <hr className={cn("mx-auto border-t border-accent/50", collapsed ? "w-10" : "w-3/4")} />

      <div className="space-y-3 text-sm">
        <h2 className={cn("font-heading font-semibold text-foreground", collapsed && "sr-only")}>Contact me</h2>
        {collapsed ? (
          <div className="flex flex-col items-center gap-3">
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-token-full border border-border bg-background text-accent shadow-soft transition-token hover:border-accent hover:bg-accent hover:text-white hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href="mailto:bdhsane@gmail.com"
              aria-label="Email Bedasa"
              title="Email Bedasa"
            >
              <Mail aria-hidden size={17} />
            </a>
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-token-full border border-border bg-background text-accent shadow-soft transition-token hover:border-accent hover:bg-accent hover:text-white hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href="tel:+251930254613"
              aria-label="Call Bedasa"
              title="Call Bedasa"
            >
              <Phone aria-hidden size={17} />
            </a>
          </div>
        ) : (
          <>
            <p className="flex items-center justify-center gap-2 text-neutral-800 dark:text-neutral-200">
              <Mail aria-hidden className="text-accent" size={16} />
              <a className="transition-token hover:text-accent" href="mailto:bdhsane@gmail.com">
                bdhsane@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center gap-2 text-neutral-800 dark:text-neutral-200">
              <Phone aria-hidden className="text-accent" size={16} />
              +251 930 254 613
            </p>
          </>
        )}
        <div className={cn("flex justify-center gap-3 pt-2", collapsed && "flex-col items-center")}>
          <SocialButton label="GitHub" href="https://github.com/bedhasa" target="_blank" rel="noopener noreferrer">
            <FaGithub aria-hidden size={18} />
          </SocialButton>
          <SocialButton label="LinkedIn" href="https://linkedin.com/in/bedasa-negash" target="_blank" rel="noopener noreferrer">
            <FaLinkedin aria-hidden size={18} />
          </SocialButton>
          <SocialButton label="Email Bedasa" href="mailto:bdhsane@gmail.com">
            <Mail aria-hidden size={18} />
          </SocialButton>
        </div>
      </div>
    </div>
  );
}
