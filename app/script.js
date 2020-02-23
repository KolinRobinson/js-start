'use strict';

// let num = 25;

// function showFirstMessage(text){
//     alert(text);
//     let num = 20;
// }
// showFirstMessage('speedrun');

// console.log(num);


// let calc = function (a, b) {
//     return (a + b);
// };



// let calc = (a,b) => a+b;

// console.log(calc(3,5));

function first() {

    setTimeout( function(){
        console.log(1);
        }, 500 );
}

function second(){
    console.log(2);
}

first();
second();


function learnJs(lang, callback) {
    console.log('I learn' + lang);
    callback();
}

function done() {
    console.log('I finish 3 lesson');
}

learnJs('JS', done);