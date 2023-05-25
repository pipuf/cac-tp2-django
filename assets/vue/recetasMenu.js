
        import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
        // Utilizamos una API de uso libre cuya documentacion se encuentra en https://themealdb.com/api.php
        // Los endpoints utilizados son 
        //     - list.php para obtener la lista de categorias de recetas disponibles
        //     - filter.php para obtener la lista de las recetas que corresponden a la categoria seleccionada
        //     - lookup.php para obtener los detalles de una receta en particular
        const URL_API = "https://www.themealdb.com/api/json/v1/1/"

        // Creacion del objeto principal Vue

        const recetasMenu = {
            data: function () {
                return {
                    // variables expuestas para el uso en el HTML
                    categories: null,
                    mealList: null,
                    ingredientes: [], 
                    preparacion: [],
                };
            },
            created: function() {
                // Inicializacion de los datos de la pagina en la carga
                this.getCategories()
                this.handlerRecetasMenu("beef") 
            },
            methods: {
                getCategories: async function (mealID) {
                    try {
                        // Trae la lista de categorias dispobibles
                        let response = await fetch(URL_API+"list.php?c=list")
                        let data = await response.json();
                        this.categories = data.meals;

                    } catch (error) {
                        console.log({ error });
                    }
                }, 


                getMealDetails: async function (mealID) {
                    try {
                        // Trae el detalle de una receta por ID
                        let response = await fetch(URL_API+"lookup.php?i="+mealID)
                        let data = await response.json();
                        let mealDetalles = data.meals;
                        let mealsLength = this.preparacion.push(mealDetalles[0].strInstructions)
                        
                        let listaIngredientes = Array(0)

                        for (var i=1; i<21; i++){ 
                            if (mealDetalles[0]["strIngredient"+i] != null)
                                if (mealDetalles[0]["strIngredient"+i].trim()!="")
                                    mealsLength = listaIngredientes.push(mealDetalles[0]["strIngredient"+i].trim() +" "+mealDetalles[0]["strMeasure"+i].trim())
                        }

                        mealsLength = this.ingredientes.push(listaIngredientes)

                    } catch (error) {
                        console.log({ error });
                    }
                }, 
                               
                handlerRecetasMenu: async function (categoria) {
                    try {
                        // Trae todas las recetas de la categoría que se recibe por parametro
                        let response = await fetch(URL_API+"filter.php?c="+categoria);
                        let data = await response.json();
                        this.mealList = data.meals;

                        // Vacia los arrays de ingredientes y preparaciones para poder cargar la nueva categoria usando 
                        // el mismo indice que el de la lista de recetas
                        this.ingredientes.length = 0
                        this.preparacion.length = 0

                        // Para cada receta obtenida en el payload de la respuesta, creamos dos arrays correspondientes
                        // conteniendo la lista 
                        this.mealList.forEach(meal => {
                            this.getMealDetails(meal.idMeal)                       
                        });

                    } catch (error) {
                        console.log({ error });
                    }
                },

                selectHandler: function (index, meal) {
                    this.activeItem = index;
                },                
            },
        };

        
     
        /*ASIGNACION DEL CORE A METODO DE VUE*/
        const app = createApp(recetasMenu);

        /*MONTADO DEL PROYECTO*/
        app.mount("#appMenu");