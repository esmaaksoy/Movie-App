import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContextProvider";
import {useEffect } from "react";
import Search from "../components/Search";
const Popular = () => {
  const { movies, loading, getMovies } = useMovieContext();
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  useEffect(() => {
    getMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
    }, [])
  return (
    <div className="dark:bg-black">
      <Search/>
      <div className="flex flex-wrap justify-center">
        {loading ? (
          <img
            src="https://i.gifer.com/origin/44/446bcd468478f5bfb7b4e5c804571392_w200.webp"
            alt=""
          />
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </div>
  );
};

export default Popular;
