import './InfoTooltip.css';
import ButtonCancel from '../Button/Button';
import success from '../../images/success.svg';

function InfoTooltip() {
  const textSuccess = 'Вы успешно зарегистрировались!';

  return (
    <div className={"popup"}>
      <figure className="popup__figure-infotooltip">
        <img className="popup__image-info" src={success} alt="Результат"/>
        <figcaption className="popup__text-info">{textSuccess}</figcaption>
      </figure>
      <ButtonCancel type="button" name="buttonСancel" typeButtonClass="button_cancel"/>
    </div>
  );
}

export default InfoTooltip;
