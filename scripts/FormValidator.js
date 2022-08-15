export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }
  
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    if (errorElement) {
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
    };
  }
  
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    if (errorElement) {
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
    };
  }
  
  _checkInputValidity(formElement, inputElement) {
    !inputElement.validity.valid
      ? this._showInputError(formElement, inputElement, inputElement.validationMessage)
      : this._hideInputError(formElement, inputElement);
  }
  
  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }
  
  _toggleSubmitButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      buttonElement.removeAttribute('disabled');
      buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }
  
  _setInputValidationListeners(formElement) {
    //конвертация в массив из-за some() в ф-и hasInvalidInput()
    const inputList = Array.from(document.querySelectorAll(this._config.inputSelector));
    const buttonElement = formElement.querySelector(this._config.submitButtonSelector);
    
    this._toggleSubmitButtonState(inputList, buttonElement);
    
    inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, this._config);
        this._toggleSubmitButtonState(inputList, buttonElement, this._config);
      });
    });
  }
  
  enableValidation() {
    const formList = document.querySelectorAll(this._config.formSelector);
    
    formList.forEach(formElement => {
      this._setInputValidationListeners(formElement);
    });
  }
}