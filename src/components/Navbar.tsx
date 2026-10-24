'use client'

import Link from 'next/link'
import { Search, User, Crown } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">ReelShort</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white hover:text-pink-400 transition-colors font-medium">Início</Link>
              <Link href="/#tendencias" className="text-gray-300 hover:text-white transition-colors">Categorias</Link>
              <Link href="/vip" className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-1 font-medium">
                <Crown className="w-4 h-4" />
                <span>VIP - GRÁTIS</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="pb-4">
            <input
              type="text"
              placeholder="Buscar séries..."
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        )}
      </div>
    </nav>
  )
}
