"use strict";

const btnAdd = document.getElementById("btn-add");
const inputTaskEl = document.getElementById("input-task");
const ulEl = document.getElementById("todo-list");

if (currentUser) {
  displayTodoList();
  btnAdd.addEventListener("click", () => {
    if (inputTaskEl.value.length === 0) {
      alert("Vui lòng nhập task");
    } else {
      const tasks = new TodoList(
        inputTaskEl.value,
        currentUser.username,
        false
      );
      taskArr.push(tasks);
      saveToStorage("arrTodoList", taskArr);
      displayTodoList();
      inputTaskEl.value = "";
    }
  });

  //xử lí btn search enter
  inputTaskEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputTaskEl.value.length === 0) {
        alert("Vui lòng nhập task");
      } else {
        const tasks = new TodoList(
          inputTaskEl.value,
          currentUser.username,
          false
        );
        taskArr.push(tasks);
        saveToStorage("arrTodoList", taskArr);
        displayTodoList();
        inputTaskEl.value = "";
      }
    }
  });

  function displayTodoList() {
    ulEl.innerHTML = "";
    taskArr
      .filter((todo) => todo.owner === currentUser.username)
      .forEach((element) => {
        ulEl.innerHTML += `<li class=${element.isDone ? "checked" : ""}>${
          element.task
        }<span class="close">×</span></li>`;
      });

    eventToggleTasks();
    eventDeleteTasks();
  }

  function eventToggleTasks() {
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      liEl.addEventListener("click", function (e) {
        if (e.target !== liEl.children[0]) {
          liEl.classList.toggle("checked");
          const todo = taskArr.find(
            (todoItem) =>
              todoItem.owner === currentUser.username &&
              todoItem.task === liEl.textContent.slice(0, -1)
          );
          todo.isDone = liEl.classList.contains("checked") ? true : false;
          saveToStorage("arrTodoList", taskArr);
        }
      });
    });
  }

  function eventDeleteTasks() {
    document.querySelectorAll("#todo-list .close").forEach(function (closeEL) {
      closeEL.addEventListener("click", function () {
        const isDelele = confirm("Bạn chắc chắn có muốn xóa?");
        if (isDelele) {
          const index = taskArr.findIndex(
            (item) =>
              item.owner === currentUser.username &&
              item.task === closeEL.parentElement.textContent.slice(0, -1)
          );
          taskArr.splice(index, 1);
          saveToStorage("arrTodoList", taskArr);
          displayTodoList();
        }
      });
    });
  }
} else {
  alert("Vui lòng đăng nhập hoặc đăng kí tài khoản");
  window.location.href = "../index.html";
}
