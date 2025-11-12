import { useState, useEffect } from "react";
import { fetchPopularMovie, fetchSearchedMovie } from "../utilities/api";
import MovieCard from "../components/MovieCard";
import "../assets/css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function popularMovies() {
      setLoading(true);
      try {
        const moviesList = await fetchPopularMovie();
        setMovies(moviesList);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    popularMovies();
  }, []);

  async function handleSearchInput(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchedMovie = await fetchSearchedMovie(searchQuery);
      setMovies(searchedMovie);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  if (loading) {
    return <div className="container">Loading !!! Please Wait</div>;
  }

  if (error) {
    return <div className="container">{error} Some Error Occured</div>;
  }

  return (
    <div className="container">
      <form action="">
        <input
          type="text"
          placeholder="Search For a Movie"
          name="SearchBox"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearchInput}>Search</button>
      </form>
      <div className="movies-grid">
        {movies && movies.length
          ? movies.map((movie) => <MovieCard movieInfo={movie} />)
          : null}
      </div>
    </div>
  );
};

export default Home;
