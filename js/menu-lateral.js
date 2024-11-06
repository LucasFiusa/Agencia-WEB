const btnMenu = document.getElementById('menu_icon');
const menu = document.getElementById('menu_lateral');
const overlay = document.getElementById('overlay_menu');
const body = document.body;

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
    const header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

// FIM SCROLL