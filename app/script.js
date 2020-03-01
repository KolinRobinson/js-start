'use strict';

let tabBody = document.querySelectorAll('.tab-body'),
    tab = document.querySelectorAll('.tab');

function init(){
    for(let i = 1; i < tabBody.length; i++){
        tabBody[i].style.display = "none";
    }
}
init();

tab.forEach(function(element){
    element.onclick = showTabs;
})

function showTabs(){
    let data = this.getAttribute('data');
    for(let i = 0; i < tabBody.length; i++){
        tabBody[i].style.display = "none";
    }
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
    for(let i = 0; i < tab.length; i++){
        tab[i].classList.remove('active');
    }
    this.classList.add('active');
}