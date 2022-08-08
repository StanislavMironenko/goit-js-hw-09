const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click',stopColor)


let isActive = false;
let intervalID = null;
   function  start()  {
                
         intervalID = setInterval(() => {
            const color = getRandomHexColor();
             document.body.style.backgroundColor = color;
             refs.startBtn.setAttribute('disabled', true);
          
        }
        ,1000)        
};
    
 function    stopColor() {
       clearInterval(intervalID)          
       refs.startBtn.removeAttribute('disabled');
    }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
