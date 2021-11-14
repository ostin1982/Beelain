const dropdown = document.querySelectorAll('.header__subtitle_button');
const dropdownMenu = document.querySelectorAll('.header__subtitle_menu');

let intervalId;

const dropdownWorks = () => {
  dropdown.forEach((event) => {
    event.addEventListener('click', (event) => {
      const menu = event.currentTarget.dataset.path;
      const list = document.querySelector(`[data-target=${menu}]`);
      const arrow = document.querySelector(`[data-index-number=${menu}]`);
      const parent = document.querySelector(`[data-parent=${menu}]`);

      dropdownMenu.forEach((event) => {
        if (!list.classList.contains('open')) {
          event.classList.remove('header__subtitle_active');
          event.classList.remove('open');
          list.classList.add('header__subtitle_active');
          arrow.classList.add('header__subtitle_arrow-active');

          intervalId = setTimeout(() => {
            list.classList.add('open');
          }, 0);
        }

        if (list.classList.contains('open')) {
          clearTimeout(intervalId);
          intervalId = setTimeout(() => {
            list.classList.remove('open');
            list.classList.remove('header__subtitle_active');
            arrow.classList.remove('header__subtitle_arrow-active');
          }, 0);
        }

        window.onclick = (event) => {
          if (event.target === list || event.target === parent) {
            return;
          } else {
            list.classList.remove('header__subtitle_active');
            list.classList.remove('open');
            arrow.classList.remove('header__subtitle_arrow-active');
          }
        };
      });
    });
  });
};

export default dropdownWorks;
