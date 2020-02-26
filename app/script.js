'use strict';

// let btn = document.querySelector('.btn'),
//     elem = document.querySelector('.box');

// function myAnimate(){
//     let pos = 0;

//     let id = setInterval(frame, 10);

//     function frame () {
//         if (pos == 400) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimate);

// let btnBlock = document.querySelector('.btn-block'),
//     btns = document.getElementsByTagName('button');

// btnBlock.addEventListener('click', function(event) {
//     if (event.target && event.target.matches('button.first') ){
//         myAnimate();
//     } else {

//     }
// });

let btn = document.getElementById('btn'),
    showModal = document.querySelector('#modal-show');

function hello() {
    btn.hidden = true;
}



btn.hidden = false;

function show(){
    let modal = document.querySelector('.modal_one');
    modal.style.display = "block";
}

showModal.addEventListener('click', show);

function hide(){
    let modal = document.querySelector('.modal_one');
    modal.style.display = "none";
}

btn.addEventListener('click', hide);