const formInput = document.querySelector('.popup__input');

const validate = () => {
  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_invalid');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };

  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_invalid');
    inputElement.classList.add('popup__input_valid');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  };

  const isValid = (formElement, inputElement) => {
    if (!formInput.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);
      });
    });
  };

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__container'));

    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (event) => {
        event.preventDefault();
      });

      setEventListeners(formElement);
    });
  };

  enableValidation();
};

export default validate;
