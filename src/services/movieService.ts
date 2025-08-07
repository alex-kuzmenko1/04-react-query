import axios from "axios";
import { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const SEARCH_URL = `${BASE_URL}/search/movie`;

interface FetchMoviesParams {
  query: string;
}

export const fetchMovies = async ({
  query,
}: FetchMoviesParams): Promise<Movie[]> => {
  const response = await axios.get(SEARCH_URL, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page: 1,
    },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTcwYjcwZWNkY2MzNmY2YTM0YmY5OTk1YzJiMTI4OCIsIm5iZiI6MTc0ODczMTQ5Ny45OTksInN1YiI6IjY4M2I4NjY5YjI5MGQ1ZDJjMDI4ODZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.76CIlWte2ofDyjuy7bPcEKzwp-A7OWwQfMFil2IJs24`,
    },
  });

  return response.data.results;
};
