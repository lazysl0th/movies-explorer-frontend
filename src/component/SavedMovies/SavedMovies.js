import React from 'react';
import './SavedMovies.css';
import Content from '../Content/Content';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { filterMovies } from '../../utils/utils';

function SavedMovies({ savedMovies, errorSearch, errorFind, searchMoviesFormSubmit, handlerDeleteMovie }) {

  const [filterMovieList, setFilterMovieList] = React.useState([]);

  function seacrhSavedMovies ({ searchQuery, shorts }) {
    const moviesList = filterMovies(savedMovies, searchQuery, shorts);
    setFilterMovieList(moviesList);
  }

  return (
    <Content>
      <section className="saved-movies">
        <SearchForm onSearch={seacrhSavedMovies} error={errorSearch}/>
        <MoviesCardList movies={filterMovieList.length > 0 ? filterMovieList : savedMovies} handlerDeleteMovie={handlerDeleteMovie} error={errorFind}/>
      </section>
    </Content>
  );
}

export default SavedMovies;
