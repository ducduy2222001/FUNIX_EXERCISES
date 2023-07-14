"use strict";

const btnAdd = document.getElementById("btn-add");
const inputTaskEl = document.getElementById("input-task");
const ulEl = document.getElementById("todo-list");

// check user đã đăng nhập hay chưa
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

  //xử lí btn add enter
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

  // hiển thị data task
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

  // xử lí event toggle task
  function eventToggleTasks() {
    // lấy tất cả thẻ li trong id todo-list
    document.querySelectorAll("#todo-list li").forEach(function (liEl) {
      //thêm sk click cho từng li
      liEl.addEventListener("click", function (e) {
        // khi click vào li thì nó sẽ lấy li đó và so sánh
        if (e.target !== liEl.children[0]) {
          // add class checked
          liEl.classList.toggle("checked");
          //tìm task mà li click vào
          const todo = taskArr.find(
            (todoItem) =>
              todoItem.owner === currentUser.username &&
              todoItem.task === liEl.textContent.slice(0, -1)
          );
          // xử lí thêm class checked
          todo.isDone = liEl.classList.contains("checked") ? true : false;

          saveToStorage("arrTodoList", taskArr);
        }
      });
    });
  }

  // xử lí xóa mục task
  function eventDeleteTasks() {
    // lấy tất cả các class có tên close trong id todo-list
    document.querySelectorAll("#todo-list .close").forEach(function (closeEL) {
      closeEL.addEventListener("click", function () {
        const isDelele = confirm("Bạn chắc chắn có muốn xóa?");
        if (isDelele) {
          // tìm vị trí của task cần xóa
          const index = taskArr.findIndex(
            (item) =>
              item.owner === currentUser.username &&
              item.task === closeEL.parentElement.textContent.slice(0, -1)
          );
          // dùng splice để xóa task
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
