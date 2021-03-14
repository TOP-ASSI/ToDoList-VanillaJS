/** 실전 */

// const title = document.querySelector("#title");
const title = document.querySelector(".btn");

const CLICKED_CLASS = "clicked";

function handleOnClick() {
  // const isClicked = title.classList.contains(CLICKED_CLASS);
  // if (!isClicked) {
  //   title.classList.add(CLICKED_CLASS);
  // } else {
  //   title.classList.remove(CLICKED_CLASS);
  // }
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleOnClick);
}
init();

/** control html and css */
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(255, 255, 255)";
// const RED_COLOR = "rgb(0, 255, 0)";

// function handleOnClick(event) {
//   // console.log(title.style.color, BASE_COLOR);

//   if (title.style.color === BASE_COLOR) {
//     title.style.color = RED_COLOR;
//   } else {
//     title.style.color = BASE_COLOR;
//   }
// }

// function init() {
//   title.style.color = BASE_COLOR;
//   // title.addEventListener("click", handleOnClick);
//   title.addEventListener("mouseenter", handleOnClick);
// }
// init();

// //test : 20210314 safari 에서는 동작 안함. chrome에서 동작 확인.
// function handleOnOnline() {
//   console.log("Hello!!");
// }

// function handleOnOffline() {
//   console.log("ByeBye!!");
// }

// window.addEventListener("online", handleOnOnline);
// window.addEventListener("offline", handleOnOffline);

/** helloworld */
// alert("Im Working. Im JS. Im Beautiful. Im worth it");
// console.log("Im Working. Im JS. Im Beautiful. Im worth it");
