import axios from '../axios';
import request from '../request';
import { useState, useEffect } from 'react';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(request.fetchOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    };
    fetchData();
  }, []);

  const trancate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{trancate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadebottom" />
    </header>
  );
};

export default Banner;
