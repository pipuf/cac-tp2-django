const menuBoton = document.querySelector('.button')
const menuNav = document.querySelector('.menu')

menuBoton.addEventListener('click',()=>{
    menuNav.classList.toggle('activo')
})