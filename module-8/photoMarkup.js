export default function photoMarkup(preview, original, description) {
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
