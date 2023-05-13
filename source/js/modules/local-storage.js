const form = document.querySelector('form');

const getFormInputs = () => {
  if (form) {
    const inputName = form.querySelector('input[name="Имя"]');
    const inputPhone = form.querySelector('input[name="Телефон"]');
    return {
      inputName,
      inputPhone,
    };
  } else {
    return false;
  }
};

export const initFormSubmit = () => {
  if (form) {
    form.addEventListener('submit', () => {
      const {inputName, inputPhone} = getFormInputs();
      localStorage.setItem('Имя', inputName.value);
      localStorage.setItem('Телефон', inputPhone.value);
    });
  }
};
