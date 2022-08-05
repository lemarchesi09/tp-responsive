let botonMenuOpen = document.querySelector("#menu-open")
let imagenMenuOpen = document.querySelector('#img-menu-open')

let botonMenuClose = document.querySelector("#menu-close")
let imagenMenuClose = document.querySelector('#img-menu-close')
let menuCont = document.querySelector('.menu-open-close')

let menuLista = document.querySelector('.menu-lista')

let btnModoOscuro = document.querySelector('.boton-mo')
let imgLunaNegra = document.querySelector('.luna-negra')

let navBar = document.querySelector('nav')

let linksNavBar = document.querySelectorAll('.link-a')

let imgServices = document.querySelectorAll('.grid-tarj img')

let seccAmarillas = document.querySelectorAll('.fon-amarillo') 
let secBlancas = document.querySelectorAll('.fon-blanco')

let icoTwiteer = document.querySelector('.ico-twitter')

botonMenuOpen.addEventListener('click', () =>{
    menuCont.style.display = 'block'
    botonMenuOpen.style.display = 'none'
    botonMenuClose.style.display = 'block'
    menuLista.style.display = 'flex'
})

botonMenuClose.addEventListener('click', () =>{
    botonMenuOpen.style.display = 'block'
    menuCont.style.display = 'none'
    botonMenuClose.style.display = 'none'
})

btnModoOscuro.addEventListener('click', () =>{
    navBar.classList.toggle('nav-osc');

    secBlancas.forEach((item)=>{
        item.classList.toggle('fondo-negro');
    })

    //se arregla con item.style pero no puedo volver al color original
    linksNavBar.forEach((item) =>{
        // item.classList.toggle('link-mod-oscuro')
        // item.classList.toggle('.link-mod-oscuro');
    })

    imgServices.forEach((item) =>{
        item.classList.toggle('img-services-oscuro')
    })

    imgLunaNegra.classList.toggle('luna-blanca')



/*     seccAmarillas.classList.toggle('fondo-negro') */
    
})

