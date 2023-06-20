'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnOpenModal = document.querySelectorAll('.show-modal');
let btnCloseModal = document.querySelector('.close-modal');

let openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
