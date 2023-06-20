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

// key data
const keyPetArr = "petArr";
const keyBreedArr = "breedArr";

//create array container animals
let petArr = JSON.parse(getFromStorage(keyPetArr)) ?? [];

//create array container breed of animals
let breedArr = JSON.parse(getFromStorage(keyBreedArr)) ?? [];

// Click slidebar to Hidden or Show slidebar
const slideBar = document.querySelector(".active");
slideBar.addEventListener("click", () => {
  slideBar.classList.toggle("active");
});

function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}

function getFromStorage(key) {
  return localStorage.getItem(key);
}
