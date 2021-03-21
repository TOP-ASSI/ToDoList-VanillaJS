const toDoForm = document.querySelector(".js-toDoform"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOLIST_LS = "todolist";
let toDoArr = Array();

function saveTodo() {
  localStorage.setItem(TODOLIST_LS, JSON.stringify(toDoArr));
  console.log(localStorage.getItem(TODOLIST_LS));
}

function setToDoArr(id) {
  toDoArr = toDoArr.filter(function (item) {
    // console.log(item.id, id);
    return item.id !== Number(id);
  });
  saveTodo();
}

function handleOnClick(event) {
  const willRemoveLi = event.target.parentNode;
  setToDoArr(willRemoveLi.id);
  toDoList.removeChild(willRemoveLi);
}

function getNewId() {
  /** Add by joon */
  if (toDoArr.length === 0) return 1;

  const _idArr = toDoArr.reduce(function (pre, item, i) {
    return pre.concat(item.id);
  }, Array());

  const _candidateIdArr = toDoArr.reduce(function (pre, row, i) {
    const newId = i + 1;
    if (_idArr.indexOf(newId) === -1) pre.push(newId);
    return pre;
  }, Array());

  console.log(_candidateIdArr);

  const id =
    _candidateIdArr.length === 0
      ? toDoArr.length + 1
      : _candidateIdArr.reduce(function (pre, cur) {
          return pre > cur ? cur : pre;
        });
  return id;
}

function paintTodos(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");

  const newId = getNewId(); /** Modify by joon */

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleOnClick);
  span.innerText = text;
  li.id = newId;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);

  toDoArr.push({
    id: newId,
    text,
  });

  saveTodo();
}

function handleOnSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodos(currentValue);
  toDoInput.value = "";
}

function initInput() {
  toDoForm.addEventListener("submit", handleOnSubmit);
}

function loadToDoList() {
  const loadedToDos = localStorage.getItem(TODOLIST_LS);
  console.log(loadedToDos);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (item) {
      paintTodos(item.text);
    });
  }
}

function init() {
  loadToDoList();
  initInput();
}

init();
