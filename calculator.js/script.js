// console.log(screen);

const btn1 = document.querySelectorAll(".cal-btn");
const arr = [...btn1];
let value = "";
const  screen = document.querySelector('.screen');

arr.forEach((btn) => {
   
    btn.addEventListener("click", (e) => {

        let x = e.target;
        if (x.innerText == '=') {
            value = eval(value);
            // console.log(value);
            screen.innerHTML = value;
        }
        else if (x.innerText == 'AC') {
            screen.innerHTML = " ";
            value = " ";
        }
        else if (x.innerText == 'clear') {
            screen.innerText = value;
            value = slice(0,-1).join('');
            // console.log(value);
        }
        else{
            value = value + x.innerText;
            // console.log(value);
            screen.innerText = value;

        }
    });
});
