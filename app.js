
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


menuEl.innerHTML = menu.map( m => {
    return`
        <div>
            <img src="../img/${m.img}" alt="">
            <h4>${m.name}</h4>
        </div>
    `
}).join('')
