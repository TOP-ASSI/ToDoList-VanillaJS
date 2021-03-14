const clockContainer = document.querySelector(".js_clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  console.log(clockContainer, clockTitle);
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}
init();
