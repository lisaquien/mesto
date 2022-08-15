import { openPopup, popupGallery, galleryImage, galleryName } from './index.js';

export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  };
  
  // Метод получения шаблона разметки карточки
  //const cardTemplate = document.querySelector('.card-template'); 
  _getTemplate() {
    const cardElement = this._templateSelector.content.querySelector('.card').cloneNode(true);
    
    return cardElement;
  }
  
  //Метод удаления карточки
  _handleRemoveCard(evt) {
    evt.target.closest('.card').remove();
  }
  
  //Метод лайка карточки
  _handleLikeCard(evt) {
    evt.target.classList.toggle('card__button_type_activeLike');
  }
  
  // Метод-агрегатор слушателей удаления и лайка (вызыается в методе _createCard() )
  _setCardEventListeners() {
    const buttonElementRemove = this._element.querySelector('.card__button_type_remove');
    buttonElementRemove.addEventListener('click', this._handleRemoveCard);
    
    const buttonElementLike = this._element.querySelector('.card__button_type_like');
    buttonElementLike.addEventListener('click', this._handleLikeCard);
  }

  // Метод заполнения шаблона карточки данными
  createCard = () => {
    this._element = this._getTemplate();
    
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__placename').textContent = this._name;
    
    this._setCardEventListeners(this._element);
    
    this._element.querySelector('.card__image').addEventListener('click', () => {
      openPopup(popupGallery);
      galleryImage.src = this._link;
      galleryImage.alt = this._name;
      galleryName.textContent = this._name;
    });
      
    return this._element;
  }
}