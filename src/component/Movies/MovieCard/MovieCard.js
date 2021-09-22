import { useHistory } from 'react-router-dom';
import './MovieCard.css';
import ButtonAdd from '../../Button/Button';
import ButtonDelete from '../../Button/Button';
import React from 'react';

function MovieCard({ movie, savedMovies, onDeleteMovie, onSaveMovie }) {
  const history = useHistory();

  const isSaved =
    savedMovies
      ? savedMovies.some((savedMovie) => (savedMovie.movieId === movie.id))
      : false

  function handlerDeleteButtonClick() {
    onDeleteMovie(movie);
  }

  function handlerAddbuttonClick() {
    onSaveMovie(movie, !isSaved)
  }

  return (
    <li className="movie">
      <a href={movie.trailer} className="movie__link" target="_blank" rel="noreferrer">
        <img className="movie__image" src={movie.image} alt={movie.nameRU}/>
      </a>
      <h2 className="movie__name">{movie.nameRU}</h2>
      <ButtonAdd
        type="button"
        name="buttonAdd"
        typeButtonClass={`button_add ${history.location.pathname === '/saved-movies' && 'button_hidden'} ${isSaved && 'button_add_active'}`}
        handler={handlerAddbuttonClick}
      />
      <ButtonDelete
        text="+"
        type="button"
        name="buttonDelete"
        typeButtonClass={`button_delete ${(history.location.pathname === '/movies') && 'button_hidden'}`}
        handler={handlerDeleteButtonClick}
      />
      <p className="movie__duration">
        {
          `${(movie.duration > 60) ? `${Math.trunc(movie.duration/60)}ч${movie.duration%60}м` : `${movie.duration}м` }`
        }
      </p>
    </li>
  );
}

export default MovieCard;
