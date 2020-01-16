"use strict";

export default {
  galeryArea: document.querySelector(".js-gallery"),
  galeryModal: document.querySelector(".js-lightbox"),
  galeryModalContent: document.querySelector(".lightbox__content"),
  modalBtnClose: document.querySelector('button[data-action="close-lightbox"]'),
  bigPhoto: document.querySelector(".lightbox__image"),
  //   lazyPhotos: document.querySelectorAll("li img"),
  nowOpen: ""
};
