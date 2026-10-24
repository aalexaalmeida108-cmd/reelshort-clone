'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'
import { Drama } from '@/data/dramas'

interface DramaCardProps {
  drama: Drama
}

export default function DramaCard({ drama }: DramaCardProps) {
  const firstEpisode = drama.episodes[0]

  return (
    <Link href={`/episodes/${drama.slug}?ep=${firstEpisode.id}`} className="group cursor-pointer">
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3">
        <Image
          src={drama.cover}
          alt={drama.title}
          fill
          className="object-cover transition-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
            <Play className="w-6 h-6 text-black fill-black ml-1" />
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded text-xs font-bold">
          VIP
        </div>
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {drama.episodes.length} eps
        </div>
      </div>
      <h3 className="text-white font-medium text-sm line-clamp-2 group-hover:text-pink-400 transition-colors">
        {drama.title}
      </h3>
      <p className="text-gray-400 text-xs mt-1">{drama.views} views</p>
    </Link>
  )
}
