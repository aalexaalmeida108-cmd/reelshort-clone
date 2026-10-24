'use client'

import { useParams, useSearchParams } from 'next/navigation'
import { getDramaBySlug } from '@/data/dramas'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Crown, ArrowLeft, List } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function EpisodePage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const slug = params.slug as string
  const epId = searchParams.get('ep')
  
  const drama = getDramaBySlug(slug)
  const [currentEpisodeId, setCurrentEpisodeId] = useState(epId || drama?.episodes[0]?.id)
  
  useEffect(() => {
    if (epId) setCurrentEpisodeId(epId)
  }, [epId])
  
  if (!drama) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Série não encontrada</h1>
          <Link href="/" className="text-pink-400 hover:text-pink-300">Voltar ao início</Link>
        </div>
      </div>
    )
  }
  
  const currentEpisode = drama.episodes.find(ep => ep.id === currentEpisodeId) || drama.episodes[0]
  const currentIndex = drama.episodes.findIndex(ep => ep.id === currentEpisodeId)
  
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-4 mb-6">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-xl font-bold text-white truncate">{drama.title}</h1>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">
            <Crown className="w-3 h-3" />
            <span>VIP LIBERADO</span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <video
                src={currentEpisode.videoUrl}
                controls
                autoPlay
                className="w-full h-full"
                poster={currentEpisode.thumbnail}
              >
                Seu navegador não suporta vídeos.
              </video>
              <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                SEM ANÚNCIOS
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h2 className="text-white font-bold text-lg mb-2">
                {currentEpisode.title}
              </h2>
              <p className="text-gray-400 text-sm mb-4">{drama.description}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>{drama.views} visualizações</span>
                <span>•</span>
                <span>Episódio {currentEpisode.episodeNumber} de {drama.episodes.length}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold flex items-center space-x-2">
                  <List className="w-5 h-5" />
                  <span>Episódios</span>
                </h3>
                <span className="text-gray-400 text-sm">{drama.episodes.length} episódios</span>
              </div>
              <div className="space-y-2 max-h-[600px] overflow-y-auto scrollbar-hide">
                {drama.episodes.map((episode) => (
                  <Link
                    key={episode.id}
                    href={`/episodes/${drama.slug}?ep=${episode.id}`}
                    onClick={() => setCurrentEpisodeId(episode.id)}
                    className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                      episode.id === currentEpisodeId
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/50'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                      <Image
                        src={episode.thumbnail}
                        alt={episode.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white px-1 rounded text-xs">
                        {episode.duration}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate ${
                        episode.id === currentEpisodeId ? 'text-pink-400' : 'text-white'
                      }`}>
                        {episode.title}
                      </p>
                      <p className="text-xs text-gray-400">Ep. {episode.episodeNumber}</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-1.5 py-0.5 rounded text-xs font-bold">
                      LIVRE
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
