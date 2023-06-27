"use strict";

const KEY = "USER_ARRAY";

function getFromStorage(KEY) {
  return JSON.parse(localStorage.getItem(KEY));
}

function saveToStorage(KEY, value) {
  localStorage.setItem(KEY, JSON.stringify(value));
}

//take data from localstorage
const users = getFromStorage(KEY) ?? [];

const userArr = users.map((user) => parseUser(user));

//current user
const currentUser = getFromStorage("currentUser")
  ? parseUser(getFromStorage("currentUser"))
  : null;

/*Lưu ý: Do khi lưu xuống LocalStorage, bạn chỉ có thể lưu được các JS Object chứ không phải Class Instance 
(chỉ lưu được các thuộc tính chứ các hàm trong class đó sẽ không lưu được). Bạn sẽ cần viết một hàm để chuyển 
từ JS Object sang Class Instance như sau:*/
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    //update thêm thuộc tính
    userData.category,
    userData.pageSize
  );

  return user;
}
//To do list
const tasks = getFromStorage("arrTodoList") ?? [];

const taskArr = tasks.map((task) => parseTodoList(task));

function parseTodoList(taskData) {
  const task = new TodoList(taskData.task, taskData.owner, taskData.isDone);
  return task;
}

// API key
const apiKey = "ac65b34019474836ab040cbc2be709cc";
