import React from 'react';
import './SavedMovies.css';
import Content from '../Content/Content';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Error from '../Form/FormError/FormError';

function SavedMovies({ savedMovies, errorSearch, errorFind, seacrhSavedMovies, handlerDeleteMovie }) {

  const [filterMovieList, setFilterMovieList] = React.useState([]);

  function onSeacrhSavedMovies ({ searchQuery, shorts }) {
    const moviesList = seacrhSavedMovies({ searchQuery, shorts });
    if (moviesList.length === savedMovies.length) {
      return
    }
    setFilterMovieList(moviesList);
  }

  return (
    <Content>
      <section className="saved-movies">
        <SearchForm onSearch={onSeacrhSavedMovies} error={errorSearch}/>
        {
          !(errorFind)
            ? <MoviesCardList movies={filterMovieList?.length > 0 ? filterMovieList : savedMovies} handlerDeleteMovie={handlerDeleteMovie}/>
            : <Error typeClass="form-error_type_form" error={errorFind}/>
        }
      </section>
    </Content>
  );
}

export default SavedMovies;
