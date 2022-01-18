import visiblePassword from './visiblePassword';
import mask from '../mask/mask';
import validate from './validate';

const popupAll = Array.from(document.querySelectorAll('.popup'));
const popupEnter = document.querySelector('.popup__enter');
const popupHelp = document.querySelector('.popup__help');
const popupForgot = document.querySelector('.popup__forgot');
const popupCloseHelp = document.querySelector('.popup__close_help');
const popupBack = document.querySelector('.popup__back');
const enterPopup = document.querySelector('.header__subtitle_button-icon');

const registration = () => {
  const popupAdd = (popup) => {
    document.addEventListener('keydown', popupCloseByEsc);
    popup.classList.add('popup_is-open');
  };

  const popupRemove = (popup) => {
    document.removeEventListener('keydown', popupCloseByEsc);
    popup.classList.remove('popup_is-open');
  };

  const popupCloseByEsc = (event) => {
    const popupOpen = document.querySelector('.popup_is-open');
    if (event.key === 'Escape') {
      popupRemove(popupOpen);
    }
  };

  popupAll.forEach((popup) => {
    const popupClose = popup.querySelector('.popup__close');
    popup.addEventListener('click', (event) => {
      if ((event.target !== event.currentTarget) &&
      (event.target !== popupClose)) {
        return;
      }
      popupRemove(popup);
    });
  });

  enterPopup.addEventListener('click', () => {
    popupAdd(popupEnter);
  });

  popupForgot.addEventListener('click', () => {
    popupRemove(popupEnter);
    popupAdd(popupHelp);
  });

  popupCloseHelp.addEventListener('click', () => {
    popupRemove(popupHelp);
  });

  popupBack.addEventListener('click', () => {
    popupRemove(popupHelp);
    popupAdd(popupEnter);
  });

  mask();
  visiblePassword();
  validate();
};

export default registration;
