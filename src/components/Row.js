import { useState, useEffect } from 'react';
import axios from '../axios';
import './Row.css';
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(fetchUrl);
      setMovie(req.data.results);
      return req;
    };
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movie.map(
          (item) =>
            ((isLargeRow && item.poster_path) ||
              (!isLargeRow && item.backdrop_path)) && (
              <img
                key={item.id}
                className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? item.poster_path : item.backdrop_path
                }`}
                alt={item.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
