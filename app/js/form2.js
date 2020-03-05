let sendForm = document.querySelector('#send-form'),
    form = document.querySelector('form');
sendForm.onclick = function (event) {
    console.log('work');
    event.preventDefault();
    console.log( serialize(form) );
    
};

