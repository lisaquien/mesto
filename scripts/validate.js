const config = {
  formSelector: '.form',
  fieldsetSelector: '.form__fieldset',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
};

function showInputError(formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
  if (errorElement) {
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
}

function hideInputError(formElement, inputElement, { inputErrorClass, errorClass }) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  if (errorElement) {
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
}

function checkInputValidity(formElement, inputElement, { ...rest }) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, rest);
  } else {
    hideInputError(formElement, inputElement, rest);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some(inputElement => !inputElement.validity.valid);
}
  
function toggleSubmitButtonState(inputList, buttonElement, { inactiveButtonClass }) {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

function setInputValidationListeners(formElement, { inputSelector, submitButtonSelector, ...rest }) {
  const inputList = Array.from(document.querySelectorAll(inputSelector)); //конвертация в массив из-за some() в ф-и hasInvalidInput()
  const buttonElement = formElement.querySelector(submitButtonSelector);
  
  toggleSubmitButtonState(inputList, buttonElement, rest);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function() {
      checkInputValidity(formElement, inputElement, rest);
      toggleSubmitButtonState(inputList, buttonElement, rest);
    });
  });
}

function enableValidation({ formSelector, fieldsetSelector, ...rest }) {
  const formList = document.querySelectorAll(formSelector);

  formList.forEach((formElement) => {
    const fieldsetList = formElement.querySelectorAll(fieldsetSelector);
    fieldsetList.forEach((fieldsetElement) => {
      setInputValidationListeners(fieldsetElement, rest);
    });
  });
}

enableValidation(config);