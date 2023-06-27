"use strict";

const btnSave = document.getElementById("btn-submit");
const categoryEl = document.getElementById("input-category");
const pageSizeEl = document.getElementById("input-page-size");

if (currentUser) {
  //handler btn save setting
  btnSave.addEventListener("click", () => {
    const isValidate = validateData();
    if (isValidate) {
      currentUser.category = categoryEl.value.toLowerCase();
      currentUser.pageSize = Number.parseInt(pageSizeEl.value);
      saveToStorage("currentUser", currentUser);

      const index = userArr.findIndex(
        (userItem) => userItem.username === currentUser.username
      );
      userArr[index] = currentUser;
      saveToStorage(KEY, userArr);
      alert("Setting thành công!");

      categoryEl.value = "General";
      pageSizeEl.value = "";
    }
  });

  // add atribute min =1
  pageSizeEl.setAttribute("min", 1);

  // xác thực data
  const validateData = () => {
    if (
      pageSizeEl.value === "" ||
      categoryEl.value.toLowerCase() === "general"
    ) {
      alert("Không có trường nào bị bỏ trống !");
      return false;
    }
    return true;
  };
} else {
  alert("Vui lòng đăng nhập hoặc đăng kí tài khoản");
  window.location.href = "../index.html";
}
