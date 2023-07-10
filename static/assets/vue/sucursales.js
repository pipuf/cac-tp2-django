
        import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
        const URL_API = "/v1/"

        // Creacion del objeto principal Vue
        const sucursales = {
            data: function () {
                return {
                    // variables expuestas para el uso en el HTML
                    listaSucursales: null,
                    detalleSucursal: null
                };
            },
            created: function() {
                // Inicializacion de los datos de la pagina en la carga
                this.getSucursales()
                this.getDetalleSucursal(1) 
            },
            methods: {
                getSucursales: async function () {
                    try {
                        // Trae la lista de sucursales dispobibles para cargar el selector
                        let response = await fetch(URL_API+"ListaSucursales")
                        let data = await response.json();
                        this.listaSucursales = data;
                        // console.log(this.listaSucursales)
                         
                    } catch (error) {
                        console.log({ error });
                    }
                }, 

                getDetalleSucursal: async function (ID) {
                    try {
                        // Trae el detalle de una sucursal por ID para cargar descripcion, info y mapa
                        let response = await fetch(URL_API+"DetalleSucursal/"+ID)
                        let data = await response.json();
                        this.detalleSucursal = data;
                        this.detalleSucursal.mapa = `<iframe class="frame-mapa" id="mapa-sucursal" 
                          src="${this.detalleSucursal.mapa}"></iframe>`

                        // console.log("el id " + ID)
                        // console.log("el mapa " + this.detalleSucursal.mapa)


                        // document.getElementById("mapa-sucursal").src = sucursales.mapa
                        // document.getElementById("nombre-sucursal").innerText=sucursales.nombre
                        // document.getElementById("info-sucursal").innerText=sucursales.direccion+"\n"+sucursales.telefono 
                        // document.getElementById("descripcion-sucursal").innerText=sucursales.descripcion

                    } catch (error) {
                        console.log({ error });
                    }
                }, 

                // handlerSucursales: async function (categoria) {
                //     try {
                //         // Trae todas las recetas de la categoría que se recibe por parametro
                //         let response = await fetch(URL_API+"ListaSucursales");
                //         let data = await response.json();
                //         this.sucursales = data.meals;

                //         // Vacia los arrays de ingredientes y preparaciones para poder cargar la nueva categoria usando 
                //         // el mismo indice que el de la lista de recetas
                //         this.ingredientes.length = 0
                //         this.preparacion.length = 0

                //         // Para cada receta obtenida en el payload de la respuesta, creamos dos arrays correspondientes
                //         // conteniendo la lista 
                //         this.mealList.forEach(meal => {
                //             this.getMealDetails(meal.idMeal)                       
                //         });

                //     } catch (error) {
                //         console.log({ error });
                //     }
                // },

                selectHandler: function (index, sucursal) {
                    this.activeItem = index;
                },                
            },
            delimiters : ["||", "||"],
        };

        /*ASIGNACION DEL CORE A METODO DE VUE*/
        const app = createApp(sucursales);

        /*MONTADO DEL PROYECTO*/
        app.mount("#appSucursales");