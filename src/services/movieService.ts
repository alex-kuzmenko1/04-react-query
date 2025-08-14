import axios from "axios";
import type { Movie } from "../types/movie";


const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export interface MoviesApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesApiResponse> => {
  if (!query.trim()) {
    throw new Error("Search query is required");
  }

  try {
    const response = await axios.get<MoviesApiResponse>(API_URL, {
      params: { query, page },
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies");
  }
};
