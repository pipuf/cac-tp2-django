const menuBoton = document.querySelector('.button-burguer')
const menuNav = document.querySelector('.menu')

const navItemInicio = document.getElementById('nav-item-inicio')
const navItemMenu = document.getElementById('nav-item-menu')
const navItemSucursales = document.getElementById('nav-item-sucursales')
const navItemListaSucursales = document.getElementById('nav-item-list-suc')
const navItemRegistro = document.getElementById('nav-item-registro')

// function highlightNavItem(navItem) {
//     console.log("this is what was clicked " + navItem)
//     let navBar = Array.from(document.getElementsByClassName('menu-button'))
//     navBar.forEach((item)=>{if (item.id=navItem) {
//         console.log("current item " + item)
//                                 if (!item.classList.contains('menu-button-activo')) {
//                                     item.classList.add('menu-button-activo')
//                                     console.log("item matches and it doesn´t have the class") }
                                    
//                                 }
//                             else {
//                                 if (item.classList.contains('menu-button-activo')) {
//                                     item.classList.remove('menu-button-activo') 
//                                     console.log("item doesn't match and it has the class")}
//                                 }
//                             })    
// }

menuBoton.addEventListener('click',
                ()=>{menuNav.classList.toggle('activo')})

// navItemInicio.addEventListener('visited',
//                 ()=>{highlightNavItem('nav-item-inicio')})

// navItemMenu.addEventListener('click',
//                 ()=>{highlightNavItem('nav-item-menu')})

// navItemSucursales.addEventListener('click',
//                 ()=>{highlightNavItem('nav-item-sucursales')})

// navItemListaSucursales.addEventListener('click',
//                 ()=>{highlightNavItem('nav-item-list-suc')})

// navItemRegistro.addEventListener('click',
//                 ()=>{highlightNavItem('nav-item-registro')})

