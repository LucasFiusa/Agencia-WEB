let btnMenu = document.getElementById('menu_icon');
let menu = document.getElementById('menu_lateral');
let overlay = document.getElementById('overlay_menu');
let body = document.body;

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    body.classList.add('no-scroll');
});

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    body.classList.remove('no-scroll');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    body.classList.remove('no-scroll');
});

// SCROLL

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

// FIM SCROLL