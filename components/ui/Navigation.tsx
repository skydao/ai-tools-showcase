'use client'

import Link from 'next/link'
import { Bot } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-text-primary">AI Tools</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
              Featured
            </Link>
            <Link href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
              Categories
            </Link>
            <Link href="#" className="text-text-secondary hover:text-text-primary text-sm transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary text-sm"
            >
              GitHub
            </a>
            <button className="button-primary text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}