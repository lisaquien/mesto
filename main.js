(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n,r,o=this,i=e.data,a=e.templateSelector,u=e.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(){return o._element=o._getTemplate(),o._cardImage=o._element.querySelector(".card__image"),o._cardImage.src=o._link,o._cardImage.alt=o._name,o._element.querySelector(".card__placename").textContent=o._name,o._setCardEventListeners(),o._element},(n="createCard")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._name=i.name,this._link=i.link,this._templateSelector=a,this._handleCardClick=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_handleRemoveCard",value:function(){this._element.remove(),this._element=null}},{key:"_handleLikeCard",value:function(){this._buttonElementLike.classList.toggle("card__button_type_activeLike")}},{key:"_setCardEventListeners",value:function(){var e=this;this._buttonElementRemove=this._element.querySelector(".card__button_type_remove"),this._buttonElementRemove.addEventListener("click",(function(){return e._handleRemoveCard()})),this._buttonElementLike=this._element.querySelector(".card__button_type_like"),this._buttonElementLike.addEventListener("click",(function(){return e._handleLikeCard()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),this._errorElement&&(e.classList.add(this._config.inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._config.errorClass))}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),this._errorElement&&(e.classList.remove(this._config.inputErrorClass),this._errorElement.classList.remove(this._config.errorClass),this._errorElement.textContent="")}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleSubmitButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._config.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled"),this._buttonElement.classList.remove(this._config.inactiveButtonClass))}},{key:"_setInputValidationListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector),this._toggleSubmitButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleSubmitButtonState()}))}))}},{key:"resetValidation",value:function(){var e=this;this._toggleSubmitButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setInputValidationListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=r,this._renderer=o,this._containerSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._data.forEach((function(t){e._renderer(t)}))}},{key:"addItemAppend",value:function(e){this._containerSelector.append(e)}},{key:"addItemPrepend",value:function(e){this._containerSelector.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._closeIcon=this._popup.querySelector(".popup__close-icon"),this._mouseLeftButton=1}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget&&t.which==e._mouseLeftButton||t.target===e._closeIcon)&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(){return s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},s.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._galleryImage=t._popup.querySelector(".gallery__image"),t._galleryName=t._popup.querySelector(".gallery__name"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._galleryImage.src=n,this._galleryImage.alt=t,this._galleryName.textContent=t,s(_(a.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=b(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e){var t,n=e.popupSelector,r=e.formSelector,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(r),t._handleFormSubmit=o,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formInputList=this._form.querySelectorAll(".form__input"),this._formInputValues={},this._formInputList.forEach((function(t){e._formInputValues[t.name]=t.value})),this._formInputValues}},{key:"setEventListeners",value:function(){var e=this;v(E(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){v(E(a.prototype),"close",this).call(this),this._form.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.userNameSelector,r=t.userDescriptionSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userDescription=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileData={userName:this._userName.textContent,description:this._userDescription.textContent},this._profileData}},{key:"setUserInfo",value:function(e){var t=e.userName,n=e.description;this._userName.textContent=t,this._userDescription.textContent=n}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=document.querySelector(".profile__button_type_edit"),L=document.querySelector(".profile__button_type_add"),j=document.querySelector(".form_type_edit"),I=document.querySelector(".form_type_add"),P=j.querySelector(".form__input_element_name"),q=j.querySelector(".form__input_element_about"),R=document.querySelector(".cards"),x={formSelector:".form",fieldsetSelector:".form__fieldset",inputSelector:".form__input",submitButtonSelector:".form__button",inactiveButtonClass:"form__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"};function B(e,n){return new t({data:e,templateSelector:n,handleCardClick:function(){T.open(e)}}).createCard()}var V=new i({data:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=B(e,".card-template");V.addItemAppend(t)}},".cards");V.renderItems();var T=new y(".popup_type_gallery");T.setEventListeners();var D=new O({userNameSelector:".profile__name",userDescriptionSelector:".profile__about"}),N=new k({popupSelector:".popup_type_edit",formSelector:".form_type_edit",handleFormSubmit:function(e){D.setUserInfo(e)}});N.setEventListeners();var A=new r(x,j);A.enableValidation(),C.addEventListener("click",(function(){N.open();var e=D.getUserInfo(),t=e.userName,n=e.description;P.value=t,q.value=n,A.resetValidation()}));var F=new k({popupSelector:".popup_type_add",formSelector:".form_type_add",handleFormSubmit:function(e){var t=B(e,".card-template");R.prepend(t)}});F.setEventListeners();var U=new r(x,I);U.enableValidation(),L.addEventListener("click",(function(){F.open(),U.resetValidation()}))})();