    const formulario = document.getElementById('formulario');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');


    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();
        if(!!nombre.value || nombre.value === ' ') {
            if(!!apellido.value || apellido.value === ' '){
                if(!!email.value || email.value === ' '){
                    if(!!mensaje.value || mensaje.value === ' '){
                        alert('Mensaje enviado correctamente!')
                }  else {
                        alert('Porfavor escriba un mensaje válido')
                    }
                } else {
                    alert('Porfavor escriba una dirección de Email válida')
                }
            } else {
                alert('Porfavor escriba un apellido válido')
            }
        } else {
            alert('Porfavor escriba un nombre válido')
        }
    });




