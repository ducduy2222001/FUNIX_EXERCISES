"use strict";

//các element
const usernameInputEl = document.getElementById("input-username");
const passwordInputEl = document.getElementById("input-password");
const submitBtnEl = document.getElementById("btn-submit");

//xử lí btn submit
submitBtnEl.addEventListener("click", () => {
  //
  const isValidate = validateData();
  if (isValidate) {
    //tìm kiếm user theo điều kiện
    const user = userArr.find(
      (item) =>
        item.username === usernameInputEl.value &&
        item.password === passwordInputEl.value
    );

    // nếu user có thì tiếp tục
    if (user) {
      alert("Đăng nhập thành công");
      saveToStorage("currentUser", user);
      window.location.href = "../index.html";
    } else {
      alert("Đăng nhập thất bại");
    }
  }
});

//xác thực data nhập
const validateData = () => {
  if (usernameInputEl.value === "" || passwordInputEl.value === "") {
    alert("Vui lòng nhập username và password đầy đủ !");
    return false;
  }
  return true;
};
