function elegirSucursal (nombreBoton){
    // Cambia el contenido del iframe (google maps) y de la info de la sucursal segun la seleccion
    var sucursal = {
      mapa: '',
      nombre: '',
      direccion: ''
    }
 
    switch(nombreBoton) {
        case "sucursal1":
            sucursal.mapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.021712663224!2d-58.383133553714536!3d-34.603612460110654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1680238886168!5m2!1ses-419!2sar"
            sucursal.nombre="Sucursal Obelisco"
            sucursal.direccion="Corrientes y 9 Julio\n(555) 123-1234"
        break;
        case "sucursal2":
            sucursal.mapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6565.7604475678045!2d-58.47028522353704!3d-34.632467003617414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7aaf12c15eb%3A0xc24bbbc264028e55!2sAddherence!5e0!3m2!1ses-419!2sar!4v1683863659925!5m2!1ses-419!2sar"
            sucursal.nombre="Sucursal Nazca"
            sucursal.direccion="Nazca 5970, Nazca, Buenos Aires\n(555) 480-7220"
        break;    
        case "sucursal3":
            sucursal.mapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.794983499088!2d-58.44061172477246!3d-34.58405375645913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb54eb3bbf4e7%3A0xcffb8a8dc7b6f8eb!2sQUE%20PINTA%20PALERMO!5e0!3m2!1ses-419!2sar!4v1683863557718!5m2!1ses-419!2sar"
            sucursal.nombre="Sucursal Palermo"
            sucursal.direccion="Bonpland 1611, C1414 CABA\n(555) 765-5398"
        break;
        case "sucursal4":
            sucursal.mapa = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6566.502418024702!2d-58.500988218072195!3d-34.62309155164423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d1a62b4a39%3A0xeb9300befab70bde!2sAv.%20Segurola%201846%2C%20C1407%20Monte%20Castro%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1683856410324!5m2!1ses-419!2sar"
            sucursal.nombre="Sucursal Monte Castro"
            sucursal.direccion="Av. Segurola 1846, Monte Castro\n(555) 417-6820"         
       break;
       default:
      } 
 
      document.getElementById("mapa-sucursal").src = sucursal.mapa
      document.getElementById("nombre-sucursal").innerText=sucursal.nombre
      document.getElementById("info-sucursal").innerText=sucursal.direccion
}

for (var i=1; i<=4; i++){
    let sucursalID=`sucursal${i}`
    // agrega listeners para evitar errores en dispositivos mobile/touchscreen 
    document.getElementById(sucursalID).addEventListener('click',()=>{elegirSucursal(sucursalID)}) 
    document.getElementById(sucursalID).addEventListener('touchstart',()=>{elegirSucursal(sucursalID)}) 
    // document.getElementById(sucursalID).addEventListener('touchmove',(e)=>{e.preventDefault()}) 
}
