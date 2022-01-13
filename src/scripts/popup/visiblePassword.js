const visiblePassword = () => {
  const eye = document.querySelector('.popup__eye');
  const input = document.querySelector('.popup__password');

  eye.addEventListener('click', () => {
    eye.classList.toggle('active');

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
};

export default visiblePassword;
