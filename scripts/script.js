// кнопки Редактировать и Добавить на странице
const buttonEdit = document.querySelector('.profile__button_type_edit');
const buttonAdd = document.querySelector('.profile__button_type_add');

// Попапы Редактировать, Добавить и Просмотр (по модификаторам)
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupGallery = document.querySelector('.popup_type_gallery');

// Иконки закрытия для попапов Редактировать, Добавить и Просмотр
const closepopupEditProfileIcon = popupEditProfile.querySelector('.form__close-icon');
const closepopupAddCardIcon = popupAddCard.querySelector('.form__close-icon');
const closeGalleryPopupPopupIcon = popupGallery.querySelector('.gallery__close-icon');

// поля Имя профиля и О себе на странице
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Форма Редактировать + поля Имя и О себе внутри попапа Редактировать
const formEditProfile = popupEditProfile.querySelector('.form_type_edit');
const inputName = formEditProfile.querySelector('.form__input_element_name');
const inputAbout = formEditProfile.querySelector('.form__input_element_about');

//Универсальная функция, открывающая попап
function popupOpened(popup) {  
  return popup.classList.add('popup_opened');
}

// Слушатель и обработчик клика по кнопке Редактировать и Добавить
buttonEdit.addEventListener('click', function() {
  popupOpened(popupEditProfile);
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

buttonAdd.addEventListener('click', function() {
  popupOpened(popupAddCard);
});

// Сабмит формы попапа Редактировать при сохранении
function editProfileFormSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupClosed(popupEditProfile);
}

formEditProfile.addEventListener('submit', editProfileFormSubmitHandler);

// Универсальная функция-обработчик, закрывающая попап
function popupClosed(popup) {
  return popup.classList.remove('popup_opened');
}

// Слушатели клика по иконке Закрыть для всех попапов
closepopupEditProfileIcon.addEventListener('click', popupClosed(popupEditProfile));
closepopupAddCardIcon.addEventListener('click', popupClosed(popupAddCard));
closeGalleryPopupPopupIcon.addEventListener('click', function() {
  popupClosed(popupGallery);
});


// Дефолтный массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];


// Блок-контейнер для карточек + содержимое темплейта-карточки
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;

// Поля Изображения и Названия места в Просмотре
const imageGalleryPopup = document.querySelector('.gallery__image');
const nameGalleryPopup = document.querySelector('.gallery__name');

// Функция на создание карточки для каждого элемента массива
function renderCards() {
  initialCards.forEach(addCard);
}

// Функция на создание карточки
function addCard(arr) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector('.card__image');
  const cardPlacenameElement = cardElement.querySelector('.card__placename');
  cardPlacenameElement.textContent = arr.name;
  cardImageElement.src = arr.link;

  setEventListeners(cardElement);

  cardImageElement.addEventListener('click', function() {
    popupOpened(popupGallery);
    imageGalleryPopup.src = cardImageElement.src;
    nameGalleryPopup.textContent = cardPlacenameElement.textContent;
  });
    
  cardsContainer.prepend(cardElement);
}

renderCards();


// Селектор формы в попапе Добавить + поля Название и Ссылка
const formAddCard = document.querySelector('.form_type_add');
const buttonCreateCard = document.querySelector('.form__button_type_create');
const placenameAddPopup = formAddCard.querySelector('.form__input_element_placename');
const linkAddPopup = formAddCard.querySelector('.form__input_element_link');


// Пустой массив, туда пойдут добавленные карточки
let cardsAdded = [];

// Слушатель и обработчик клика по кнопке Создать в п.Добавить
function handleSubmitCard(evt) {
  evt.preventDefault();
  cardsAdded.name = placenameAddPopup.value;
  cardsAdded.link = linkAddPopup.value;
  addCard(cardsAdded);
  placenameAddPopup.value = '';
  linkAddPopup.value = '';
  popupClosed(popupAddCard);
}

formAddCard.addEventListener('submit', handleSubmitCard);


//Функция на удаление карточки
function handleRemoveCard(evt) {
  evt.target.closest('.card').remove();
}


//Функция на лайк карточки
function handleLikeCard(evt) {
  evt.target.classList.toggle('card__button_type_activeLike');
}

// Функция-агрегатор слушателей (вызыается в ф на добавление карточки addCard() )

function setEventListeners(cardElement) {
  const removeButtonElement = cardElement.querySelector('.card__button_type_remove');
  removeButtonElement.addEventListener('click', handleRemoveCard);

  const likeButtonElement = cardElement.querySelector('.card__button_type_like');
  likeButtonElement.addEventListener('click', handleLikeCard);
}