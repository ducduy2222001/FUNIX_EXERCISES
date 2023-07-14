"use strict";

const inputSearchEl = document.getElementById("input-query");
const newContainerEL = document.getElementById("news-container");
const btnSearch = document.getElementById("btn-submit");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");
const navPageNum = document.getElementById("nav-page-num");

// check user đã đăng nhập hay chưa
if (currentUser) {
  let keywords = "";
  navPageNum.style.display = "none";

  // hàm xử lí lấy data từ api
  async function getData(keySearch, page) {
    try {
      const res = await fetch(
        `
        https://newsapi.org/v2/everything?q=${keySearch}&page=${page}&pageSize=${currentUser.pageSize}&apiKey=${apiKey}`
      );

      const datas = await res.json();

      if (datas.status == "error" && datas.code === "rateLimited") {
        navPageNum.style.display = "none";
        throw new Error(datas.message);
      }

      if (datas.totalResults === 0) {
        navPageNum.style.display = "none";
        throw new Error(
          "Không có bài nào phù hợp với từ khóa bạn tìm kiếm, thử lại bằng cách nhập từ mới !"
        );
      }

      if (datas.code === "corsNotAllowed") {
        throw new Error(datas.message);
      }

      // ẩn hiển navpagenum
      navPageNum.style.display = "block";
      displayNews(datas);
    } catch (err) {
      alert(err.message);
    }
  }

  //xử lí check btn prev
  const checkBtnPrev = () => {
    btnPrev.style.display = Number(pageNum.textContent) <= 1 ? "none" : "block";
  };

  //xử lí check btn next
  const checkBtnNext = (datas) => {
    const totalResult = datas.totalResults;
    btnNext.style.display =
      Number(pageNum.textContent) ===
      Number(Math.ceil(totalResult / currentUser.pageSize))
        ? "none"
        : "block";
  };

  //xử lí btn search click
  btnSearch.addEventListener("click", () => {
    pageNum.textContent = "1";
    newContainerEL.innerHTML = "";
    if (inputSearchEl.value.trim().length === 0) {
      navPageNum.style.display = "none";
      alert("Vui lòng nhập từ khóa để tìm kiếm !");
    } else {
      keywords = inputSearchEl.value;
      getData(keywords, 1);
    }
  });

  //xử lí btn search enter
  inputSearchEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      pageNum.textContent = "1";
      newContainerEL.innerHTML = "";
      if (inputSearchEl.value.trim().length === 0) {
        navPageNum.style.display = "none";
        alert("Vui lòng nhập từ khóa để tìm kiếm !");
      } else {
        keywords = inputSearchEl.value;
        getData(keywords, 1);
      }
    }
  });

  // xử lí btn next
  btnNext.addEventListener("click", () => {
    getData(keywords, ++pageNum.textContent);
  });

  // xử lí btn prev
  btnPrev.addEventListener("click", () => {
    getData(keywords, --pageNum.textContent);
  });

  // handler show data after search
  const displayNews = (datas) => {
    checkBtnPrev();
    checkBtnNext(datas);
    newContainerEL.innerHTML = "";
    datas.articles.map((element) => {
      newContainerEL.innerHTML += `<div class="card flex-row flex-wrap">
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          src=${element.urlToImage}
          class="card-img"
          alt=${element.title}
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
          ${element.title}
          </h5>
          <p class="card-text">
          ${element.description}
          </p>
          <a
            href=${element.url}
            class="btn btn-primary"
            >View</a
          >
        </div>
      </div>
    </div>
  </div>
  </div>`;
    });
  };
} else {
  alert("Vui lòng đăng nhập hoặc đăng kí tài khoản");
  window.location.href = "../index.html";
}
