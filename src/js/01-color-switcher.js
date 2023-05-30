const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const backEl = document.querySelector('p');
const div = document.querySelector('div');
let timerId = null;

body.style.display = 'flex';
body.style.textAlign = 'center';
body.style.alignItems = 'center';
body.style.paddingTop = '40px';
div.style.margin = '0 auto';
backEl.style.position = 'absolute';
backEl.style.top = '10px';
backEl.style.left = '20px';
startBtn.style.padding = '10px';
startBtn.style.fontSize = '100px';
startBtn.style.borderRadius = '12px';
startBtn.style.marginRight = '50px';
stopBtn.style.padding = '10px';
stopBtn.style.fontSize = '100px';
stopBtn.style.borderRadius = '12px';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', startBtnClick);

function startBtnClick() {
  timerId = setInterval(colorChanger, 1000);
  function colorChanger() {
    body.style.backgroundColor = getRandomHexColor();
  }
}

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});
