let editButtonOpeningPopup = document.querySelector('.profile__button_type_edit');
let popup = document.querySelector('.popup');
let closePopupIcon = popup.querySelector('.form__close-icon_popup');

let formElement = popup.querySelector('.form');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let inputName = formElement.querySelector('.form__input_element_name');
let inputAbout = formElement.querySelector('.form__input_element_about');

editButtonOpeningPopup.addEventListener('click', function() {
  popup.setAttribute('style', 'display: flex');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

/* Почему-то не срабатывает метод ClassList.add/toggle на
добавление нового класса, получилось добиться открытия/закрытия
окна только через атрибутивный метод. Есть версии почему мой
ClassList не работает? Селектор класса .popup_opened с единственным
свойством 'display: flex' в css есть. Ниже код, который
не сработал. Буду благодарна, если сможете указать на ошибку:


function popupClassChange() {
  popup.classList.toggle('popup_opened');
}

editButtonOpeningPopup.addEventListener('click', popupClassChange);
closePopupIcon.addEventListener('click', popupClassChange);
*/

function closePopupModal() {
  popup.removeAttribute('style', 'display: flex');
}

closePopupIcon.addEventListener('click', closePopupModal);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopupModal();
}

formElement.addEventListener('submit', formSubmitHandler);