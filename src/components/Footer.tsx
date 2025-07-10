// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-orange-300 dark:border-orange-700 pt-10 pb-6 text-center text-gray-700 dark:text-gray-300">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/bedhasa" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/bedasa-negash" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl">
          <FaLinkedin />
        </a>
        <a href="mailto:bdhsane@gmail.com" className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl">
          <FaEnvelope />
        </a>
        <a href="https://t.me/kun_anta7" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl">
          <FaTelegramPlane />
        </a>
        <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-700 transition duration-300 text-2xl">
          <FaFacebook />
        </a>
      </div>

      <p className="text-sm">
        &copy; {new Date().getFullYear()} Bedasa Negash. All rights reserved.
      </p>
    </footer>
  );
}
