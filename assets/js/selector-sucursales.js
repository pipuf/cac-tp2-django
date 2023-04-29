function elegirSucursal (boton){
    var i;

    // alert("I am an alert box! " + boton.id);
    for (i = 1; i <= 4; i++) {
        document.getElementById("mapa-sucursal"+i).style.display = "none";
    };
    switch(boton.id) {
        case "sucursal1":
            document.getElementById("mapa-sucursal1").style.display = "block"
          break;
        case "sucursal2":
           document.getElementById("mapa-sucursal2").style.display = "block"
        break;
        case "sucursal3":
           document.getElementById("mapa-sucursal3").style.display = "inline-block"
        break;
        case "sucursal4":
           document.getElementById("mapa-sucursal4").style.display = "inline-block"
        break;
        default:
          // code block
      }
    
}