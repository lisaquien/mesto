export default class Card {
  constructor(data, templateSelector, openGalleryPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openGalleryPopup = openGalleryPopup;
  };
  
  // Метод получения шаблона разметки карточки
  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    
    return cardElement;
  }
  
  //Метод удаления карточки
  _handleRemoveCard() {
    this._element.remove();
  }
  
  //Метод лайка карточки
  _handleLikeCard() {
    this._buttonElementLike.classList.toggle('card__button_type_activeLike');
  }
  
  // Метод-агрегатор слушателей удаления и лайка (вызыается в методе _createCard() )
  _setCardEventListeners() {
    this._buttonElementRemove = this._element.querySelector('.card__button_type_remove');
    this._buttonElementRemove.addEventListener('click', () => this._handleRemoveCard());
    
    this._buttonElementLike = this._element.querySelector('.card__button_type_like');
    this._buttonElementLike.addEventListener('click', () => this._handleLikeCard());
  }

  // Метод заполнения шаблона карточки данными
  createCard = () => {
    this._element = this._getTemplate();
    
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__placename').textContent = this._name;
    
    this._setCardEventListeners(this._element);
    
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.addEventListener('click', () => {
      this._openGalleryPopup(this._name, this._link);
    });
      
    return this._element;
  }
}