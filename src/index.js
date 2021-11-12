import './blocks/index.scss';

let intervalId;

document.querySelectorAll('.header__subtitle_button').forEach((event) => {
  event.addEventListener('click', (event) => {
    const menu = event.currentTarget.dataset.path;
    const list = document.querySelector(`[data-target=${menu}]`);

    document.querySelectorAll('.header__subtitle_menu').forEach((event) => {
      if (!list.classList.contains('open')) {
        event.classList.remove('header__subtitle_active');
        event.classList.remove('open');
        list.classList.add('header__subtitle_active');

        intervalId = setTimeout(() => {
          list.classList.add('open');
        }, 0);
      }

      if (list.classList.contains('open')) {
        clearTimeout(intervalId);
        intervalId = setTimeout(() => {
          list.classList.remove('header__subtitle_active');
        }, 0);
      }
    });
  });
});
