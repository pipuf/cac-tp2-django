function esRequerido (campoForm){
    return !(campoForm.value.length===0)
}

function maxLenght(textoEntrada, maxLengthvValue){
    return textoEntrada.length>maxLengthvValue;
}

function formatoNombre(campoForm){
    return true;
}

function passwordMatch(password1){
    const password2=password1.parent.getElementById(password1.id+"-confirmacion");
    console.log(password2);
    return password1.value===password2.value;
}

function formatoEmail (campoForm){
    const regEx= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regEx.test(campoForm.value)
}

function clearErrors(miDoc){
    const listaErrores=miDoc.getElementsByClassName('invalid')
    console.log("clearErrors "+miDoc)
    console.log(listaErrores)
    console.log(listaErrores.length)
    console.log(listaErrores.length>0)
    if (listaErrores.length>0)  
        for (let mensajeError = 0; mensajeError < listaErrores.length; mensajeError++) {
        // for (mensajeError in listaErrores) {}
            console.log(mensajeError)  
             console.log(listaErrores.item(mensajeError).id)  

            listaErrores.item(mensajeError).classList.remove('invalid')
            }
        
}


function validar(callback,campoForm,textoError,tipoMensaje,inlineErrorID){
    // alert("inicio de validar"+ textoEntrada+textoError+tipoMensaje+inlineErrorID)
    const esValido = callback(campoForm); 
    console.log(campoForm.id+" "+esValido);
    console.log (inlineErrorID+" "+textoError)

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
    validar(esRequerido,password2,"Tenés que confirmar el password","inline","error-inputPassword2") // &&
    // validar(passwordMatch,password1.parent,"El apellido solo puede tener letras, guiones y espacios","inline","error-inputPassword2")   
 
 }


function validarForm(e,miDoc){
    e.preventDefault();
    // let elemento=document.getElementById('inputNombre');
    let esValido=true;

    clearErrors(miDoc)

    esValido = esValido &&  
    validarNombre(document.getElementById('inputNombre')) &&
    validarApellido(document.getElementById('inputApellido')) &&
    validarEmail(document.getElementById('inputEmail')) &&
    validarPassword(document.getElementById('inputPassword1'),document.getElementById('inputPassword2'))
}



const miForm = document.getElementById("form-registro");

miForm.addEventListener('submit', (e) => validarForm(e,miForm));
