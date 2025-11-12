import { useContext } from "react";
import "../assets/css/MovieCard.css";
import { GlobalContext } from "../context/context";
const MovieCard = ({ movieInfo }) => {
  const { handleFavourite, isFavourite } = useContext(GlobalContext);

  return (
    <div className="Movie-card">
      <div className="Movie-poster">
        <img
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movieInfo.poster_path}`}
          alt={movieInfo.title}
        />
        <div className="Favourite">
          <span onClick={() => handleFavourite(movieInfo)}>
            {isFavourite(movieInfo) !== -1 ? "❤️" : "🤍"}
          </span>
        </div>
      </div>
      <div className="Movie-info">
        <p className="Title">{movieInfo.title}</p>
        <span className="Release">{movieInfo.release_date}</span>
      </div>
    </div>
  );
};

export default MovieCard;
