const eye = document.querySelector('.popup__eye');
const input = document.querySelector('.popup__password');

const visiblePassword = () => {
  const toggleEye = () => {
    eye.classList.toggle('active');
  };

  eye.addEventListener('click', () => {
    toggleEye();

    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  });
};

export default visiblePassword;
