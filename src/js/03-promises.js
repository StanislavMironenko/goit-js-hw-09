import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  firstDelayInput: document.querySelector('[name="delay"]'),
  delayStepInput: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};
let values = {};


refs.form.addEventListener('input', inputValues);
refs.form.addEventListener('submit', onSubmitBtnClick);

function createPromise(position, delay) {
 return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
 
}

function inputValues(e) {
  values[e.target.name] = e.target.value;
  console.log(values);
}

function onSubmitBtnClick(e) {
  e.preventDefault();
  start(values);
  
}

function start({ delay, step, amount }) {
  let position = 0;
  for (i = 0; i < amount; i += 1) {
    position += 1;
    createPromise(position, delay)
      .then(resolve => {
        Notiflix.Notify.success(resolve);
      })
      .catch(error => {
        Notiflix.Notify.failure(error);
      });
    delay = Number(delay) + Number(step);
  }
}
