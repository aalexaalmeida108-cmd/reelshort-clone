export interface Episode {
  id: string;
  episodeNumber: number;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  isVip: boolean;
}

export interface Drama {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover: string;
  banner: string;
  genre: string[];
  tags: string[];
  views: string;
  status: 'em_andamento' | 'completo';
  episodes: Episode[];
  featured?: boolean;
}

export const dramas: Drama[] = [
  {
    id: '1',
    slug: 'na-cama-com-meu-cunhado',
    title: 'Na Cama com Meu Cunhado',
    description: 'O casamento arranjado de Bella vira um pesadelo quando ela pega o noivo traindo. Para se vingar, ela dorme com um estranho — o irmão do noivo e chefão da máfia, Damian Gotti. Forçada a voltar para a família, ela enfrenta segredos e desejos proibidos.',
    cover: 'https://v-img.crazymaplestudios.com/v-images/book_cover_batch/404200150000006360/ef33a191-3aa7-4b6b-a0a5-11e2a627fe39.jpg?v=1.0&x-oss-process=image%2Fresize%2Cw_192%2Ch_256%2Cm_fill%2Fquality%2Cq_80',
    banner: 'https://v-img.crazymaplestudios.com/images/f48aec40-c7b1-11f1-8fc1-67160e4754e3.jpg?v=1.0&x-oss-process=image%2Fquality%2Cq_80',
    genre: ['Máfia', 'Romance Proibido'],
    tags: ['Herdeira/Socialite', 'Dublado'],
    views: '5.2M',
    status: 'em_andamento',
    episodes: Array.from({ length: 80 }, (_, i) => ({
      id: `1-ep-${i+1}`,
      episodeNumber: i+1,
      title: `Episódio ${i+1}`,
      duration: `${Math.floor(Math.random()*3)+1}m ${Math.floor(Math.random()*59)}s`,
      thumbnail: 'https://v-img.crazymaplestudios.com/v-images/book_cover_batch/404200150000006360/ef33a191-3aa7-4b6b-a0a5-11e2a627fe39.jpg?v=1.0&x-oss-process=image%2Fresize%2Cw_300%2Ch_168%2Cm_fill%2Fquality%2Cq_80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      isVip: false
    }))
  },
  {
    id: '2',
    slug: 'nao-mexa-com-esse-mendigo',
    title: 'Não Mexa com Esse Mendigo!',
    description: 'Após três anos vivendo incógnito entre pessoas em situação de rua, Vince Astor é reconhecido como um poderoso chefão e herdeiro de US$ 20,9 bilhões.',
    cover: 'https://v-img.crazymaplestudios.com/v-images/book_cover_batch/404200150000006892/da150513-be94-45e3-86c5-2481d50d1876.jpg?v=1.0&x-oss-process=image%2Fresize%2Cw_192%2Ch_256%2Cm_fill%2Fquality%2Cq_80',
    banner: 'https://v-img.crazymaplestudios.com/images/d01ce750-c7b1-11f1-8fc1-67160e4754e3.jpg?v=1.0&x-oss-process=image%2Fquality%2Cq_80',
    genre: ['Bilionário', 'Comédia Romântica'],
    tags: ['Dublado', 'Leve e divertido'],
    views: '8.7M',
    status: 'completo',
    episodes: Array.from({ length: 65 }, (_, i) => ({
      id: `2-ep-${i+1}`,
      episodeNumber: i+1,
      title: `Episódio ${i+1}`,
      duration: `${Math.floor(Math.random()*3)+1}m ${Math.floor(Math.random()*59)}s`,
      thumbnail: 'https://v-img.crazymaplestudios.com/v-images/book_cover_batch/404200150000006892/da150513-be94-45e3-86c5-2481d50d1876.jpg?v=1.0&x-oss-process=image%2Fresize%2Cw_300%2Ch_168%2Cm_fill%2Fquality%2Cq_80',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      isVip: false
    }))
  },
  {
    id: '3',
    slug: 'sniper-americano-a-ultima-rodada',
    title: 'Sniper Americano: A Última Rodada',
    description: 'Um ex-sniper das forças especiais é chamado de volta para uma missão que pode ser sua última chance de redenção.',
    cover: 'https://v-img.crazymaplestudios.com/images/3b9ddd40-d5af-11f0-84ad-6b5693b490dc.jpg?x-oss-process=image%2Fresize%2Cw_600%2Ch_800%2Cm_fill%2Fquality%2Cq_80',
    banner: 'https://v-img.crazymaplestudios.com/images/3b9ddd40-d5af-11f0-84ad-6b5693p4e3dc.jpg?x-oss-process=image%2Fresize%2Cw_1920%2Ch_600%2Cm_fill%2Fquality%2Cq_80',
    genre: ['Ação', 'Drama'],
    tags: ['Masculino', 'Séries', 'Drama'],
    views: '172.8M',
    status: 'em_andamento',
    episodes: Array.from({ length: 90 }, (_, i) => ({
      id: `3-ep-${i+1}`,
      episodeNumber: i+1,
      title: `Episódio ${i+1}`,
      duration: `${Math.floor(Math.random()*4)+1}m ${Math.floor(Math.random()*59)}s`,
      thumbnail: 'https://v-img.crazymaplestudios.com/images/3b9ddd40-d5af-11f0-84ad-6b5693b490dc.jpg?x-oss-process=image%2Fresize%2Cw_300%2Ch_168%2Cm_fill%2Fquality%2Cq_80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      isVip: false
    }))
  },
  {
    id: '4',
    slug: 'a-vida-secreta-do-meu-marido-bilionario',
    title: 'A vida secreta do meu marido bilionário',
    description: 'Ao descobrir os segredos ocultos por trás da fachada perfeita de seu marido bilionário, uma mulher comum se vê envolvida em uma teia de mentiras, power e traição.',
    cover: 'https://v-img.crazymaplestudios.com/images/c4d5ab40-2b2f-11f0-93de-cb0b88a6d7a9.jpg?x-oss-process=image%2Fresize%2Cw_600%2Ch_800%2Cm_fill%2Fquality%2Cq_80',
    banner: 'https://v-img.crazymaplestudios.com/images/c4d5ab40-2b2f-11f0-93de-cb0b88a6d7a9.jpg?x-oss-process=image%2Fresize%2Cw_1920%2Ch_600%2Cm_fill%2Fquality%2Cq_80',
    genre: ['Bilionário', 'Drama'],
    tags: ['Feminina', 'Séries', 'Romance'],
    views: '841.6M',
    status: 'em_andamento',
    episodes: Array.from({ length: 100 }, (_, i) => ({
      id: `4-ep-${i+1}`,
      episodeNumber: i+1,
      title: `Episódio ${i+1}`,
      duration: `${Math.floor(Math.random()*3)+1}m ${Math.floor(Math.random()*59)}s`,
      thumbnail: 'https://v-img.crazymaplestudios.com/images/c4d5ab40-2b2f-11f0-93de-cb0b88a6d7a9.jpg?x-oss-process=image%2Fresize%2Cw_300%2Ch_168%2Cm_fill%2Fquality%2Cq_80',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      isVip: false
    }))
  },
  {
    id: '5',
    slug: 'de-repente-casados',
    title: 'De Repente, Casados',
    description: 'Um casamento por contrato se transforma em algo muito mais real quando o love começa a surgir entre dois estranhos.',
    cover: 'https://v-img.crazymaplestudios.com/images/9be41b40-3713-11f1-acb2-c14bef828c82.jpg?x-oss-process=image%2Fresize%2Cw_600%2Ch_800%2Cm_fill%2Fquality%2Cq_80',
    banner: 'https://v-img.crazymaplestudios.com/images/9be41b40-3713-11f1-acb2-c14bef828c82.jpg?x-oss-process=image%2Fresize%2Cw_1920%2Ch_600%2Cm_fill%2Fquality%2Cq_80',
    genre: ['Romance', 'Comédia'],
    tags: ['Feminina', 'Séries', 'Romance'],
    views: '240.5M',
    status: 'em_andamento',
    episodes: Array.from({ length: 75 }, (_, i) => ({
      id: `5-ep-${i+1}`,
      episodeNumber: i+1,
      title: `Episódio ${i+1}`,
      duration: `${Math.floor(Math.random()*3)+1}m ${Math.floor(Math.random()*59)}s`,
      thumbnail: 'https://v-img.crazymaplestudios.com/images/9be41b40-3713-11f1-acb2-c14bef828c82.jpg?x-oss-process=image%2Fresize%2Cw_300%2Ch_168%2Cm_fill%2Fquality%2Cq_80',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      isVip: false
    }))
  },
  {
    id: '6',
    slug: 'casei-me-com-o-mafioso-que-salvei',
    title: 'Casei-me com o Mafioso que Salvei',
    description: 'Após salvar a vida de um perigoso chefe da máfia sem saber quem ele era, uma jovem se vê obrigada a se casar com ele para pagar a "dívida".',
    cover: 'https://v-img.crazymaplestudios.com/v-images/book_cover_batch/400000000000002373/212b5556-9c7c-426a-91aa-51086e24a3a6.jpg?x-oss-process=image%2Fresize%2Cw_600%2Ch_800%2Cm_fill%2Fquality%2Cq_80',
    banner: 'https://v-img.crazymaplestudios.com/v-images/book_cover_batch/400000000000002373/212b5556-9c7c-426a-91aa-51086e24a3a6.jpg?x-oss-process=image%2Fresize%2Cw_1920%2Ch_600%2Cm_fill%2Fquality%2Cq_80',
    genre: ['Máfia', 'Romance'],
    tags: ['Feminina', 'Romance', 'Romance Doce'],
    views: '124.3M',
    status: 'completo',
    episodes: Array.from({ length: 68 }, (_, i) => ({
      id: `6-ep-${i+1}`,
      episodeNumber: i+1,
      title: `Episódio ${i+1}`,
      duration: `${Math.floor(Math.random()*3)+1}m ${Math.floor(Math.random()*59)}s`,
      thumbnail: 'https://v-img.crazymaplestudios.com/v-images/book_cover_batch/400000000000002373/212b5556-9c7c-426a-91aa-51086e24a3a6.jpg?x-oss-process=image%2Fresize%2Cw_300%2Ch_168%2Cm_fill%2Fquality%2Cq_80',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      isVip: false
    }))
  }
];

export function getDramaBySlug(slug: string): Drama | undefined {
  return dramas.find(d => d.slug === slug);
}

export function getFeaturedDramas(): Drama[] {
  return dramas.slice(0, 3);
}

export function getTrendingDramas(): Drama[] {
  return dramas;
}

export function getAllDramas(): Drama[] {
  return dramas;
}
