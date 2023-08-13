const playWrap = document.querySelector('.playWrap');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const playDisplay = document.querySelector('.fa-play');
const pauseDisplay = document.querySelector('.fa-pause');

const nameM = document.querySelector('.name');
const profM = document.querySelector('.prof');
const countryM = document.querySelector('.country');

playWrap.addEventListener('click', function () {
  if (pauseDisplay.style.display == 'none') {
    playDisplay.style.display = 'none';
    pauseDisplay.style.display = 'inline';

    play.style.display = 'none';
    pause.style.display = 'inline';

    nameM.style.animation = 'mainAnimation 16s linear infinite';
    profM.style.animation = 'mainAnimation 15.5s linear infinite';
    countryM.style.animation = 'mainAnimation 15s linear infinite';
  } else {
    playDisplay.style.display = 'inline';
    pauseDisplay.style.display = 'none';

    play.style.display = 'inline';
    pause.style.display = 'none';

    nameM.style.animation = '';
    profM.style.animation = '';
    countryM.style.animation = '';
  }
});
