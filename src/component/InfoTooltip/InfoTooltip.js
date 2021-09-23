import React from 'react';
import './InfoTooltip.css';
import ButtonCancel from '../Button/Button';
import success from '../../images/success.svg';
import fail from '../../images/fail.svg'

function InfoTooltip({ isOpen, onClose, infoState, message }) {

  return (
    <div className={`popup ${isOpen ? 'popup_visible' : '' }`}>
      <figure className="popup__figure-infotooltip">
        <img className="popup__image-info" src={infoState ? success : fail} alt="Результат"/>
        <figcaption className="popup__text-info">{infoState && message}</figcaption>
      </figure>
      <ButtonCancel type="button" name="buttonСancel" typeButtonClass="button_cancel" handler={onClose} />
    </div>
  );
}

export default InfoTooltip;
