import { Link } from "react-router-dom";
import "../assets/css/Favourite.css";
import { useContext, useState } from "react";
import MovieCard from "../components/MovieCard";
import { GlobalContext } from "../context/context";

const Favourite = () => {
  const { favourites } = useContext(GlobalContext);
  return (
    <div className="container">
      {favourites && favourites.length ? (
        <div className="movies-grid">
        {favourites.map((favourite) => <MovieCard movieInfo={favourite} />)}
        </div>
      ) : (
        <div className="box">
          <h1>You Haven't Added Your Favourite Movie Yet</h1>
          <Link to="/">Click Here To Explore Home Page</Link>
        </div>
      )}
    </div>
  );
};

export default Favourite;
