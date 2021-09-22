import React from 'react';
import './InfoTooltip.css';
import ButtonCancel from '../Button/Button';
import success from '../../images/success.svg';
import fail from '../../images/fail.svg'

function InfoTooltip({ isOpen, onClose, regState }) {
  const textSuccess = 'Вы успешно зарегистрировались!';
  const textFail = 'Что\u2011то\u00A0пошло\u00A0не\u00A0так! Попробуйте\u00A0ещё\u00A0раз.';

  return (
    <div className={`popup ${isOpen ? 'popup_visible' : '' }`}>
      <figure className="popup__figure-infotooltip">
        <img className="popup__image-info" src={regState ? success : fail} alt="Результат"/>
        <figcaption className="popup__text-info">{regState ? textSuccess : textFail}</figcaption>
      </figure>
      <ButtonCancel type="button" name="buttonСancel" typeButtonClass="button_cancel" handler={onClose} />
    </div>
  );
}

export default InfoTooltip;
