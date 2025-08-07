import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieModal from '../MovieModal/MovieModal';
import { fetchMovies } from '../../services/movieService';
import { Movie } from '../../types/movie';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setError(false);
    setMovies([]);

    try {
      const results = await fetchMovies({ query });

      if (results.length === 0) {
        toast.error('No movies found for your request.');
      }

      setMovies(results);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieGrid movies={movies} onSelect={setSelectedMovie} />}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
      <Toaster position="top-right" />
    </>
  );
}
