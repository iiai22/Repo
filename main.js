const play = document.querySelector('.play');
const playDisplay = document.querySelector('.fa-play');
const pauseDisplay = document.querySelector('.fa-pause');

const nameM = document.querySelector('.name');
const profM = document.querySelector('.prof');
const countryM = document.querySelector('.country');

play.addEventListener('click', function () {
  if (pauseDisplay.style.display == 'none') {
    playDisplay.style.display = 'none';
    pauseDisplay.style.display = 'inline';

    nameM.style.animation = 'mainAnimation 16s linear infinite';
    profM.style.animation = 'mainAnimation 15.5s linear infinite';
    countryM.style.animation = 'mainAnimation 15s linear infinite';
  } else {
    playDisplay.style.display = 'inline';
    pauseDisplay.style.display = 'none';

    nameM.style.animation = '';
    profM.style.animation = '';
    countryM.style.animation = '';
  }
});
