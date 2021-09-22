import React from 'react';
import './Movies.css';
import Content from '../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';

function Movies({ movies, isLoading, errorSearch, errorFind, savedMovies, searchMovies, handlerChachgeStatusMovie }) {

  return (
    <Content>
      <section className="movies">
        <SearchForm onSearch={searchMovies} error={errorSearch}/>
        {
          isLoading
            ? <Preloader />
            : <MoviesCardList movies={movies} savedMovies={savedMovies} error={errorFind} handlerChachgeStatusMovie={handlerChachgeStatusMovie} />
        }

      </section>
    </Content>
  );
}

export default Movies;
