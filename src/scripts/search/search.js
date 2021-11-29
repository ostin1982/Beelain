const container = document.querySelector('.header__search');
const pictogram = container.querySelector('.header__search_pictogram');
const clear = container.querySelector('.header__search_clear');

const search = () => {
  pictogram.onclick = () => {
    container.classList.add('open');
    pictogram.innerHTML = '<svg class="search" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.187 14.472h.79l4.24 4.26c.41.41.41 1.08 0 1.49-.41.41-1.08.41-1.49 0l-4.25-4.25v-.79l-.27-.28a6.5 6.5 0 0 1-5.34 1.48c-2.78-.47-5-2.79-5.34-5.59a6.505 6.505 0 0 1 7.27-7.27c2.8.34 5.12 2.56 5.59 5.34a6.5 6.5 0 0 1-1.48 5.34l.28.27Zm-9.71-4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5Z" fill="#000"/></svg>';
  };

  clear.onclick = () => {
    container.classList.remove('open');
    pictogram.innerHTML = '<svg class="search" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.187 11.472h.79l4.24 4.26c.41.41.41 1.08 0 1.49-.41.41-1.08.41-1.49 0l-4.25-4.25v-.79l-.27-.28a6.5 6.5 0 0 1-5.34 1.48c-2.78-.47-5-2.79-5.34-5.59a6.505 6.505 0 0 1 7.27-7.27c2.8.34 5.12 2.56 5.59 5.34a6.5 6.5 0 0 1-1.48 5.34l.28.27Zm-9.71-4.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5Z" fill="#fff"/></svg>';
  };
};

export default search;
