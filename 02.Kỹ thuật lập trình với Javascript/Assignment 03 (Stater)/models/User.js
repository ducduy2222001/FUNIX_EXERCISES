"use strict";
//class user
class User {
  constructor(
    firstname,
    lastname,
    username,
    password,
    category = "business",
    pageSize = "5"
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    //update thêm thuộc tính
    this.category = category;
    this.pageSize = pageSize;
  }
}

//class todo list
class TodoList {
  constructor(task, owner, isDone) {
    this.task = task;
    this.owner = owner;
    this.isDone = isDone;
  }
}
