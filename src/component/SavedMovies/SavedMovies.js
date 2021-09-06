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
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </MoviesCardList>
      </section>
    </Content>
  );
}

export default SavedMovies;
