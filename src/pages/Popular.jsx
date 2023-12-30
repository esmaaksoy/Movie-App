import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContextProvider";
import { useState } from "react";
const Popular = () => {
  const { movies, loading, getMovies } = useMovieContext();
   const [search, setSearch] = useState("");
   const API_KEY = process.env.REACT_APP_MOVIE_API_KEY
  const handleSubmit = (e)=>{
    e.preventDefault()
    getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
  }
  return (
    <div>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearch(e.target.value)}
      
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
}

export default Popular