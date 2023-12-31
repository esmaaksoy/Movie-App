import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";

const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const { currentUser } = useAuthContext();
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  const navigate = useNavigate();
  return (
    <div
      className="movie"
      id="container"
      onClick={() => navigate("/details/" + id)}
    >
      <img
        loading="lazy"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w1280${poster_path}`
            : defaultImage
        }
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5 className="p-2">{title}</h5>
        {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      {currentUser && (
        <div className="movie-over">
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
