import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player";
const MovieDetail = () => {
  const { id } = useParams();
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
  const [detail, setDetail] = useState({});
  const [video, setVideo] = useState({});
  const getDetail = async () => {
    try {
      const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
      const data = res.data;
      setDetail(data);
    } catch (error) {
      console.log(error)
    }
  };
  const getVideo = async () => {
    try {
      const res = await axios(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
        const data = res.data;
        setVideo(data.results[0].key);
    } catch (error) {
      console.log(error)
    }
   
  };
  useEffect(() => {
    getDetail();
    getVideo();
  }, []);

  return (
    <div className="w-50 flex  dark:bg-black h-[100vh] bg-slate-600">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${video}`}
        className="w-50 m-auto mt-10"
      /> 
      <article className="flex bg-white transition hover:shadow-xl w-[50%] m-auto mt-10 items-">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>Release Date</span>
            <span className="w-px flex-1 bg-gray-900/10" />
            <span>{detail.release_date}</span>
          </time>
        </div>
        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={`https://image.tmdb.org/t/p/w1280${detail.poster_path}`}
            className="aspect-square h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <h3 className="font-bold uppercase text-gray-900">Overview</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {detail.overview}
            </p>
            <h5>Total Rate : {detail.vote_average}</h5>
            <h5>Total Vote : {detail.vote_count}</h5>
          </div>
          <div className="sm:flex sm:items-end sm:justify-end">
            <NavLink
              to="/"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Home
            </NavLink>
          </div>
        </div>
      </article>
      </div>
  );
};

export default MovieDetail;
