
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id, '----id----');

if (id) {
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id)
    .then((res) => res.json())
    .then(({ meals }) => {
        if (meals && meals.length > 0) {
            const meal = meals[0];

            document.querySelector('.lamb h2').textContent = meal.strMeal;
            document.querySelector('.lamb img').src = meal.strMealThumb;

            document.querySelector('.lamb3 p').textContent = meal.strInstructions;

            const ingredientsList = document.querySelector('.lamb4 p');
            ingredientsList.innerHTML = ''; 
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];

                if (ingredient) {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${ingredient} - ${measure}`;
                    ingredientsList.appendChild(listItem);
                }
            }

            // Меры
            const measuresList = document.querySelector('.lamb5 p');
            measuresList.innerHTML = '';
            for (let i = 1; i <= 20; i++) {
                const measure = meal[`strMeasure${i}`];
                if (measure) {
                    const listItem = document.createElement('li');
                    listItem.textContent = measure;
                    measuresList.appendChild(listItem);
                }
            }
        } else {
            console.log('Recipe not found');
        }
    })
    .catch((err) => {
        console.error('Error fetching the recipe:', err);
    });
}