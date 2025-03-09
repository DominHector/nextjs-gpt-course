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
  // Eliminamos el estado de isMenuOpen ya que no lo necesitaremos
  
  return (
    <nav className="bg-blue-400 text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:underline">🚀 Héctor Dev</Link>
        
        {/* Reemplazamos el menú desplegable por una lista horizontal de enlaces */}
        <div className="flex space-x-4">
          {links.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}