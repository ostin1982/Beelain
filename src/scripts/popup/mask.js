const mask = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const phoneInputs = document.querySelectorAll('input[data-tel-input]');

    const getInputNumbersValue = (input) => {
      return input.value.replace(/\D/g, '');
    };

    const onPhonePaste = (event) => {
      const input = event.target;
      const inputNumbersValue = getInputNumbersValue(input);
      const pasted = event.clipboardData || window.clipboardData;
      if (pasted) {
        const pastedText = pasted.getData('Text');
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
          return;
        }
      }
    };

    const onPhoneInput = (event) => {
      const input = event.target;
      const selectionStart = input.selectionStart;

      let inputNumbersValue = getInputNumbersValue(input);
      let formattedInputValue = '';

      if (!inputNumbersValue) {
        return input.value = '';
      }

      if (input.value.length != selectionStart) {
        if (event.data && /\D/g.test(event.data)) {
          input.value = inputNumbersValue;
        }
        return;
      }

      if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
        if (inputNumbersValue[0] == '9') {
          inputNumbersValue = '7' + inputNumbersValue;
        }

        const firstSymbols = (inputNumbersValue[0] == '8') ? '8' : '+7';
        formattedInputValue = input.value = firstSymbols + ' ';

        if (inputNumbersValue.length > 1) {
          formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
        }
      } else {
        formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
      }
      input.value = formattedInputValue;
    };

    const onPhoneKeyDown = (event) => {
      const inputValue = event.target.value.replace(/\D/g, '');

      if (event.keyCode == 8 && inputValue.length == 1) {
        event.target.value = '';
      }
    };

    for (const phoneInput of phoneInputs) {
      phoneInput.addEventListener('keydown', onPhoneKeyDown);
      phoneInput.addEventListener('input', onPhoneInput, false);
      phoneInput.addEventListener('paste', onPhonePaste, false);
    }
  });
};

export default mask;
