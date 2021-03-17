const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const USER_LS = "currentUser",
  SHOWING_CN = "show",
  HIDING_CN = "hide";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleOnSubmit(event) {
  event.preventDefault();
  const inputValue = input.value;
  saveName(inputValue);
  paintingGreeting(inputValue);
}

function askForName() {
  greeting.classList.add(HIDING_CN);
  form.classList.remove(HIDING_CN);
  form.addEventListener("submit", handleOnSubmit);
  input.focus();
}

function paintingGreeting(text) {
  if (!form.classList.contains(HIDING_CN)) form.classList.add(HIDING_CN);
  greeting.classList.remove(HIDING_CN);

  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if ([null, ""].indexOf(currentUser) !== -1) {
    askForName();
  } else {
    paintingGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
