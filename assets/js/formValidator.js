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

function passwordMatch(password1,password2){
console.log("estoy en password match")
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

function formatoEmail (campoForm){
    const regEx= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
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
    // console.log(callback)
    // console.log(campoForm.id+" "+esValido);
    // console.log (inlineErrorID+" "+textoError)

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
    return validar(esRequerido,password1,"Tenés que ingresar el password","inline","error-inputPassword1") &&
    validar(esRequerido,password2,"Tenés que confirmar el password","inline","error-inputPassword2")  &&
    validar(formatoPassword,password1,"El formato del password no es válido","inline","error-inputPassword1") &&
    validar(formatoPassword,password2,"El formato del password no es válido","inline","error-inputPassword2") &&
    validar(passwordMatch,password1,"Los passwords no coinciden","inline","error-inputPassword1",password2)   
 
 }

 function validarTelefono(campoForm){
    return validar(esRequerido,campoForm,"Tenés que ingresar el teléfono","inline","error-inputTelefono") &&
    validar(formatoTelefono,campoForm,"Esto no es un teléfono","inline","error-inputTelefono")   
 }

 function clearForm(miDoc){
   // Crea un array con una copia shallow de la coleccion de todos los inputs del form, o sea
   // que tienen la clase .invalid 
   let listaControles = Array.from(miDoc.getElementsByClassName('form-control'))
   listaControles.forEach((input)=>{input.value=""})    
 
   listaControles = Array.from(miDoc.getElementsByClassName('form-check-input'))
   listaControles.forEach((checkBox)=>{checkBox.checked=false})    
 
 }

 function validarForm(e,miDoc){
    let esValido=true;

    e.preventDefault();

    clearErrors(miDoc)

    esValido = validarNombre(document.getElementById('inputNombre')) && esValido
    esValido = validarApellido(document.getElementById('inputApellido')) && esValido
    esValido = validarEmail(document.getElementById('inputEmail'))  && esValido
    esValido = validarPassword(document.getElementById('inputPassword1'),document.getElementById('inputPassword2')) && esValido
    esValido = validarTelefono(document.getElementById('inputTelefono')) && esValido

    if (esValido){
        clearForm(miForm)
        alert ("Tus datos ya fueron enviados")
    }
}



const miForm = document.getElementById("form-registro");

miForm.addEventListener('submit', (e) => validarForm(e,miForm));
