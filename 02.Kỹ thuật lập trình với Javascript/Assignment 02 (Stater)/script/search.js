"use strict";

//always render data
renderTableData(petArr);

const btnFindEl = document.getElementById("find-btn");
btnFindEl.addEventListener("click", () => {
  let petArrFind = petArr;
  //search by id
  if (idInput.value) {
    petArrFind = petArrFind.filter((pet) =>
      pet.id.toLowerCase().includes(idInput.value)
    );
  }
  // search by name
  if (nameInput.value) {
    petArrFind = petArrFind.filter((pet) =>
      pet.name.toLowerCase().includes(nameInput.value)
    );
  }
  // search by type
  if (typeInput.value !== "Select Type") {
    petArrFind = petArrFind.filter((pet) => pet.type.includes(typeInput.value));
  }
  // search by breed
  if (breedInput.value !== "Select Breed") {
    petArrFind = petArrFind.filter((pet) =>
      pet.breed.includes(breedInput.value)
    );
  }
  // search by vaccinated
  if (vaccinatedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.vaccinated === true);
  }
  // search by dewormed
  if (dewormedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.dewormed === true);
  }
  // search by sterilized
  if (sterilizedInput.checked === true) {
    petArrFind = petArrFind.filter((pet) => pet.sterilized === true);
  }

  renderTableData(petArrFind);
});

// render table data on screen
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
    `;

    tablebodyEL.appendChild(row);
  }
}

// render all breed, no regardless of Dog or Cat.
function renderBreed() {
  breedInput.innerHTML = "<option>Select Breed</option>";
  for (let i = 0; i < breedArr.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = `
      <option>${breedArr[i].breed}</option>`;
    breedInput.appendChild(option);
  }
}
renderBreed();
