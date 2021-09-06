import './MovieCard.css';
import ButtonAdd from '../../Button/Button';
import ButtonDelete from '../../Button/Button';

import movieImage from '../../../images/movie_image.png'

function MovieCard() {
  return (
    <li className="movie">
      <img className="movie__image" src={movieImage} alt="Постер фильма"/>
      <h2 className="movie__name">33 слова о дизайне</h2>
      <ButtonAdd type="button" name="buttonAdd" typeButtonClass="button_add"/>
      <ButtonDelete text="+" type="button" name="buttonDelete" typeButtonClass="button_delete button_hidden"/>
      <p className="movie__duration">1ч42м</p>
    </li>
  );
}

export default MovieCard;
