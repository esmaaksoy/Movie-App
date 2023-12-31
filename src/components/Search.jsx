import { useMovieContext } from "../context/MovieContextProvider";
import { useState } from "react";
import { toastWarnNotify } from "../helpers/ToastNotify";
const Search = () => {
    const { getMovies } = useMovieContext();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(
        `https://api.themoviedb.org/3/search/movie?api_key=8cee427507320aa6cbf25fee80b4bcaf&query=${search}`
      );
    } else {
      toastWarnNotify("Please enter a text");
    }
  };
  return (
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
  );
};

export default Search;
