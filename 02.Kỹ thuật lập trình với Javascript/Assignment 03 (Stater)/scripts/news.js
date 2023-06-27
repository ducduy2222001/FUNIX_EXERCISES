"use strict";

const newContainerEL = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");

if (currentUser) {
  getData("us", 1);
  // hàm xử lí lấy dữ liệu từ api thông báo các lỗi khi không fetch dc
  async function getData(country, page) {
    try {
      const res = await fetch(
        `
        https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${currentUser.pageSize}&category=${currentUser.category}&page=${page}&apiKey=${apiKey}`
      );
      const datas = await res.json();

      // khi trạng thái lỗi và request quá nhiều lần
      if (datas.status == "error" && datas.code === "rateLimited") {
        throw new Error(datas.message);
      }

      // Khi lỗi api không được phép
      if (datas.code === "corsNotAllowed") {
        throw new Error(datas.message);
      }

      displayNews(datas);
    } catch (err) {
      alert(err.message);
    }
  }

  //handler kiểm tra btn prev
  const checkBtnPrev = () => {
    btnPrev.style.display = Number(pageNum.textContent) <= 1 ? "none" : "block";
  };

  //handler kiểm tra btn next
  const checkBtnNext = (datas) => {
    const totalResult = datas.totalResults;
    btnNext.style.display =
      Number(pageNum.textContent) ===
      Number(Math.ceil(totalResult / currentUser.pageSize))
        ? "none"
        : "block";
  };

  //handler btn next
  btnNext.addEventListener("click", () => {
    getData("us", ++pageNum.textContent);
  });

  //handler btn prev
  btnPrev.addEventListener("click", () => {
    getData("us", --pageNum.textContent);
  });

  // handler show data news
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
