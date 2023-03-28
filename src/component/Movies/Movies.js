import React from 'react';
import './Movies.css';
import Content from '../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Error from '../Form/FormError/FormError';

function Movies({ movies, isLoading, errorSearch, errorFind, savedMovies, searchMovies, handlerChachgeStatusMovie }) {

  return (
    <Content>
      <section className="movies">
        <SearchForm onSearch={searchMovies} error={errorSearch}/>
        {
          isLoading
            ? <Preloader />
            : (movies.length === 0)
              ? <Error typeClass="form-error_type_form" error={errorFind}/>
              : <MoviesCardList movies={movies} savedMovies={savedMovies} error={errorFind} handlerChachgeStatusMovie={handlerChachgeStatusMovie} />
        }
      </section>
    </Content>
  );
}

export default Movies;
