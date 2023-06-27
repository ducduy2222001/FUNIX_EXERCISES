"use strict";

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeEL = document.getElementById("welcome-message");
const btnLogOut = document.getElementById("btn-logout");

showLogin();

// chức năng hiển thị phần login, register and logout
function showLogin() {
  // nếu currentUser trả về true (tức là có thì ẩn logout và register, hiện logout)
  if (currentUser) {
    loginModal.style.display = "none";
    mainContent.style.display = "block";
    //hiển thị welcome
    welcomeEL.textContent = `Welcome ${currentUser.firstname}`;
  } else {
    //nếu currentUser trả về false (tức là có thì hiên logout và register, ẩn logout)
    loginModal.style.display = "block";
    mainContent.style.display = "none";
  }
}

//handler btn logout
btnLogOut.addEventListener("click", () => {
  // notifi are you sure logout?
  const isLogOut = confirm("Bạn chắc chắn muốn thoát không?");
  // nếu có thì thực thi lệnh
  if (isLogOut) {
    loginModal.style.display = "block";
    mainContent.style.display = "none";
    //lệnh xóa currentUser ở localstorage
    localStorage.removeItem("currentUser");
  }
});
