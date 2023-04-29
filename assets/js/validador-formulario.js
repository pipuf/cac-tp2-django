function esRequerido (textoEntrada){
    if (textoEntrada.length===0){
        //  alert("nombre vacio");
         return false;
        }
    elseif    
        return true;
};

function maxLenght(textoEntrada){
    return true;
};

function passwordMatch(password1,password2){
    return true;
};

function formatoNombre(textoEntrada){
    alert("formato nombre  "+textoEntrada);
    return true;
};

function validar(callback,textoEntrada,textoError,tipoMensaje,inlineErrorID){
    // alert("inicio de validar"+ textoEntrada+textoError+tipoMensaje+inlineErrorID)
    if (~ callback(textoEntrada)){
        switch (tipoMensaje){
            case "pop-up":{
                alert(textoError)
                // alert("pasa por pop-up")
                }
            break;
            case "inline": {
                // for (i = 1; i <= 4; i++) {
                //     document.getElementById("mapa-sucursal"+i).style.display = "none";
                // }; 
                // alert("inline  "+inlineErrorID);
                document.getElementById(inlineErrorID).style.display = "inline";  
                document.getElementById(inlineErrorID).textContent=textoError;   
                break;
                }
                };
        return false;        
    } else return true
}

function validarNombre(textoEntrada){
   if (~ validar(esRequerido,textoEntrada,"Debe ingresar el nombre","inline","error-inputNombre")) return false;
   if (~ validar(formatoNombre,textoEntrada,"El nombre no es válido","pop-up")) return false;
};

function validarForm(){
    validarNombre(document.getElementById("inputNombre").value)

}