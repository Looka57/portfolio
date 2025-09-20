let nuage = document.querySelector("#nuage");
let montagne = document.querySelector("#montagne");
let titre = document.querySelector(".titre");
let btn = document.querySelector(".btn");
let temple = document.querySelector("#temple");
let lune = document.querySelector("#lune");
let ninja = document.querySelector('#ninja');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    nuage.style.top = value * 1.5 + 'px';
    montagne.style.top = value * 0.5 + 'px';
    titre.style.transform = 'translateX(' + value * 2 + 'px)';
    btn.style.top = value * 1 + 'px';
    lune.style.top = value * .3 + 'px';
    ninja.style.left = value * .6 + 'px';
})

// background Animation debut
const groupes = document.querySelector('.groupes');
if (groupes) {
    for (let i = 1; i < 10; i++) {
        const containerId = `iconContainer${i}`; // Utilisation des backticks
        const container = document.createElement('div');
        container.className = 'iconContainer';
        container.id = containerId;
        groupes.appendChild(container);
        addIcons(containerId);
    }
}
function addIcons(containerId) {
    const iconContainer = document.getElementById(containerId);
    const uniCode = [
        '\uf011',
        '\uf012',
        '\uf003',
        '\uf004',
        '\uf005',
        '\uf006',
        '\uf007',
        '\uf008',
        '\uf009',
        '\uf010',
        '\uf011',
        '\uf012',
        '\uf013',
        '\uf014',
        '\uf015',
        '\uf016',
        '\uf017',
        '\uf018',
        '\uf019',
        '\uf220',
    ]

    for (let i = 1; i < 50; i++) {
        const icon = document.createElement('i');
        icon.className = 'icon fas';
        icon.innerHTML = randomIcon(uniCode);
        iconContainer.appendChild(icon);
    }
}

function randomIcon(value) {
    const randomIndex = Math.floor(Math.random() * value.length);
    return value[randomIndex];
}

// MENU BARRE NAV HAMBURGER
let menuHamburger = document.querySelector(".menu_hamburger");
let navLinks = document.querySelector(".navLinks");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})     