let botonMenuOpen = document.querySelector("#menu-open")
let imagenMenuOpen = document.querySelector('#img-menu-open')

let botonMenuClose = document.querySelector("#menu-close")
let imagenMenuClose = document.querySelector('#img-menu-close')
let menuCont = document.querySelector('.menu-open-close')

let menuLista = document.querySelector('.menu-lista')

let btnModoOscuro = document.querySelector('.boton-mo')

let navBar = document.querySelector('nav')

let seccAmarillas = document.querySelectorAll('.fon-amarillo') 
let secBlancas = document.querySelectorAll('.fon-blanco')

botonMenuOpen.addEventListener('click', e =>{
    menuCont.style.display = 'block'
    botonMenuOpen.style.display = 'none'
    botonMenuClose.style.display = 'block'
    menuLista.style.display = 'flex'
})

botonMenuClose.addEventListener('click', e =>{
    botonMenuOpen.style.display = 'block'
    menuCont.style.display = 'none'
    botonMenuClose.style.display = 'none'
})

btnModoOscuro.addEventListener('click', e =>{
    navBar.classList.toggle('nav-osc');

    seccAmarillas.forEach((item)=>{
      
    })

    secBlancas.forEach((item)=>{
        item.classList.toggle('fondo-negro');
    })
/*     seccAmarillas.classList.toggle('fondo-negro') */
    
})

