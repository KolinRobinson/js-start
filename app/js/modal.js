'use strick';

let modalShow = document.querySelectorAll('.modal-show'),
modalClose = document.querySelectorAll('.modal-close'),
modalWrap = document.querySelectorAll('.modal-wrap');

modalShow.forEach(function(element){
    element.onclick = showModal;
});

modalClose.forEach(function(element){
    element.onclick = closeModal;
});

modalWrap.forEach(function(element){
    element.onclick = closeModalWrap;
});

function showModal(){
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.onkeydown = function(event){
        if(event.keyCode == 27){
            modalWrap.forEach(function(element){
                element.classList.add('hide');
                element.children[0].classList.add('hide');
            });
        }
    };
}

function closeModal(){
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.add('hide');
    document.querySelector(modalId).parentElement.classList.add('hide');
}

function closeModalWrap(){
    this.classList.add('hide');
    this.children[0].classList.add('hide');
}