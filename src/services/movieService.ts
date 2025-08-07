const API_KEY = '4e70b70ecdcc36f6a34bf9995c2b1288'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchMovies({ query, page = 1 }: { query: string; page?: number }) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch movies');
  }

  return res.json(); 
}
