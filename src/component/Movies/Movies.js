import './Movies.css';
import Content from '../Content/Content';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import MovieCard from './MovieCard/MovieCard';
import ButtonMore from '../Button/Button';

function Movies() {
  return (
    <Content>
      <section className="movies">
        <SearchForm />
        <MoviesCardList>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </MoviesCardList>
        <ButtonMore text="Ещё" type="button" name="buttonMore" typeButtonClass="button_more" />
      </section>
    </Content>
  );
}

export default Movies;
