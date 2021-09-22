import './SavedMovies.css';
import Content from '../Content/Content';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import MovieCard from '../Movies/MovieCard/MovieCard';


function SavedMovies() {
  return (
    <Content>
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList>
          <MovieCard buttonAddHiddenClass="button_hidden" />
          <MovieCard buttonAddHiddenClass="button_hidden" />
          <MovieCard buttonAddHiddenClass="button_hidden" />
        </MoviesCardList>
      </section>
    </Content>
  );
}

export default SavedMovies;
