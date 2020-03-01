'use strict';

let push = document.querySelector('.push'),
    radio = document.querySelectorAll('.radio-input'),
    p = document.querySelectorAll('p'),
    option = document.querySelectorAll('#my-select option');

console.log(option);

push.addEventListener('click', function(){ 
    console.log(radio);
    //radio[2].hidden = true;
    for (let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            console.log(radio[i].value);
        }
    }
    for(let i = 0; i < option.length; i++){
        if(option[i].selected){
            console.log(option[i].value);
        }
    }
});

for(let i = 0; i < p.length; i++){
    p[i].style.color = 'red';
}

