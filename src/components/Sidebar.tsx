"use client";

import Image from "next/image";
import { Download, Mail, Phone, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { SocialButton } from "@/components/ui/SocialButton";

export default function Sidebar({ closeSidebar }: { closeSidebar?: () => void }) {
  const showResumeNotice = () => {
    alert("CV not inserted yet");
  };

  return (
    <div className="relative space-y-6 text-center text-foreground">
      {closeSidebar ? (
        <button
          type="button"
          onClick={closeSidebar}
          aria-label="Close sidebar"
          className="absolute right-0 top-0 rounded-token-md p-2 text-accent transition-token hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden"
        >
          <X aria-hidden size={22} />
        </button>
      ) : null}

      <div className="mx-auto pt-8 sm:pt-0">
        <Image
          src="/images/profile.jpg"
          alt="Bedasa"
          width={160}
          height={160}
          priority
          className="mx-auto h-40 w-40 rounded-token-lg border-4 border-accent object-cover shadow-soft"
        />
      </div>

      <div>
        <h1 className="font-heading text-2xl font-bold text-accent">Bedasa Negash</h1>
        <p className="mt-1 text-sm italic text-muted">I am a developer, code for fun</p>
      </div>

      <hr className="mx-auto w-3/4 border-t border-accent/50" />

      <div className="space-y-3 text-sm">
        <h2 className="font-heading font-semibold text-foreground">Contact me</h2>
        <p className="flex items-center justify-center gap-2 text-muted">
          <Mail aria-hidden className="text-accent" size={16} />
          <a className="transition-token hover:text-accent" href="mailto:bdhsane@gmail.com">
            bdhsane@gmail.com
          </a>
        </p>
        <p className="flex items-center justify-center gap-2 text-muted">
          <Phone aria-hidden className="text-accent" size={16} />
          +251 930 254 613
        </p>
        <div className="flex justify-center gap-3 pt-2">
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

      <Button type="button" onClick={showResumeNotice} className="mt-4">
        <Download aria-hidden size={16} />
        Download CV
      </Button>
    </div>
  );
}
