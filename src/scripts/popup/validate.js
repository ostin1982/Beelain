const formInput = document.querySelector('.popup__input');
const popupCheckbox = document.querySelector('.popup__checkbox');

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
    popupCheckbox.classList.add('popup__checkbox_valid');
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
    const buttonElement = formElement.querySelector('.popup__button');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement);

        toggleButtonState(inputList, buttonElement);
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

  const hasInvalidInput = (formElement) => {
    return formElement.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__button_inactive');
    } else {
      buttonElement.classList.remove('popup__button_inactive');
    }
  };

  enableValidation();
};

export default validate;
