"use client"

import Link from 'next/link'
import { useState } from 'react'

interface HeaderLink {
  label: string;
  href: string;
}

interface HeaderProps {
  links: HeaderLink[];
}

export default function Header({ links }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-600 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:underline">🚀 Héctor Dev</Link>
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-2 hover:underline focus:outline-none"
          >
            Menu
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              {links.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}