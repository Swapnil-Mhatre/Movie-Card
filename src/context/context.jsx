import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const isFavourite = (getElement) => {
    return favourites.findIndex((favourite) => favourite.id === getElement.id);
  };

  function handleFavourite(getSelectedMovie) {
    let copyFavourites = [...favourites];
    const movieIndex = favourites.findIndex(
      (favourite) => favourite.id === getSelectedMovie.id
    );
    if (movieIndex === -1) {
      copyFavourites.push(getSelectedMovie);
    } else {
      copyFavourites.splice(movieIndex, 1);
    }
    setFavourites(copyFavourites);
  }

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem("favouriteMoviesList")));
  }, []);

  useEffect(() => {
    localStorage.setItem("favouriteMoviesList", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <GlobalContext.Provider
      value={{ isFavourite, favourites, setFavourites, handleFavourite }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
