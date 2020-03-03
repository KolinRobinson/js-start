document.querySelector('.read-rules').onclick = function(){
    document.querySelector('.form-slider').style.marginLeft = "-250px";
};

document.querySelectorAll('.read-rules-back').forEach(element => {
    element.onclick = function(){
        document.querySelector('.form-slider').style.marginLeft = "0";
    };
});





