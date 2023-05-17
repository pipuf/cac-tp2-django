
        import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
        const URL_API = "https://www.themealdb.com/api/json/v1/1/random.php";

        /*CREACION DEL CORE*/

        const CoreObject = {
            data: function () {
                return {
                    /*variables de inicializacion*/
                    nombre: null,
                    img: null,
                    ingredientes: new Array(20), 
                    preparacion: null,
                };
            },
            mounted: function() {
                this.handlerRecetas() // Calls the method before page loads
            },
            methods: {
                handlerRecetas: async function () {
                    try {
                        let response = await fetch(URL_API);
                        let data = await response.json();
                        this.nombre = data.meals[0].strMeal;
                        console.log(this.nombre)
                        this.img = data.meals[0].strMealThumb;
                        for (var i=1; i<21; i++){ 
                            if (data.meals[0]["strIngredient"+i] != null)
                                if (data.meals[0]["strIngredient"+i].trim()!="")
                                    this.ingredientes[i-1]=data.meals[0]["strIngredient"+i].trim() +" "+data.meals[0]["strMeasure"+i].trim()
                                else
                                    this.ingredientes[i-1]=''
                        }
                        console.log(this.ingredientes)
                        this.preparacion=data.meals[0].strInstructions

                    } catch (error) {
                        console.log({ error });
                    }
                },
            },
        };

        /*ASIGNACION DEL CORE A METODO DE VUE*/

        const app = createApp(CoreObject);

        /*MONTADO DEL PROYECTO*/

        app.mount("#app");
