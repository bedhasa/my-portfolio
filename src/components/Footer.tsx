// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-orange-400 dark:border-orange-700 pt-10 pb-6 text-center text-neutral-900 dark:text-neutral-200">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/bedhasa" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-token-full text-accent transition-token hover:bg-accent hover:text-white text-2xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/bedasa-negash" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-token-full text-accent transition-token hover:bg-accent hover:text-white text-2xl">
          <FaLinkedin />
        </a>
        <a href="mailto:bdhsane@gmail.com" className="inline-flex h-10 w-10 items-center justify-center rounded-token-full text-accent transition-token hover:bg-accent hover:text-white text-2xl">
          <FaEnvelope />
        </a>
        <a href="https://t.me/kun_anta7" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-token-full text-accent transition-token hover:bg-accent hover:text-white text-2xl">
          <FaTelegramPlane />
        </a>
       
      </div>

      <p className="text-sm">
        &copy; {new Date().getFullYear()} Bedasa Negash. All rights reserved.
      </p>
    </footer>
  );
}
