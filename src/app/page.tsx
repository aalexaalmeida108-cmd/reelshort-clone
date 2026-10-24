import HeroBanner from '@/components/HeroBanner'
import DramaCarousel from '@/components/DramaCarousel'
import { getFeaturedDramas, getTrendingDramas, getAllDramas } from '@/data/dramas'

export default function Home() {
  const featuredDramas = getFeaturedDramas()
  const trendingDramas = getTrendingDramas()
  const allDramas = getAllDramas()
  
  const heroDrama = featuredDramas[0] || allDramas[0]

  return (
    <div className="min-h-screen bg-black">
      <HeroBanner drama={heroDrama} />
      
      <div className="space-y-4">
        <DramaCarousel title="🔥 Mais Tendência" dramas={trendingDramas} id="tendencias" />
        <DramaCarousel title="🎬 Novos Lançamentos" dramas={allDramas.slice().reverse()} />
        <DramaCarousel title="🎙️ Série Dublada" dramas={allDramas.filter(d => d.tags.includes('Dublado'))} />
        <DramaCarousel title="👑 Bilionários & Máfia" dramas={allDramas.filter(d => d.genre.includes('Bilionário') || d.genre.includes('Máfia'))} />
        <DramaCarousel title="💕 Romance" dramas={allDramas.filter(d => d.genre.includes('Romance'))} />
      </div>
      
      <footer className="bg-black border-t border-white/10 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-white font-bold text-xl">ReelShort Clone</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Todo o conteúdo liberado • VIP Gratuito • Sem Anúncios</p>
          <p className="text-gray-500 text-xs">Feito na Bancada do Kai • Clone educacional</p>
        </div>
      </footer>
    </div>
  )
}
