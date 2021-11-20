const button = document.querySelector('.header__title_dropdown-lang');
const menu = document.querySelector('.header__title_list');
const item = menu.querySelectorAll('.header__title_items');

const selectLang = () => {
  button.addEventListener('click', () => {
    menu.classList.add('header__title_visible');
  });

  item.forEach((listItem) => {
    listItem.addEventListener('click', (event) => {
      event.stopPropagation();
      button.innerText = event.target.innerText;
      menu.classList.remove('header__title_visible');
    });
  });

  document.addEventListener('click', (event) => {
    if (event.target !== button) {
      menu.classList.remove('header__title_visible');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      menu.classList.remove('header__title_visible');
    }
  });
};

export default selectLang;
