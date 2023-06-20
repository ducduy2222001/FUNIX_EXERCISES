"use strict";

//take element
const formEl = document.getElementById("container-form");

//function render data
function renderTableData(petArr) {
  tablebodyEL.textContent = "";

  for (let i = 0; i < petArr.length; i++) {
    const row = document.createElement("tr");
    const currentDate = new Date(petArr[i].date);
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
     <td>${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}</td> 
    <td> 
    <button class="btn btn-warning" onclick="startEditPet('${
      petArr[i].id
    }')">Edit</button>
    </td>
    `;

    tablebodyEL.appendChild(row);
  }
}

//handler edit pet
function startEditPet(petId) {
  formEl.classList.remove("hide");
  const petEdit = petArr.find((pet) => pet.id === petId);
  idInput.value = petId;
  nameInput.value = petEdit.name;
  ageInput.value = petEdit.age;
  typeInput.value = petEdit.type;
  weightInput.value = petEdit.weight;
  lengthInput.value = petEdit.length;
  colorInput.value = petEdit.color;
  vaccinatedInput.checked = petEdit.vaccinated;
  dewormedInput.checked = petEdit.dewormed;
  sterilizedInput.checked = petEdit.sterilized;

  // render data breed after choose type
  renderBreed();
  // infor breed to show
  breedInput.value = `${petEdit.breed}`;
}

typeInput.addEventListener("change", renderBreed);

// render data breed after choose type
function renderBreed() {
  const typeChoose = typeInput.value;
  breedInput.innerHTML = "<option>Select Breed</option>";
  const typeOfBreed = breedArr.filter((bre) => bre.type === typeChoose);
  for (let i = 0; i < typeOfBreed.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = `
      <option>${typeOfBreed[i].breed}</option>`;
    breedInput.appendChild(option);
  }
}

//handler btn submit
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

  //check validata with if
  function validateData(data) {
    let isValidata = true;

    if (data.name.trim() === "") {
      alert("Please input for name");
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

    if (!checkBetweenAnd(data.age, 1, 15)) {
      alert("Please check input for age and age must be between 1 and 15!");
      isValidata = false;
    }

    if (!checkBetweenAnd(data.weight, 1, 15)) {
      alert("Please input for weight and weight must be between 1 and 15!");
      isValidata = false;
    }

    if (!checkBetweenAnd(data.length, 1, 100)) {
      alert("Please input for length and length must be between 1 and 100!");
      isValidata = false;
    }

    return isValidata;
  }

  const validate = validateData(data);
  if (validate) {
    // take position index of pet
    const index = petArr.findIndex((pet) => pet.id === data.id);
    data.date = petArr[index].date;
    // change data pet
    petArr[index] = data;
    //save data to localStorage
    saveToStorage("petArr", JSON.stringify(petArr));
    //add class: hide
    formEl.classList.add("hide");
    // render data ra màn hình
    renderTableData(petArr);
  }
});

// Check age, weight, length
const checkBetweenAnd = (value, start, end) => {
  if (isNaN(value) || value < start || value > end) {
    return false;
  }
  return true;
};

//render data
renderTableData(petArr);
