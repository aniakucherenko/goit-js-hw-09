import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const picker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');
const timer = document.querySelector('.timer');
// timer.style.display = 'flex';
// timer.style.gap = '20px';
// timer.style.marginTop = '30px';
// timer.style.fontSize = '20px';

startBtn.disabled = true;
let intervalId = null;
let startTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) {
      startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
      return;
    }

    startBtn.disabled = false;
    startTime = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
  picker.disabled = true;

  intervalId = setInterval(() => {
    const currentTime = new Date();
    const timerTime = startTime - currentTime;
    const { days, hours, minutes, seconds } = convertMs(timerTime);

    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;

    if (timerTime <= 1000) {
      clearInterval(intervalId);
      Notify.success('Countdown finished');
      picker.disabled = false;
    }
  }, 1000);
  startBtn.disabled = true;
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
