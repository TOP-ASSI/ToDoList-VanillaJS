const body = document.querySelector("body");

const IMG_NUMBER = 8;

function genRandom() {
  const number = Math.floor(Math.random() * 8);
  return number;
}

// function handleOnImgLoad(image) {
//   console.log("finished loading");
//   body.prepend(image); //3
// }

function paintImg() {
  const imgNumber = genRandom();
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  // body.appendChild(image); //1
  body.prepend(image); //2

  // image.addEventListener("loadend", handleOnImgLoad);
  // image.addEventListener("load", handleOnImgLoad(image)); //3
}

function init() {
  paintImg();
}

init();
