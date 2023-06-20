'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// function báo cáo message win,lost, to high, to low dùng lại function nhiều lần
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Xử lí check số
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    displayMessage('Please Enter a Number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';

    // Nếu score cao hơn điểm highscore thì gán điểm cho highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //Nếu đoán số nó khác số đoán
  else if (guess !== secretNumber) {
    // số lớn hơn thì nó báo to high còn ngược lại to low
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'To high!' : 'To low!');
      // và trừ điển score đi
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Nếu score <0 thì nó báo cáo thua
    else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Function agin

document.querySelector('.again').addEventListener('click', function () {
  // reset lại ban đầu
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
