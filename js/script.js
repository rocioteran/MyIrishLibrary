var verMenu = function (){
    document.querySelector('nav.menu').classList.toggle('ocultar')     
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.boton-menu').addEventListener('click', verMenu)
})