import React from 'react';
import { useHistory } from 'react-router-dom';
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import ButtonMore from '../../Button/Button';
import Error from '../../Form/FormError/FormError';

function MoviesCardList({ movies, savedMovies, error, handlerDeleteMovie, handlerChachgeStatusMovie }) {
  const history = useHistory();
  const [showParams, setShowParams] = React.useState({cardCount: 0, index: 0, limit: 0});
  const [moviesList, setMoviesList] = React.useState([]);

  const onResize = React.useCallback (() => {
    const visibleMonitorWidth = document.documentElement.clientWidth;
    if (visibleMonitorWidth > 768) {
      setShowParams ({ cardCount: 12, index: 12, limit: 3 });
    } else if (visibleMonitorWidth > 480 && visibleMonitorWidth <= 768) {
      setShowParams ({ cardCount: 8, index: 8, limit: 2 });
    } else {
      setShowParams ({ cardCount: 5, index: 5, limit: 2 });
    }
  },[])

  const onResizeThrottler = React.useCallback (() => {
    let resizeTimeout;
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        onResize();
      }, 1000);
    }
  },[onResize])

  React.useEffect (() => {
    onResize();

    window.addEventListener('resize', onResizeThrottler)

    return () => {
      window.removeEventListener('resize', onResizeThrottler)
    }
  }, [onResize, onResizeThrottler])

  React.useEffect (() => {

    history.location.pathname !== '/movies'
      ? setMoviesList(movies)
      : (movies.length <= showParams.cardCount)
        ? setMoviesList(movies)
        : (moviesList.length === 0)
          ? setMoviesList(movies.slice(0, showParams.cardCount))
          : (showParams.index === showParams.cardCount)
            ? setMoviesList(movies.slice(0, showParams.index))
            : setMoviesList((state) => state.map((movie) => movie.id === movies.slice(0, showParams.index).id ? movie : movie))

  }, [setMoviesList, movies, moviesList.length, showParams, history.location.pathname])

  function buttonMoreHandler() {
    setShowParams((prevValue) => ({ ...prevValue, index: showParams.index + showParams.limit }));
    setMoviesList(moviesList.concat(movies.slice(showParams.index, (showParams.index + showParams.limit))));
  }

  return (
    <>
      <ul className="movies__card-list">
        {
          moviesList.map((movie) => (
            <MovieCard
              key={movie?.id || movie?._id}
              movie={movie}
              savedMovies={savedMovies}
              onDeleteMovie={handlerDeleteMovie}
              onSaveMovie={handlerChachgeStatusMovie}
            />
          ))
        }
      </ul>
      {
        (movies.length === 0)
          ? <Error typeClass="form-error_type_form" error={error}/>
          : (moviesList.length !== movies.length && history.location.pathname === '/movies')
              && <ButtonMore text="Ещё" type="button" name="buttonMore" typeButtonClass="button_more" handler={buttonMoreHandler} />
      }
    </>
  );
}

export default MoviesCardList;
