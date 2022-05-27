const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formularioOK = true;
    const nombre = document.querySelector('#nombre');
    if (nombre.value == '') {
        const span = document.querySelector('#error-nombre')
        span.textContent = 'Ingresá un nombre válido'
        formularioOK = false
        
    }  
    const apellido = document.querySelector('#apellido');
    if (apellido.value == '') {
        const span = document.querySelector('#error-apellido')
        span.textContent = 'Ingresá un apellido válido'
        formularioOK= false
        
    }  
    const validateMail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    if (!email.value.match(validateMail)) {
        const span = document.querySelector('#error-email')
        span.textContent = 'Ingresá un mail válido'
        formularioOK = false
        
    }
    if ( formularioOK == true ) {
        //form.submit()
		alert('Registro exitoso');
		console.log("Registro Exitoso")
		form.reset();
    }
})