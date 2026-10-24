'use client'

import Link from 'next/link'
import { Crown, Check, ArrowLeft, Zap, Star } from 'lucide-react'

export default function VipPage() {
  const benefits = [
    'Acesso a TODOS os episódios',
    'Sem anúncios em nenhum vídeo',
    'Qualidade HD em todos os dramas',
    'Novos episódios liberados primeiro',
    'Biblioteca completa desbloqueada',
    'Visualização offline (em breve)',
    'Sem limite de reprodução',
    'Experiência premium'
  ]

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Plano VIP</h1>
        </div>
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
            <Crown className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            VIP <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">GRATUITO</span>
          </h2>
          <p className="text-xl text-gray-300 mb-2">Na Bancada do Kai</p>
          <p className="text-gray-400">Todo o conteúdo está liberado para você</p>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/50 rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="text-5xl font-bold text-white mb-2">R$ 0,00</div>
            <div className="text-yellow-400 font-semibold">VITALÍCIO • SEM CUSTO</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-4 rounded-xl font-bold text-lg mb-4">
              ✓ ATIVADO - VIP VITALÍCIO
            </div>
            <p className="text-gray-400 text-sm">Todos os episódios já estão desbloqueados para você!</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            <Zap className="w-5 h-5" />
            <span>Começar a Assistir</span>
          </Link>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          <p className="text-gray-400 text-sm">Sem anúncios • Conteúdo completo • Liberado na bancada</p>
        </div>
      </div>
    </div>
  )
}
