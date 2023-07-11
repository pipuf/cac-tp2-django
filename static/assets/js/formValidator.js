// Formulario de registro
const miForm = document.getElementById("form-registro");
// Controles del formulario
const nombre = document.getElementById('inputNombre')
const apellido = document.getElementById('inputApellido')
const telefono=document.getElementById('inputTelefono')
const email=document.getElementById('inputEmail')
const password1=document.getElementById('inputPassword1')
const password2=document.getElementById('inputPassword2')
const sinTACC=document.getElementById('gridCheck1')
const vegetariano=document.getElementById('gridCheck2')
const vegano=document.getElementById('gridCheck3')
const keto=document.getElementById('gridCheck4')
const recibirOfertas=document.getElementById('gridCheck')
// Controles del popup
const popup=document.getElementById('user-alert')
const botonPopup = document.getElementById ("boton-alert")

function esRequerido (campoForm){
    return !(campoForm.value.length===0)
}

function maxLenght(textoEntrada, maxLengthvValue){
    return textoEntrada.length>maxLengthvValue;
}

function formatoNombre(campoForm){
    const regEx= /^[a-zA-Z\s'-]+$/;
    return regEx.test(campoForm.value)
}

function formatoTelefono(campoForm){
    const regEx= /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    return regEx.test(campoForm.value)
}

function formatoEmail (campoForm){
    const regEx= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regEx.test(campoForm.value)
}

function passwordMatch(password1,password2){
    return password1.value===password2.value;
}

function formatoPassword(campoForm){
    // Minimo 8 caracteres
    // Maximo 15
    // Al menos una letra mayúscula
    // Al menos una letra minucula
    // Al menos un dígito
    // No espacios en blanco
    // Al menos 1 caracter especial
    const regEx= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    return regEx.test(campoForm.value)
}

function clearErrors(miDoc){
   // Crea un array con una copia shallow de la coleccion de todos los inputs del form con error, o sea
   // que tienen la clase .invalid 
    let mensajesError = Array.from(miDoc.getElementsByClassName('invalid'))
 
    mensajesError.forEach((mensaje)=>{mensaje.classList.remove('invalid')})         
}


function validar(callback,campoForm,textoError,tipoMensaje,inlineErrorID,campoForm2){
    const esValido = callback(campoForm,campoForm2); 

    if (!esValido){
        switch (tipoMensaje){
            case "pop-up":{
                alert(textoError)
                }
            break;
            case "inline": {
                let inlineError = document.getElementById(inlineErrorID);  
                inlineError.innerText=textoError; 
                campoForm.classList.add("invalid")};
            break
            };
        return false;        
    } else return true
}

function validarNombre(campoForm){
   return validar(esRequerido,campoForm,"Tenés que ingresar el nombre","inline","error-inputNombre") &&
          validar(formatoNombre,campoForm,"El nombre solo puede tener letras, guiones y espacios","inline","error-inputNombre")
}

function validarApellido(campoForm){
    return validar(esRequerido,campoForm,"Tenés que ingresar el apellido","inline","error-inputApellido") &&
           validar(formatoNombre,campoForm,"El apellido solo puede tener letras, guiones y espacios","inline","error-inputApellido")   
 }

 function validarEmail(campoForm){
    return validar(esRequerido,campoForm,"Tenés que ingresar el email","inline","error-inputEmail") &&
           validar(formatoEmail,campoForm,"Esto no es un email","inline","error-inputEmail")   
 }

 function validarPassword(password1,password2) {
    return validar(esRequerido,password1,"Tenés que ingresar la contraseña","inline","error-inputPassword1") &&
           validar(formatoPassword,password1,`El formato de la contraseña no es válido 
                Mínimo 8 caracteres
                Máximo 15
                Al menos una letra mayúscula
                Al menos una letra minúscula
                Al menos un dígito
                No espacios en blanco
                Al menos 1 carácter especial`,"inline","error-inputPassword1") &&
           validar(esRequerido,password2,"Tenés que confirmar la contraseña","inline","error-inputPassword2")  &&
        //    validar(formatoPassword,password2,"El formato de la contraseña no es válido","inline","error-inputPassword2") &&
           validar(passwordMatch,password1,"Las contraseñas no coinciden","inline","error-inputPassword1",password2)   
        
 }
/*  */
 function validarTelefono(campoForm){
    return validar(formatoTelefono,campoForm,"El teléfono tiene que tener la forma 123-123-1234","inline","error-inputTelefono")   
 }

 function clearForm(miDoc){
   // Crea un array con una copia shallow de la coleccion de todos los inputs del form, o sea
   // que tienen la clase .invalid 
   let listaControles = Array.from(miDoc.getElementsByClassName('form-control'))
   listaControles.forEach((input)=>{input.value=""})    
 
   listaControles = Array.from(miDoc.getElementsByClassName('form-check-input'))
   listaControles.forEach((checkBox)=>{checkBox.checked=false})    
 
 }

 function enviarCorreo(datos){
    mostrarPopup("Recibir ofertas",`Este formulario no envía email aún. 
    Este pop-up se muestra solo como una demostración de que el botón Submit ha sido accionado y la información correspondiente capturada y el evento capturado en un listener.`,
    datos)
 }

 function guardarDatos(datos){
    mostrarPopup("Datos ingresados en el form",`Este formulario no produce ninguna acción en el evento submit. 
    Este pop-up se muestra solo como una demostración de que el botón Submit ha sido accionado, la información correspondiente capturada y el evento capturado en un listener.`,
    datos)
    // Mas adelante, el resultado corresponderá al éxito en la persistencia de los datos
    return true
 }

 function validarForm(e,miDoc){
    let esValido=true;
    
    e.preventDefault();

    clearErrors(miDoc)

    esValido = validarNombre(nombre) && esValido
    esValido = validarApellido(apellido) && esValido
    esValido = validarEmail(email)  && esValido
    esValido = validarPassword(password1,password2) && esValido
    esValido = validarTelefono(telefono) && esValido 

    if (esValido){
        clearErrors(miDoc)
        let datos =    `<p><b>Nombre:</b> ${nombre.value} </p>
                        <p><b>Apellido:</b> ${apellido.value}</p> 
                        <p><b>Teléfono:</b> ${telefono.value}</p>
                        <p><b>Email:</b> ${email.value}</p>
                        <p><b>Contraseña:</b> ${password1.value}</p>
                        <p><b>Sin TACC:</b> ${sinTACC.checked==false?'no' : 'sí'}</p>
                        <p><b>Vegetariana:</b> ${vegetariano.checked==false?'no' : 'sí'}</p>
                        <p><b>Vegana:</b> ${vegano.checked==false?'no' : 'sí'}</p>
                        <p><b>Keto:</b> ${keto.checked==false?'no' : 'sí'}</p>
                        <p><b>Recibir ofertas:</b> ${recibirOfertas.checked==false?'no' : 'sí'}</p>`

        if (recibirOfertas.checked) 
            enviarCorreo(datos)

        if (guardarDatos(datos))
            clearForm(miForm)
    }
}

function mostrarPopup (titulo,info,datos)  {
    if (!popup.open) {
        document.getElementById("titulo-alert").innerText=titulo
        document.getElementById("info-alert").innerText=info
        document.getElementById("datos-alert").innerHTML=datos
        popup.showModal()
    }
}

// document.getElementById("form-registro").addEventListener('submit', (e) => validarForm(e,miForm));
console.log(document)

// botonPopup.addEventListener('click', (e) => {e.preventDefault;popup.close()});