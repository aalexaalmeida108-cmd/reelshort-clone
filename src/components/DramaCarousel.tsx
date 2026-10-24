'use client'

import { Drama } from '@/data/dramas'
import DramaCard from './DramaCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

interface DramaCarouselProps {
  title: string
  dramas: Drama[]
  id?: string
}

export default function DramaCarousel({ title, dramas, id }: DramaCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id={id} className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="flex items-center space-x-2">
            <button onClick={() => scroll('left')} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {dramas.map((drama) => (
            <div key={drama.id} className="flex-shrink-0 w-40 sm:w-48">
              <DramaCard drama={drama} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
