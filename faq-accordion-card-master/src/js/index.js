import "../scss/styles.scss";
const answerBox = document.getElementsByClassName("FAQ__item-req");
const arrows = document.getElementsByClassName("FAQ__item-req-img");
const answer = document.getElementsByClassName("FAQ__item-req-tittle");
const text = document.getElementsByClassName("FAQ__item-res");

const paragraph = document.getElementsByClassName("FAQ__item-res");

let a = 1;

const clickAnswerBox = (b) => {
  if (a == 1) {
    paragraph[b].classList.toggle("active");
    arrows[b].classList.toggle("rotate-arrow");
    answer[b].classList.toggle("answer-Active");

    a = 0;
  } else {
    paragraph[b].classList.toggle("active");
    arrows[b].classList.toggle("rotate-arrow");
    answer[b].classList.toggle("answer-Active");

    a = 1;
  }
};

for (let i = 0; i < answerBox.length; i++) {
  answerBox[i].addEventListener("click", () => {
    clickAnswerBox(i);
  });
}
