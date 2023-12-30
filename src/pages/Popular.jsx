import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContextProvider";
import { useState } from "react";
import { toastWarnNotify } from "../helpers/ToastNotify";
const Popular = () => {
  const { movies, loading, getMovies } = useMovieContext();
  const [search, setSearch] = useState("");
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
      );
    } else {
      toastWarnNotify("Please enter a text");
    }
  };
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
