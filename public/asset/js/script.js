let nuage = document.querySelector("#nuage");
let montagne = document.querySelector("#montagne");
// let titre = document.querySelector(".titre");
// let btn = document.querySelector(".btn");
let temple = document.querySelector("#temple");
// let header = document.querySelector("header");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    nuage.style.top = value * 1.5  + 'px';
    montagne.style.top = value * 0.5  + 'px';
    // titre.style.transform = 'translateX(' + value * 2 + 'px)';
    // btn.style.top = value * 1  + 'px';
    // header.style.top = value * 0.5  + 'px';
})
