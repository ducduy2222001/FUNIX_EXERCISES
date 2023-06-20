"use strict";

// Envent click
submitBtn.addEventListener("click", () => {
  const data = {
    breed: breedInput.value,
    type: typeInput.value,
  };

  //check invalidata
  function validateData(data) {
    let isValidata = true;
    if (data.breed.trim() === "") {
      alert("Please input for breed");
      isValidata = false;
    }
    if (data.type === "Select Type") {
      alert("Please select a valid type");
      isValidata = false;
    }

    if (!checkDuplicate(data.breed)) {
      alert("Breed must be unique!");
      isValidata = false;
    }
    return isValidata;
  }

  const validate = validateData(data);
  console.log(validate);
  if (validate) {
    //add element first arr
    breedArr.unshift(data);
    //save data on locostorage
    saveToStorage(keyBreedArr, JSON.stringify(breedArr));
    //show data
    renderBreedTable(breedArr);
    // clear input after enter data
    clearInput();
  }
});

// check duplicate
const checkDuplicate = (breed) => {
  return breedArr.every((br) => br.breed !== breed);
};

// render table
function renderBreedTable(breedArr) {
  tablebodyEL.textContent = "";

  for (let i = 0; i < breedArr.length; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${breedArr.indexOf(breedArr[i]) + 1}</td>
    <td>${breedArr[i].breed}</td>
    <td>${breedArr[i].type}</td>
    <td> 
    <button class="btn btn-danger" onclick="deleteBreed('${breedArr.indexOf(
      breedArr[i]
    )}')">Delete</button>
    </td>
    `;
    tablebodyEL.appendChild(row);
  }
}

//-------------------Handler click btn-------------------

//delete breed
function deleteBreed(breedId) {
  if (confirm("Are you sure?")) {
    for (let i = 0; i < breedArr.length; i++) {
      if (breedArr.indexOf(breedArr[i]) == breedId) {
        breedArr.splice(i, 1);
      }
    }
  }
  saveToStorage(keyBreedArr, JSON.stringify(breedArr));
  renderBreedTable(breedArr);
}

//clear breed after submit
const clearInput = () => {
  breedInput.value = "";
  typeInput.value = "Select Type";
};

//always render data
renderBreedTable(breedArr);
