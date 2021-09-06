import './MoviesCardList.css';

function MoviesCardList({ children }) {
  return (
      <ul className="movies__card-list">
        {children}
      </ul>
  );
}

export default MoviesCardList;
