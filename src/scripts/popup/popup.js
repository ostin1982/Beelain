import visiblePassword from './visiblePassword';
import mask from './mask';
import validate from './validate';

const popup = document.querySelector('.popup');
const enter = document.querySelector('.header__subtitle_button-icon');
const close = document.querySelector('.popup__close');
const forgot = document.querySelector('.popup__forgot');
const help = document.querySelector('.popup__help');
const closeHelp = document.querySelector('.popup__close_help');
const back = document.querySelector('.popup__back');

const registration = () => {
  enter.onclick = () => {
    popup.classList.add('popup_is-open');
  };

  forgot.onclick = () => {
    popup.classList.remove('popup_is-open');
    help.classList.add('popup_is-open');
  };

  close.onclick = () => {
    popup.classList.remove('popup_is-open');
  };

  closeHelp.onclick = () => {
    help.classList.remove('popup_is-open');
  };

  back.onclick = () => {
    help.classList.remove('popup_is-open');
    popup.classList.add('popup_is-open');
  };

  mask();
  visiblePassword();
  validate();
};

export default registration;
