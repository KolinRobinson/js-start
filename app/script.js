'use strict';

// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('свойствo ' + key + ' имеет значение ' + options[key]);
// };

// console.log(Object.keys(options).length);


// let arr = ["first", 2, 3, "four", 5];



// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + " (массив: " + mass + ")");
// });

// // console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass){
//     console.log(key);
// };

// let ans = prompt("" , ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["aawe", "aaa", 'zzz', "rer"],
// i = arr.join(', ');

// console.log(i);

let arr = ["aawe", "aaa", 'zzz', "rer", 1, 5, 9, 15],
i = arr.sort(compareNum);

function compareNum(a,b){
    return a-b;
}

console.log(i);