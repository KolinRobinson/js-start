'use strict';

function randomNumb(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}


let 
a = -5,
b = 5,
number = randomNumb(a, b),
btn = document.querySelector('#btn_check'),
userNum = document.querySelector('#user_num'),
info = document.querySelector("#text_info");

console.log(number);

btn.addEventListener('click', function(){
    if (userNum.value == number ){
        alert('Пабедааааа');
        location.reload();
    } else if(userNum.value >= -5 && userNum.value <= 5) {
        
        info.innerText = 'не угадали';
    } else {
        info.innerText = 'введите число от ' + a + " до " + b;
    }
});

