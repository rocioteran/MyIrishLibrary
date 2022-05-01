var verMenu = function (){
    document.querySelector('nav.menu').classList.toggle('hidden')     
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn-menu').addEventListener('click', verMenu)
})