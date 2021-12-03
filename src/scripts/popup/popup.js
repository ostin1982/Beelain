const popup = document.querySelector('.popup');
const enter = document.querySelector('.header__subtitle_button-icon');
const close = document.querySelector('.popup__close');

const registration = () => {
  enter.onclick = () => {
    popup.classList.add('popup_is-open');
  };

  close.onclick = () => {
    popup.classList.remove('popup_is-open');
  };
};

export default registration;
