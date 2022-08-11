// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  startBtn: document.querySelector('button[data-start]'),
};
let intervalID = null;
let leftTime = null;

refs.startBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', onBtnStartClick);


const options = {
    enableTime: true,
   
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
         const currentTime = Date.now();
        leftTime = selectedDates[0].getTime() - currentTime;
        if (leftTime < 0) {
            Notiflix.Notify.failure('Please choose a date in the future');
            // window.alert('Please choose a date in the future');
            return
        }
        refs.startBtn.removeAttribute('disabled');
        console.log(selectedDates[0]);
        return leftTime;
      
  },
};

flatpickr("#datetime-picker", options);
function consolTime({ days, hours, minutes, seconds }) {
    refs.days.textContent = addLeadingZero(days);
    refs.hours.textContent = addLeadingZero(hours);
    refs.minutes.textContent =addLeadingZero (minutes);
    refs.seconds.textContent =addLeadingZero (seconds);

}

function addLeadingZero(value) {
    return String(value).padStart(2,'0')
}
function currentData() {
    if (leftTime <= 1000) {
        clearInterval(intervalID);
        return
  }
    leftTime -= 1000;
    const a=convertMs(leftTime);
    console.log(leftTime)
    console.log(convertMs(leftTime));
    consolTime(a);
}



function onBtnStartClick() {

   refs.startBtn.setAttribute('disabled', true);
     intervalID = setInterval(currentData, 1000);
    console.log('hello'); 

}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
