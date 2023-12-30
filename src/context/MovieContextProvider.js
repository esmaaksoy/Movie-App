import { createContext, useContext, useEffect,useState } from "react";
import axios from "axios";
export const MovieContext = createContext();
export const useMovieContext = () => {
  return useContext(MovieContext);
};
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const getMovies = (url) => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  return (
    <MovieContext.Provider value={{ movies, loading, getMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
