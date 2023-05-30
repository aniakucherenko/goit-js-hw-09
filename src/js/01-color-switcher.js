const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', startBtnClick);

function startBtnClick() {
  timerId = setInterval(colorChanger, 1000);
  function colorChanger() {
    document.body.style.backgroundColor = getRandomHexColor();
  }
}

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
});
