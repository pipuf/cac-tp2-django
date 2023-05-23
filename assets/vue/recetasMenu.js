
        import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
        const URL_API = "https://www.themealdb.com/api/json/v1/1/"

        /*CREACION DEL CORE*/

        const recetasMenu = {
            data: function () {
                return {
                    /*variables de inicializacion*/
                    mealList: null,
                    mealDetails: []
                };
            },
            mounted: function() {
                this.handlerRecetasMenu() 
            },
            methods: {
                getMealDetails: async function (mealID) {
                    try {
                        // Trae todas las recetas de la categoría Seafood
                        let response = await fetch(URL_API+"lookup.php?i="+mealID)
                        let data = await response.json();
                        let mealDetalles = data.meals;
                        let mealsLength = this.mealDetails.push(mealDetalles.strInstructions)                          
                        return mealsLength
                    } catch (error) {
                        console.log({ error });
                    }
                }, 
                               
                handlerRecetasMenu: async function () {
                    try {
                        // Trae todas las recetas de la categoría Seafood
                        let response = await fetch(URL_API+"filter.php?c=Seafood");
                        let data = await response.json();
                        this.mealList = data.meals;

                        let mealsLength = 0
                        console.log(this.mealList)
                        this.mealList.forEach(meal => {
                            let mealsLength=this.getMealDetails(meal.idMeal)  
                            console.log(mealsLength)                       
                        });
                        console.log(mealsLength)
                        console.log(this.mealDetails)

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
