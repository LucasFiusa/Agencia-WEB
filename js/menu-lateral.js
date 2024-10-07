
let btnMenu = document.getElementById('menu_icon');
let menu = document.getElementById('menu_lateral');
let overlay = document.getElementById('overlay_menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})