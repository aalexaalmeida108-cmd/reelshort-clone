'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { Drama } from '@/data/dramas'

interface HeroBannerProps {
  drama: Drama
}

export default function HeroBanner({ drama }: HeroBannerProps) {
  const firstEpisode = drama.episodes[0]

  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={drama.banner}
          alt={drama.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
              <span>👑</span>
              <span>VIP LIBERADO</span>
            </span>
            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">SEM ANÚNCIOS</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            {drama.title}
          </h1>
          
          <p className="text-lg text-gray-300 line-clamp-3 max-w-xl">
            {drama.description}
          </p>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>{drama.views} visualizações</span>
            <span>•</span>
            <span>{drama.episodes.length} episódios</span>
            <span>•</span>
            <span className="capitalize">{drama.status.replace('_', ' ')}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              href={`/episodes/${drama.slug}?ep=${firstEpisode.id}`}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Assistir Agora</span>
            </Link>
            <Link
              href={`/episodes/${drama.slug}`}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-colors"
            >
              Ver Episódios
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
