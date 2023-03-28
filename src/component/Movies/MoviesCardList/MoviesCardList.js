import React from 'react';
import { useHistory } from 'react-router-dom';
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';
import ButtonMore from '../../Button/Button';
import { transitionPoint, cardCountDefault, moreMovies } from '../../../utils/constants'

function MoviesCardList({ movies, savedMovies, handlerDeleteMovie, handlerChachgeStatusMovie }) {
  const history = useHistory();
  const [showParams, setShowParams] = React.useState({cardCount: 0, index: 0, limit: 0});
  const [moviesList, setMoviesList] = React.useState([]);

  const onResize = React.useCallback (() => {
    const visibleMonitorWidth = document.documentElement.clientWidth;
    if (visibleMonitorWidth >= transitionPoint[1280]) {
      setShowParams ({ cardCount: cardCountDefault[12], index: cardCountDefault[12], limit: moreMovies[4] });
    } else if (visibleMonitorWidth > transitionPoint[768] && visibleMonitorWidth < transitionPoint[1280]) {
      setShowParams ({ cardCount: cardCountDefault[12], index: cardCountDefault[12], limit: moreMovies[3] });
    } else if (visibleMonitorWidth > transitionPoint[480] && visibleMonitorWidth <= transitionPoint[768]) {
      setShowParams ({ cardCount: cardCountDefault[8], index: cardCountDefault[8], limit: moreMovies[2] });
    } else {
      setShowParams ({ cardCount: cardCountDefault[5], index: cardCountDefault[5], limit: moreMovies[2] });
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
      (moviesList.length !== movies.length && history.location.pathname === '/movies')
        && <ButtonMore text="Ещё" type="button" name="buttonMore" typeButtonClass="button_more" handler={buttonMoreHandler} />
      }
    </>
  );
}

export default MoviesCardList;
