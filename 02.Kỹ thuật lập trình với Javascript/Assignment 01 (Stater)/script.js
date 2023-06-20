"use strict";

// Lấy các  Element
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tablebodyEL = document.getElementById("tbody");
const bmiEl = document.querySelector(".BMI");
const btnDeleteEl = document.querySelector(".btn-danger");
const btnHealthyEL = document.getElementById("healthy-btn");
const btnCalBMI = document.getElementById("calBMI-btn");
//create array container animals
let petArr = [];

// Bắt sự kiện khi người dùng nhấn vào nút Submit.
submitBtn.addEventListener("click", function () {
  const data = {
    id: idInput.value,
    age: parseInt(ageInput.value),
    name: nameInput.value,
    type: typeInput.value,
    weight: parseFloat(weightInput.value),
    length: parseFloat(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    bmi: "?",
    date: new Date(),
  };
  // Xác thực dữ liệu nhập vào đúng với điều kiện
  function validateData(data) {
    let isValidata = true;
    if (data.id.trim() === "") {
      alert("Please input for id");
      isValidata = false;
    }

    if (isNaN(data.age)) {
      alert("Please input for age");
      isValidata = false;
    }

    if (data.name.trim() === "") {
      alert("Please input for name");
      isValidata = false;
    }

    if (isNaN(data.weight)) {
      alert("Please input for weight");
      isValidata = false;
    }

    if (isNaN(data.length)) {
      alert("Please input for length");
      isValidata = false;
    }

    if (data.breed === "Select Breed") {
      alert("Please select Breed!");
      isValidata = false;
    }

    if (data.type === "Select Type") {
      alert("Please select Type!");
      isValidata = false;
    }

    if (!idCheck(data.id)) {
      alert("ID must be unique!");
      isValidata = false;
    }

    if (!checkBetweenAnd(data.age, 1, 15)) {
      alert("Age must be between 1 and 15!");
      isValidata = false;
    }

    if (!checkBetweenAnd(data.weight, 1, 15)) {
      alert("Weight must be between 1 and 15!");
      isValidata = false;
    }

    if (!checkBetweenAnd(data.length, 1, 100)) {
      alert("Length must be between 1 and 100!");
      isValidata = false;
    }

    return isValidata;
  }

  const validate = validateData(data);
  if (validate) {
    // add data vào mảng
    petArr.push(data);
    // clear data sau khi submit
    // clearInput();
    // render data ra màn hình
    renderTableData(petArr);
  }
});

// chức năng render data ra màn hình
function renderTableData(petArr) {
  tablebodyEL.textContent = "";

  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `<th scope="row">${petArr[i].id}</th>
    <td>${petArr[i].name}</td>
    <td>${petArr[i].age}</td>
    <td>${petArr[i].type}</td>
    <td>${petArr[i].weight} kg</td>
    <td>${petArr[i].length} cm</td>
    <td>${petArr[i].breed}</td>
    <td>
      <i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
    </td>
    <td><i class="bi ${
      petArr[i].vaccinated ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
    <td><i class="bi ${
      petArr[i].dewormed ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
    <td><i class="bi ${
      petArr[i].sterilized ? "bi-check-circle-fill" : "bi-x-circle-fill"
    }"></i></td>
    <td class="BMI">${petArr[i].bmi}</td>
    <td>${petArr[i].date.getDate()}/${petArr[i].date.getMonth() + 1}/${petArr[
      i
    ].date.getFullYear()}</td>
    <td>
    <button class="btn btn-danger" onclick="deletePet('${
      petArr[i].id
    }')">Delete</button>
    </td>
    `;

    tablebodyEL.appendChild(row);

    console.log(petArr[0]);
  }
}

// 	Xóa các dữ liệu vừa nhập trên Form
const clearInput = () => {
  (idInput.value = ""),
    (ageInput.value = ""),
    (nameInput.value = ""),
    (weightInput.value = ""),
    (lengthInput.value = ""),
    (colorInput.value = "#000000"),
    (typeInput.value = "Select Type"),
    (breedInput.value = "Select Breed"),
    (vaccinatedInput.checked = false),
    (dewormedInput.checked = false),
    (sterilizedInput.checked = false);
};

// chức năng delete pet
const deletePet = (petId) => {
  if (confirm("Are you sure?")) {
    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].id == petId) {
        petArr.splice(i, 1);
      }
    }
  }
  renderTableData(petArr);
};

// chức năng check trùng lặp id
const idCheck = (id) => {
  return petArr.every((pet) => pet.id !== id);
};

// Check age, weight, length
const checkBetweenAnd = (values, start, end) => {
  if (values < start || values > end) {
    return false;
  }
  return true;
};

// Check healthy of pet
let healthyCheck = true;

// Chức năng: Hiển thị các thú cưng khỏe mạnh
btnHealthyEL.addEventListener("click", function () {
  if (healthyCheck === true) {
    let healthyPetArr = [];
    for (let i = 0; i < petArr.length; i++) {
      if (petArr[i].vaccinated && petArr[i].dewormed && petArr[i].sterilized) {
        healthyPetArr.push(petArr[i]);
      }
    }
    renderTableData(healthyPetArr);
    btnHealthyEL.textContent = "Show All Pet";
    healthyCheck = false;
  } else {
    renderTableData(petArr);
    btnHealthyEL.textContent = "Show Healthy Pet";
    healthyCheck = true;
  }
});

// Nâng cao tính toán chỉ số BMI
//---------Cách 1:
btnCalBMI.addEventListener("click", function () {
  for (let i = 0; i < petArr.length; i++) {
    petArr[i].bmi =
      petArr[i].type === "Dog"
        ? ((petArr[i].weight * 703) / petArr[i].length ** 2).toFixed(2)
        : ((petArr[i].weight * 886) / petArr[i].length ** 2).toFixed(2);
  }
  renderTableData(petArr);
});

//--------Cách 2:
// btnCalBMI.addEventListener("click", function () {
//   for (let i = 0; i < petArr.length; i++) {
//     if (petArr[i].type === "Dog") {
//       petArr[i].bmi = (
//         (petArr[i].weight * 703) /
//         petArr[i].length ** 2
//       ).toFixed(2);
//     } else if (petArr[i].type === "Cat") {
//       petArr[i].bmi = (
//         (petArr[i].weight * 886) /
//         petArr[i].length ** 2
//       ).toFixed(2);
//     }
//   }
//   renderTableData(petArr);
// });
