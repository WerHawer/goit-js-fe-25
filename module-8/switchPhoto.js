import refs from "./refs.js";

function switchPhoto(e) {
  if (e.code === "ArrowRight") {
    console.log("forvard");
    if (!refs.nowOpen.nextSibling) {
      refs.bigPhoto.src =
        refs.galeryArea.firstElementChild.firstElementChild.href;
      refs.nowOpen = refs.galeryArea.firstElementChild.nextSibling;
      return;
    }
    refs.bigPhoto.src = refs.nowOpen.nextSibling.firstElementChild.href;
    refs.nowOpen = refs.nowOpen.nextSibling;
    return;
  }
  if (e.code === "ArrowLeft") {
    console.log("back");
    if (!refs.nowOpen.previousSibling) {
      refs.bigPhoto.src =
        refs.galeryArea.lastElementChild.firstElementChild.href;
      refs.nowOpen = refs.galeryArea.lastElementChild.previousSibling;
      return;
    }
    refs.bigPhoto.src = refs.nowOpen.previousSibling.firstElementChild.href;
    refs.nowOpen = refs.nowOpen.previousSibling;
    return;
  }
}
export { switchPhoto };
