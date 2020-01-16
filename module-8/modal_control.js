"use strict";
import refs from "./refs.js";
import { switchPhoto } from "./switchPhoto.js";

refs.galeryArea.addEventListener("click", openModal);
refs.galeryModalContent.addEventListener("click", closeModalByClickOnGrey);
refs.modalBtnClose.addEventListener("click", closeModal);

function openModal(e) {
  e.preventDefault();

  if (e.target.nodeName != "IMG") {
    return;
  }
  refs.bigPhoto.src = e.target.dataset.source;

  refs.nowOpen = e.target.offsetParent;

  refs.galeryModal.classList.add("is-open");
  window.addEventListener("keydown", closeModalByEsc);
  window.addEventListener("keydown", switchPhoto);
}

function closeModalByClickOnGrey(e) {
  if (e.currentTarget != e.target) {
    return;
  }

  closeModal();
}

function closeModalByEsc(e) {
  if (e.code !== "Escape") {
    return;
  }

  closeModal();
}

function closeModal(e) {
  refs.galeryModal.classList.remove("is-open");
  refs.bigPhoto.src = "";

  window.removeEventListener("keydown", closeModalByEsc);
  window.removeEventListener("keydown", switchPhoto);
}
