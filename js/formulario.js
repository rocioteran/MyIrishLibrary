const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nombre = document.querySelector('#nombre');
    if (nombre.value = '') {
        const span = document.querySelector('#error-nombre')
        span.textContent = 'Ingresá un nombre válido'
    }  
    const apellido = document.querySelector('#apellido');
    if (apellido.value = ' ') {
        const span = document.querySelector('#error-apellido')
        span.textContent = 'Ingresá un apellido válido'
    }  
    const expresion = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    if (!nombre.value.match(expresion)) {
        const span = document.querySelector('#error-email')
        span.textContent = 'Ingresá un mail válido'
    } else {
        form.submit()
    }
})
let el = document.querySelector('p');

// el.onclick = () => alert('Hola');

el.addEventListener('click', () => {
    alert('Registro exitoso');
});

let link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event)
})