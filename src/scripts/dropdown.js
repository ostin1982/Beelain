const dropdown = () => {
  class Dropdown {
    constructor(selector, options) {
      this.element = document.querySelector(selector);
      this.items = options.items;

      this.element.querySelector('.header__title_dropdown-town')
          .textContent = this.items[0].label;
      this.element.addEventListener('click', (event) => {
        if (event.target.classList.contains('header__title_dropdown-town')) {
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
      this.element.querySelector('.header__title_dropdown-town')
          .textContent = item.label;
      this.close();
    }

    open() {
      this.element.classList.add('open');
      console.log('open');
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
      {label: 'г. Краснодар', id: 'krdr'},
      {label: 'г. Чебоксары', id: 'cheb'},
    ],
  });
};

export default dropdown;
