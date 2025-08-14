import axios from "axios";
import type { Movie } from "../types/movie";


const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export interface FetchMoviesResponse {
  results: Movie[];
  total_pages: number;
  }

export const fetchMovies = async (
  query: string,
  page: number
): Promise<FetchMoviesResponse> => {
  const config = {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };

  const response = await axios.get<FetchMoviesResponse>(API_URL, config);
  return response.data;
};