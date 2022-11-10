const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

buttonStart.addEventListener('click', timerId)

timerId = setInterval(changeBodyColor,1000)

function changeBodyColor () {
  document.body.style.backgroundColor = getRandomHexColor();
}

buttonStop.addEventListener('click', () => {
clearInterval(timerId);
})


