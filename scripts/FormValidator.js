export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
  }
  
  _showInputError(formElement, inputElement, errorMessage) {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    if (this._errorElement) {
      inputElement.classList.add(this._config.inputErrorClass);
      this._errorElement.textContent = errorMessage;
      this._errorElement.classList.add(this._config.errorClass);
    };
  }
  
  _hideInputError(formElement, inputElement) {
    this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    
    if (this._errorElement) {
      inputElement.classList.remove(this._config.inputErrorClass);
      this._errorElement.classList.remove(this._config.errorClass);
      this._errorElement.textContent = '';
    };
  }
  
  _checkInputValidity(formElement, inputElement) {
    !inputElement.validity.valid
      ? this._showInputError(formElement, inputElement, inputElement.validationMessage)
      : this._hideInputError(formElement, inputElement);
  }
  
  _hasInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  }
  
  _toggleSubmitButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._buttonElement.setAttribute('disabled', true);
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute('disabled');
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }
  
  _setInputValidationListeners(formElement) {
    //конвертация в массив из-за some() в ф-и hasInvalidInput()
    this._inputList = Array.from(document.querySelectorAll(this._config.inputSelector));
    this._buttonElement = formElement.querySelector(this._config.submitButtonSelector);
    
    this._toggleSubmitButtonState();
    
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, this._config);
        this._toggleSubmitButtonState();
      });
    });
  }
  
  enableValidation() {
    this._setInputValidationListeners(this._formElement);
  }
}