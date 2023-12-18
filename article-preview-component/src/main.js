import "./scss/styles.scss";

const shareContent = document.getElementsByClassName("share__content")[0];
const shareMainIcon = document.getElementsByClassName("share__main-icon")[0];
const share = document.getElementsByClassName("share")[0];

let a = 1;

shareMainIcon.addEventListener("click", () => {
  if (a == 1) {
    shareMainIcon.classList.add("share-main-icon-active");
    shareContent.classList.add("share-content-active");
    share.classList.add("share-active");

    a = 0;
  } else if (a == 0) {
    shareMainIcon.classList.remove("share-main-icon-active");
    shareContent.classList.remove("share-content-active");
    share.classList.remove("share-active");

    a = 1;
  }
});
