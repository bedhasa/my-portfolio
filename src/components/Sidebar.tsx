
'use client'
// src/components/Sidebar.tsx
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Sidebar() {
  return (
    <div className="text-center fixed space-y-6 text-gray-800 dark:text-white">
      {/* Profile image */}
      <div className="mx-auto">
        <img
          src="/images/profile.jpg"
          alt="Bedasa"
          className="w-40 h-40 object-cover mx-auto rounded-2xl shadow-md border-4 border-orange-500"
        />
      </div>

      {/* Name & bio */}
      <div>
        <h1 className="text-2xl font-bold text-orange-600">Bedasa Negash</h1>
        <p className="text-sm italic text-gray-600 dark:text-gray-300 mt-1">
          I am a developer, code for fun 😄
        </p>
      </div>

      {/* Divider */}
      <hr className="border-t border-orange-400 w-3/4 mx-auto" />

      {/* Contact me */}
      <div className="space-y-2 text-sm">
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-orange-500" /> bdhsane@gmail.com
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaPhone className="text-orange-500" /> +251 930 254 613
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaGithub className="text-orange-500" />
          <a href="https://github.com/bedhasa" target="_blank">GitHub</a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaLinkedin className="text-orange-500" />


          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </p>
      </div>

      {/* Download CV button */}
      <button
        onClick={() => alert('CV not inserted yet 😅')}
        className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-sm transition"
      >
        Download CV
      </button>
    </div>
  )
}
