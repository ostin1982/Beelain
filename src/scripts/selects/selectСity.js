const selectCity = () => {
  class Dropdown {
    constructor(selector, options) {
      this.element = document.querySelector(selector);
      this.items = options.items;

      this.element.querySelector('.header__title_dropdown-city')
          .textContent = this.items[0].label;
      this.element.addEventListener('click', (event) => {
        if (event.target.classList.contains('header__title_dropdown-city')) {
          if (this.element.classList.contains('open')) {
            this.close();
          } else {
            this.open();
          }
        } else if (event.target.tagName.toLowerCase() === 'li') {
          this.select(event.target.dataset.id);
        }
      });

      const itemsHTML = this.items.map((i) => {
        return `<li class="header__title_item" data-id="${i.id}">
            ${i.label}
        </li>`;
      }).join('');

      this.element.querySelector('.header__title_menu')
          .insertAdjacentHTML('afterbegin', itemsHTML);
    }

    select(id) {
      const item = this.items.find((i) => i.id === id);
      this.element.querySelector('.header__title_dropdown-city')
          .textContent = item.label;
      this.close();
    }

    open() {
      this.element.classList.add('open');
    }

    close() {
      this.element.classList.remove('open');
    }
  }

  new Dropdown('#dropdownLabel', {
    items: [
      {label: 'г. Москва', id: 'msk'},
      {label: 'г. Санкт-Петербург', id: 'spb'},
      {label: 'г. Новосибирск', id: 'nsk'},
      {label: 'г. Казань', id: 'kzn'},
      {label: 'г. Чебоксары', id: 'cheb'},
      {label: 'г. Владивосток', id: 'vlad'},
      {label: 'г. Калининград', id: 'klg'},
    ],
  });
};

export default selectCity;
