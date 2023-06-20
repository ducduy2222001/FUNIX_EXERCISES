"use strict";

//take elements
const importBtnEl = document.getElementById("import-btn");
const exportBtnEl = document.getElementById("export-btn");
const fileInput = document.getElementById("input-file");

// handler click export data
exportBtnEl.addEventListener("click", () => {
  const isExport = confirm("You make sure to export ?");
  if (isExport) {
    saveStaticDataToFile();
  }
});

// save data come to file
function saveStaticDataToFile() {
  var blob = new Blob([JSON.stringify(getFromStorage("petArr"), null, 2)], {
    type: "application/json",
  });
  saveAs(blob, "petData.json");
}

// handler click import data
importBtnEl.addEventListener("click", () => {
  if (!fileInput.value) {
    alert("Please choose file !");
  } else {
    const isImport = confirm("You sure import file ?");
    if (isImport) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      //handler event data from up file
      reader.addEventListener(
        "load",
        () => {
          const isValidataFile = checkFile(JSON.parse(reader.result));
          if (isValidataFile) {
            //save data
            saveToStorage(keyPetArr, JSON.parse(reader.result));
            //Notifi complete
            alert("Import complete!");
          }
        },
        false
      );

      // read file
      if (file) {
        reader.readAsText(file);
      }

      //reset file input
      fileInput.value = "";
    }
  }
});

//check structor of file
function checkFile(data) {
  //check data iss array?
  if (!data instanceof Array) {
    alert("Invalid file, file is not array container object !");
    return false;
  }
  //check element is object ?
  if (!isPetObject(data)) {
    return false;
  }
  //check data inside object is correct data
  if (isValidata(data) === false) {
    return false;
  }

  return true;
}

// function check element is object
function isPetObject(data) {
  let datas = JSON.parse(data);
  if (!datas.every((item) => item instanceof Object)) {
    alert("Invalid file: element in array is not Object!");
    return false;
  }
  //if it have 13 attribute is return true
  const isOk = datas.every((item) => {
    return (
      Object.keys(item).length === 13 &&
      item.hasOwnProperty("id") &&
      item.hasOwnProperty("name") &&
      item.hasOwnProperty("age") &&
      item.hasOwnProperty("type") &&
      item.hasOwnProperty("weight") &&
      item.hasOwnProperty("length") &&
      item.hasOwnProperty("color") &&
      item.hasOwnProperty("breed") &&
      item.hasOwnProperty("vaccinated") &&
      item.hasOwnProperty("dewormed") &&
      item.hasOwnProperty("sterilized") &&
      item.hasOwnProperty("bmi") &&
      item.hasOwnProperty("date")
    );
  });
  if (!isOk) {
    alert("Invalid file: element in array is invalid!");
    return false;
  }
  return true;
}

// function check invalid of data
function isValidata(data) {
  let datas = JSON.parse(data);
  return datas.every((pet) => {
    if (!checkEnterValidata(pet.id)) {
      alert("Invalid file: file have Id invalid");
      return false;
    }

    if (!checkEnterValidata(pet.name)) {
      alert("Invalid file: file have Name invalid");
      return false;
    }

    if (!checkEnterValidata(pet.breed)) {
      alert("Invalid file: file have Breed invalid");
      return false;
    }

    if (!checkEnterValidata(pet.type)) {
      alert("Invalid file: file have Type invalid");
      return false;
    }

    if (!checkEnterValidata(pet.date)) {
      alert("Invalid file: file have Date invalid");
      return false;
    }

    if (!checkBetweenAnd(pet.age, 1, 15)) {
      alert("Invalid file: file have age invalid");
      return false;
    }

    if (!checkBetweenAnd(pet.weight, 1, 15)) {
      alert("Invalid file: file have weight invalid");
      return false;
    }

    if (!checkBetweenAnd(pet.length, 1, 100)) {
      alert("Invalid file: file have length invalid");
      return false;
    }

    if (typeof pet.vaccinated !== "boolean") {
      alert("Invalid file: file have vaccinated invalid");
      return false;
    }

    if (typeof pet.dewormed !== "boolean") {
      alert("Invalid file: file have dewormed invalid");
      return false;
    }

    if (typeof pet.sterilized !== "boolean") {
      alert("Invalid file: file have sterilized invalid");
      return false;
    }
    //function check Id already exists
    idCheck();
    return true;
  });
}

// Check age, weight, length
const checkBetweenAnd = (value, start, end) => {
  if (isNaN(value) || value < start || value > end) {
    return false;
  }
  return true;
};

//Check name, breed, type, date
const checkEnterValidata = (value) => {
  if (value.trim().length === 0) return false;
  return true;
};

//check Id already exists
const idCheck = () => {
  let count = 1;
  for (let item of datas) {
    if (pet.id === item.id) {
      if (count > 1) {
        alert("Invalid file: Id already exists");
        return false;
      }
      count++;
    }
  }
};
