const clockContainer = document.querySelector(".js_clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const zfill = function (value) {
    return value < 10 ? `0${value}` : value;
  };
  clockTitle.innerText = `${zfill(hours)}:${zfill(minutes)}:${zfill(seconds)}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
