let editButtonOpeningPopup = document.querySelector('.profile__button_type_edit');
let popup = document.querySelector('.popup');
let closePopupIcon = popup.querySelector('.form__close-icon');

let formElement = popup.querySelector('.form');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let inputName = formElement.querySelector('.form__input_element_name');
let inputAbout = formElement.querySelector('.form__input_element_about');

editButtonOpeningPopup.addEventListener('click', function() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

function popupInvisible() {
  popup.classList.remove('popup_opened');
}

closePopupIcon.addEventListener('click', popupInvisible);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupInvisible();
}

formElement.addEventListener('submit', formSubmitHandler);