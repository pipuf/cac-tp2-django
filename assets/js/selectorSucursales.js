function elegirSucursal (boton){
    var i;

    // alert("I am an alert box! " + boton.id);
    for (i = 1; i <= 4; i++) {
        document.getElementById("mapa-sucursal"+i).style.display = "none";
    };
    switch(boton.id) {
        case "sucursal1":
            document.getElementById("mapa-sucursal1").style.display = "inline-block"
            document.getElementById("nombre-sucursal").innerText="Sucursal Obelisco"
            document.getElementById("info-sucursal").innerText="Corrientes y 9 Julio\n(555) 123-1234"
          break;
        case "sucursal2":
           document.getElementById("mapa-sucursal2").style.display = "inline-block"
           document.getElementById("nombre-sucursal").innerText="Sucursal Nazca"
           document.getElementById("info-sucursal").innerText="Nazca 5970, Nazca, Buenos Aires\n(555) 480-7220"
        break;
        case "sucursal3":
           document.getElementById("mapa-sucursal3").style.display = "inline-block"
           document.getElementById("nombre-sucursal").innerText="Sucursal Palermo"
           document.getElementById("info-sucursal").innerText="Bonpland 1611, C1414 CABA\n(555) 765-5398"
        break;
        case "sucursal4":
           document.getElementById("mapa-sucursal4").style.display = "inline-block"
           document.getElementById("nombre-sucursal").innerText="Sucursal Monte Castro"
           document.getElementById("info-sucursal").innerText="Av. Segurola 1846, Monte castro, CABA\n(555) 417-6820"
        break;
        default:
          // code block
      }
    
}