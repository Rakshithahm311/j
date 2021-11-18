const search_meal = document.getElementById("submit")
const search = document.getElementById('search_meal')
const single_ml = document.getElementById('single-meal')
const result_heading = document.getElementById('result-heading')
const meals = document.getElementById('meals')


function search_ml(e) {
    e.preventDefault();
    single_ml.innerHTML = " "
    meals.innerHTML = " "
    const term = search.value

    if (term.trim()) {
        console.log(term)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => {
                return res.clone().json()

            })
            .then(data => {
                
                result_heading.innerHTML = `<h2>the seach value ${term}</h2>`
                data.meals.forEach(element => {

                    var meal_name = document.createElement('div')
                    meal_name.classList = element.idMeal + " " + "meal_name"
                    
                    var img = document.createElement('img')
                    img.src = element.strMealThumb
                    meal_name.appendChild(img)

                    meals.appendChild(meal_name)






                });
            })
    } else {
        alert("please enter meal value")
    }

}

function single_meal_des(e) {
    single_ml.innerHTML = " "
    e.preventDefault()
    console.log(e.path[1].classList)
    meal_id=parseInt(e.path[1].classList[0])
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal_id}`)
            .then(res => {
                return res.clone().json()

            }).then(data =>{
                data.meals.forEach(element=>{
                    console.log(data)
                    var img = document.createElement('img')
                    img.src = element.strMealThumb
                    single_ml.appendChild(img)
                    var text_elem = document.createElement('div')
                    text_elem.id="strMeal"
                    text_elem.innerHTML = element.strMeal 
                    single_ml.appendChild(text_elem)
                    var meal_area = document.createElement('div')
                    meal_area.id="meal_area"
                    meal_area.innerHTML = element.strArea 
                    single_ml.appendChild(meal_area)

                    var strInstructions = document.createElement('div')
                    strInstructions.id="strInstructions"
                    strInstructions.innerHTML = element.strInstructions
                    single_ml.appendChild(strInstructions)
                })
         
            })
    
}

//event listeners

search_meal.addEventListener('click', search_ml)

meals.addEventListener('click', single_meal_des)