"use strick";

function myClick(event){
    console.log('click');
    console.log(event.target);
    console.log(this);
}

// document.querySelector('#one').onclick = myClick;
// document.querySelector('html').onclick = myClick;

// document.onclick = function(event){
//     console.log(event.target.id);
//     if(event.target.id == 'one') {
//         alert('click one');
//     }
// }

document.querySelector('.two').onclick = function() {
    event.stopPropagation();
    console.log('work!');
};

document.querySelector('.three').onclick = function() {
    this.style.display = 'none';
};
