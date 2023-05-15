const menuBoton = document.querySelector('.button-burguer')
const menuNav = document.querySelector('.menu')

menuBoton.addEventListener('click',
                ()=>{menuNav.classList.toggle('activo')})