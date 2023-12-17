import "./scss/styles.scss";
import "normalize.css";

const data = [
  {
    img: "/images/image-tanya.jpg",
    name: "Tanya Sinclair",
    job: "UX Engineer",
    text: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  },
  {
    img: "/images/image-john.jpg",
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    text: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  },
];

const prev = document.getElementsByClassName("button-prev")[0];
const next = document.getElementsByClassName("button-next")[0];

const person__img = document.getElementsByClassName("person__img")[0];
const user = document.getElementsByClassName("user")[0];
const text = document.getElementsByClassName("user__text")[0];
const user__name = document.getElementsByClassName("user__name")[0];
const job = document.getElementsByClassName("user__job")[0];

const changePrev = () => {
  startAnimate();
  if (cont > 0) {
    cont--;
    person__img.src = data[cont].img;
    text.innerText = data[cont].text;
    user__name.innerText = data[cont].name;
    job.innerText = data[cont].job;
  } else {
    cont = data.length - 1;
    person__img.src = data[cont].img;
    text.innerText = data[cont].text;
    user__name.innerText = data[cont].name;
    job.innerText = data[cont].job;
  }
};

const changeNext = () => {
  startAnimate();
  if (cont < data.length - 1) {
    cont++;
    person__img.src = data[cont].img;
    text.innerText = data[cont].text;
    user__name.innerText = data[cont].name;
    job.innerText = data[cont].job;
  } else {
    cont = 0;
    person__img.src = data[cont].img;
    text.innerText = data[cont].text;
    user__name.innerText = data[cont].name;
    job.innerText = data[cont].job;
  }
};

const startAnimate = () => {
  user.classList.add("animate__animated", "animate__bounceIn");
  person__img.classList.add("animate__animated", "animate__pulse");
};

const endAnimate = () => {
  user.classList.remove("animate__animated", "animate__bounceIn");
  person__img.classList.remove("animate__animated", "animate__pulse");
};

let cont = 0;

prev.addEventListener("click", () => {
  changePrev();
  setTimeout(endAnimate, 1000);
});

next.addEventListener("click", () => {
  changeNext();
  setTimeout(endAnimate, 1000);
});
