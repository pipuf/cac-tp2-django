
        import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
        const URL_API = "https://www.themealdb.com/api/json/v1/1/"

        /*CREACION DEL CORE*/

        const recetasMenu = {
            data: function () {
                return {
                    /*variables de inicializacion*/
                    meals: null,
                    receta: null,
                };
            },
            mounted: function() {
                this.handlerRecetasMenu() 
            },
            methods: {
                handlerRecetasMenu: async function () {
                    try {
                        let response = await fetch(URL_API+"filter.php?c=Seafood");
                        let data = await response.json();
                        let datos=data.meals[0];
                        this.receta= "<div>{{meals.strMeal}}</div>"
                        // this.receta = "<div class='menu-card animation-flip'>"
                        // this.receta = this.receta + "<div class='menu-card-content animation-flip-content'>"
                        // this.receta = this.receta + "<div class='menu-card-front'>"
                        // this.receta = this.receta + "<h4 class='titulo-menu-card'>{{meals.strMeal}}</h4>"
                        // this.receta = this.receta + "<img img :src=datos.strMealThumb alt='' class='img-menu-card'>"
                        // this.receta = this.receta + "</div>"
                        // this.receta = this.receta + "<div class='menu-card-info animation-flip-info'>"
                        // this.receta = this.receta + "h4 class='titulo-menu-card'>{{meals.strMeal}}</h4>"
                        // this.receta = this.receta + "<p class='menu-card-info-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem possimus corrupti voluptates, nobis suscipit ut modi hic vel totam repudiandae!</p>"
                        // this.receta = this.receta + "</div>"
                        // this.receta = this.receta + "</div>"
                        // this.receta = this.receta + "</div>"
                       
                        
                        
                        
                        
                        // console.log(this.nombre)
                        // this.img = data.meals[0].strMealThumb;
                        // for (var i=1; i<21; i++){ 
                        //     if (data.meals[0]["strIngredient"+i] != null)
                        //         if (data.meals[0]["strIngredient"+i].trim()!="")
                        //             this.ingredientes[i-1]=data.meals[0]["strIngredient"+i].trim() +" "+data.meals[0]["strMeasure"+i].trim()
                        //         else
                        //             this.ingredientes[i-1]=""
                        // }
                        // console.log(this.ingredientes)
                        // this.preparacion=data.meals[0].strInstructions

                    } catch (error) {
                        console.log({ error });
                    }
                },
            },
        };

        

        /*ASIGNACION DEL CORE A METODO DE VUE*/
        const app = createApp(recetasMenu);

        /*MONTADO DEL PROYECTO*/
        app.mount("#appMenu");
