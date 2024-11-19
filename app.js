
const menu = [
    {
        img:'icon1.svg',
        name:'breakfest'
    },
    {
        img:'icon.svg',
        name:'lunch'
    },
    {
        img:'dinner.svg',
        name:'binner'
    },
    {
        img:'dessert.svg',
        name:'dessert'
    },
    {
        img:'q-bite.svg',
        name:'quick bite!'
    },
]

const menuEl = document.getElementById('menu')



const recipes_card = document.querySelector('.recipes-cards')
const recipes_buttons = document.querySelector('.recipes-buttons')





const buttonsName = [
    "Starter",
    "Beef",
    "Breakfast",
    "Chicken",
    "Pasta",
    "Dessert",
    "Vegan",
]
let btnIndex = 0
let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='
function renderBtn(){
    recipes_buttons.innerHTML = buttonsName.map( (btn ,index)=> {
        let clas = btnIndex == index ? "active" : ""
        return `<button class="${clas}">${btn}</button>`
    }).join("")
    recipes_buttons.querySelectorAll('button').forEach( (btn, i )=> {
        btn.addEventListener('click', () => {
            fetch(url + btn.innerText)
                .then(res => res.json())
                .then(({meals }) => {
                    console.log("meals: ", meals);
                    recipes_card.innerHTML = meals.map( f => {
                        return `
                            <div class="card">
                                <div class="card-img">
                                    <img src="${f.strMealThumb}" alt="">
                                </div>
                                <div class="card-text">
                                    <h4>${f.strMeal.slice(0,20)}</h4>
                                    <p>Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</p>
                                    <div>
                                        <p>40 Min - easy prep - 3 serves</p>
                                        <button onclick="info(${f.idMeal})">view recipe</button>
                                    </div>
                                </div>
                            </div>
                        `
                    }).join('')
                })

            btnIndex = i
            renderBtn()
        })
    })
}

function info(foodId){
    window.location.href = 'food-info.html?id='+ foodId
}

renderBtn()



menuEl.innerHTML = menu.map( m => {
    return`
        <div>
            <img src="../img/${m.img}" alt="">
            <h4>${m.name}</h4>
        </div>
    `
}).join('')




