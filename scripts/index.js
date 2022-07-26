// кнопки Редактировать и Добавить на странице
const buttonEdit = document.querySelector('.profile__button_type_edit');
const buttonAdd = document.querySelector('.profile__button_type_add');

// Попапы Редактировать, Добавить и Просмотр (по модификаторам)
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupGallery = document.querySelector('.popup_type_gallery');

// Иконки закрытия для попапов Редактировать, Добавить и Просмотр
const iconClosePopupEdit = popupEditProfile.querySelector('.popup__close-icon');
const iconClosePopupAdd = popupAddCard.querySelector('.popup__close-icon');
const iconClosePopupGallery = popupGallery.querySelector('.popup__close-icon');

// поля Имя профиля и О себе на странице
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Форма Редактировать + поля Имя и О себе внутри попапа Редактировать
const formEditProfile = popupEditProfile.querySelector('.form_type_edit');
const inputName = formEditProfile.querySelector('.form__input_element_name');
const inputAbout = formEditProfile.querySelector('.form__input_element_about');

// Блок-контейнер для карточек + содержимое темплейта-карточки
const cardsContainer = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card-template').content;

// Поля Изображения и Названия места в Просмотре
const galleryImage = document.querySelector('.gallery__image');
const galleryName = document.querySelector('.gallery__name');

// Селектор формы в попапе Добавить + поля Название и Ссылка
const formAddCard = document.querySelector('.form_type_add');
const inputPlacename = formAddCard.querySelector('.form__input_element_placename');
const inputLink = formAddCard.querySelector('.form__input_element_link');

// Клавиша Esc в переменной (?)
const escKey = 'Escape';

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

//Универсальная функция, открывающая попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
}

// Сабмит формы попапа Редактировать при сохранении
function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupEditProfile);
}

// Универсальная функция-обработчик, закрывающая попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
}

// Функция на создание карточки для каждого элемента массива
function renderCards() {
  initialCards.forEach(renderCard);
}

// Функция на создание карточки
function createCard(arr) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageElement = cardElement.querySelector('.card__image');
  const cardPlacenameElement = cardElement.querySelector('.card__placename');
  cardPlacenameElement.textContent = arr.name;
  cardImageElement.src = arr.link;
  cardImageElement.alt = arr.name;

  setCardEventListeners(cardElement);

  cardImageElement.addEventListener('click', function() {
    openPopup(popupGallery);
    galleryImage.src = arr.link;
    galleryImage.alt = arr.name;
    galleryName.textContent = arr.name;
  });
    
  return cardElement;
}

// Функция на добавление карточки вперед списка
function renderCard(arr) {
  cardsContainer.prepend(createCard(arr));
}

renderCards();

// Обработчик клика по кнопке Создать в п.Добавить
function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const cardsAdded = {};
  cardsAdded.name = inputPlacename.value;
  cardsAdded.link = inputLink.value;
  renderCard(cardsAdded);
  formAddCard.reset();

  const buttonCreate = formAddCard.querySelector('.form__button_type_create');
  buttonCreate.setAttribute('disabled', true);
  buttonCreate.classList.add('form__button_disabled');

  closePopup(popupAddCard);

  setinputValidationListeners(formAddCard);
}

//Функция на удаление карточки
function handleRemoveCard(evt) {
  evt.target.closest('.card').remove();
}


//Функция на лайк карточки
function handleLikeCard(evt) {
  evt.target.classList.toggle('card__button_type_activeLike');
}

// Функция-агрегатор слушателей (вызыается в ф на добавление карточки createCard() )

function setCardEventListeners(cardElement) {
  const buttonElementRemove = cardElement.querySelector('.card__button_type_remove');
  buttonElementRemove.addEventListener('click', handleRemoveCard);

  const buttonElementLike = cardElement.querySelector('.card__button_type_like');
  buttonElementLike.addEventListener('click', handleLikeCard);
}

//Функция закрытия попапов кликом на оверлей и на иконку закрытия
function closePopupOverlay(popup, icon) {
  popup.addEventListener('mousedown', function(evt) {
    if (evt.target === evt.currentTarget && evt.which == 1 || evt.target === icon) {
      closePopup(popup);
    };
  });
}

closePopupOverlay(popupEditProfile, iconClosePopupEdit);
closePopupOverlay(popupAddCard, iconClosePopupAdd);
closePopupOverlay(popupGallery, iconClosePopupGallery);


//Слушатель и обработчик нажатия на esc для закрытия попапа
function closePopupEscape(evt) {
  if (evt.key === escKey) {
    closePopup(document.querySelector(".popup_opened"));
  }
};

// Слушатель и обработчик клика по кнопке Редактировать и Добавить
buttonEdit.addEventListener('click', function() {
  openPopup(popupEditProfile);
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});

// Слушатель сабмита добавления карточки
formAddCard.addEventListener('submit', handleAddFormSubmit);

//Слушатель и обработчик клика по кнопке Добавить
buttonAdd.addEventListener('click', function() {
  openPopup(popupAddCard);
});

// Слушатель сабмита формы редактирования профиля 
formEditProfile.addEventListener('submit', handleEditFormSubmit);