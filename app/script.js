'use strick';

let block1 = document.querySelector('.block-1');

console.log(block1.style);

block1.style = "width: 250px";

block1.classList.add('red');
block1.classList.add('green');


block1.classList.toggle('red');