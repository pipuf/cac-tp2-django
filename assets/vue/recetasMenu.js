
        import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
        const URL_API = "https://www.themealdb.com/api/json/v1/1/"

        /*CREACION DEL CORE*/

        const recetasMenu = {
            data: function () {
                return {
                    /*variables de inicializacion*/
                    categories: null,
                    mealList: null,
                    mealDetails: [],
                };
            },
            created: function() {
                this.getCategories()
                this.handlerRecetasMenu("beef") 
            },
            methods: {
                getCategories: async function (mealID) {
                    try {
                        // Trae todas las recetas de la categoría Seafood
                        let response = await fetch(URL_API+"list.php?c=list")
                        let data = await response.json();
                        this.categories = data.meals;

                    } catch (error) {
                        console.log({ error });
                    }
                }, 


                getMealDetails: async function (mealID) {
                    try {
                        // Trae todas las recetas de la categoría Seafood
                        let response = await fetch(URL_API+"lookup.php?i="+mealID)
                        let data = await response.json();
                        let mealDetalles = data.meals;
                        let mealsLength = this.mealDetails.push(mealDetalles[0].strInstructions)                          
                    } catch (error) {
                        console.log({ error });
                    }
                }, 
                               
                handlerRecetasMenu: async function (categoria) {
                    try {

                        console.log("estoy aca")
                        console.log(categoria)
                        // Trae todas las recetas de la categoría Seafood
                        let response = await fetch(URL_API+"filter.php?c="+categoria);
                        let data = await response.json();
                        this.mealList = data.meals;

                        // let mealsLength = 0
                        console.log(this.mealList)
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