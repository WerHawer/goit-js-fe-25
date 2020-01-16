"use strict";

import photos from "./gallery-items.js";
import photoMarkup from "./photoMarkup.js";
import refs from "./refs.js";
import { lazyLoad } from "./lazyLoad.js";

export function photoToPage(arr) {
  const allPhoto = arr
    .map(({ preview, original, description }) =>
      photoMarkup(preview, original, description)
    )
    .join("");
  refs.galeryArea.insertAdjacentHTML("beforeend", allPhoto);
}

photoToPage(photos);

const lazyPhotos = document.querySelectorAll("li img");

lazyPhotos.forEach(photo => {
  lazyLoad(photo);
});
