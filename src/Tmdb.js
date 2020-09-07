const API_KEY = '4da8dee0d64ce56d15c7e5760e7a55ce';
const API_BASE = 'https://api.themoviedb.org/3';
const Language = 'pt-BR';

// - Originais da NetFlix
// - Recomendados (trending)
// - em alta (top rated)
// - Ação
// - Comedia
// - Romance
// - Documentários

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=${Language}&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=${Language}&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=${Language}&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=${Language}&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=${Language}&api_key=${API_KEY}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=${Language}&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=${Language}&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await basicFetch(`/discover/movie?with_genres=99&language=${Language}&api_key=${API_KEY}`)
      },
    ]
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=${Language}&api_key=${API_KEY}`);
          break;

        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=${Language}&api_key=${API_KEY}`); 
          break;

        // no default
      }
    }
    return info;
  }
}