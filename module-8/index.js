"use strict";

import photos from "./gallery-items.js";

const galeryArea = document.querySelector(".js-gallery");
const galeryModal = document.querySelector(".js-lightbox");
const galeryModalContent = document.querySelector(".lightbox__content");
const modalBtnClose = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const bigPhoto = document.querySelector(".lightbox__image");
let nowOpen;

galeryArea.addEventListener("click", openModal);
galeryModalContent.addEventListener("click", closeModalByClickOnGrey);
modalBtnClose.addEventListener("click", closeModal);

photoToPage();

function photoToPage() {
  const allPhoto = photos
    .map(({ preview, original, description }) =>
      photoMarkup(preview, original, description)
    )
    .join("");
  galeryArea.insertAdjacentHTML("beforeend", allPhoto);
}

function photoMarkup(preview, original, description) {
  return `<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=''
      data-source=${original}
      data-lazy=${preview}
      alt=${description}
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`;
}

function openModal(e) {
  e.preventDefault();

  if (e.target.nodeName != "IMG") {
    return;
  }
  bigPhoto.src = e.target.dataset.source;

  nowOpen = e.target.offsetParent;

  galeryModal.classList.add("is-open");
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
  galeryModal.classList.remove("is-open");
  bigPhoto.src = "";

  window.removeEventListener("keydown", closeModalByEsc);
  window.removeEventListener("keydown", switchPhoto);
}

function switchPhoto(e) {
  if (e.code === "ArrowRight") {
    console.log("forvard");

    if (!nowOpen.nextSibling) {
      bigPhoto.src = galeryArea.firstElementChild.firstElementChild.href;
      nowOpen = galeryArea.firstElementChild.nextSibling;
      return;
    }

    bigPhoto.src = nowOpen.nextSibling.firstElementChild.href;
    nowOpen = nowOpen.nextSibling;
    return;
  }

  if (e.code === "ArrowLeft") {
    console.log("back");

    if (!nowOpen.previousSibling) {
      bigPhoto.src = galeryArea.lastElementChild.firstElementChild.href;
      nowOpen = galeryArea.lastElementChild.previousSibling;
      return;
    }

    bigPhoto.src = nowOpen.previousSibling.firstElementChild.href;
    nowOpen = nowOpen.previousSibling;
    return;
  }
}

const lazyLoad = target => {
  const options = {
    rootMargin: "75px 0px",
    treshhold: 0.01
  };

  const forEntries = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.lazy;

        observer.disconnect;
      }
    });
  };

  const io = new IntersectionObserver(forEntries, options);

  io.observe(target);
};

const lazyPhotos = document.querySelectorAll("li img");

lazyPhotos.forEach(photo => {
  lazyLoad(photo);
});
