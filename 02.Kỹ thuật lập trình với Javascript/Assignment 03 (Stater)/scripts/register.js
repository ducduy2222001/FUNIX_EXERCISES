"use strict";

const firstNameInputEl = document.getElementById("input-firstname");
const lastNameInputEl = document.getElementById("input-lastname");
const usernameInputEl = document.getElementById("input-username");
const passInputEl = document.getElementById("input-password");
const passConfirmInputEl = document.getElementById("input-password-confirm");
const submitBtnEl = document.getElementById("btn-submit");

submitBtnEl.addEventListener("click", () => {
  const user = new User(
    firstNameInputEl.value,
    lastNameInputEl.value,
    usernameInputEl.value,
    passInputEl.value
  );

  const isValidate = validateData(user, passConfirmInputEl);
  if (isValidate) {
    // add vào mảng userArr

    userArr.push(user);

    // thông báo đăng kí thành công
    alert("Đăng kí thành công");
    // lưu dữ liệu vào localstorage
    saveToStorage(KEY, userArr);
    // chuyển trang đến login
    window.location.href = "../pages/login.html";
  }
});

//xử lí xác thực data nhập vào
const validateData = (user, passConfirmInputEl) => {
  if (!user.firstname || !user.lastname || !user.username) {
    alert("Không có trường nào bị bỏ trống !");
    return false;
  }

  if (passConfirmInputEl.value.length < 8 && user.password.length < 8) {
    alert("Password phải có nhiều hơn 8 ký tự !");
    return false;
  }

  if (passConfirmInputEl.value !== user.password) {
    alert("Password và Confirm Password phải giống nhau !");
    return false;
  }

  if (!duplicateCheck(user.username)) {
    alert(
      "Username không được trùng với Username của các người dùng trước đó !"
    );
    return false;
  }

  return true;
};

// xử lí trùng
const duplicateCheck = (usn) => {
  return userArr.every((item) => item.username !== usn);
};
