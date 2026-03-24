const menuOptions = [
{ name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
{ name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
{ name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
{ name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
{ name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
{ name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
]

const list = document.querySelector('ul')
const buttonAll = document.querySelector('.show-all')
const buttonVegan = document.querySelector('.show-vegan')
const buttonMap = document.querySelector('.show-map')
const buttonFilter = document.querySelector('.show-filter')
let myLi = ''


function format(value) {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
}

function showAll(produto) {
    myLi = ''

    produto.forEach(produto => {
        myLi +=  `
        <li class="bugar">
            <img src="${produto.src}" alt="${produto.name}">
            <p>${produto.name}</p>
            <p class="valor">R$ ${format(produto.price)}</p>
        </li>
        `
    })

    list.innerHTML = myLi
}

function mapAll() {
    // Added curly braces {} to properly define the new object
    const newArray = menuOptions.map(produto => ({
        ...produto,
        price: produto.price * 0.9 // Applies 10% discount
    }));
    
    // Pass the new array to the function
    showAll(newArray);
}


function filterAll() {
    const total = menuOptions.reduce((acc, produto) => acc + produto.price, 0)
    list.innerHTML = `<li><p class="total">Total: R$ ${format(total)}</p></li>`
}

function showVegan() {
    const veganOptions = menuOptions.filter(produto => produto.vegan)
    showAll(veganOptions)
}

buttonAll.addEventListener('click', () => showAll(menuOptions))
buttonMap.addEventListener('click', mapAll)
buttonFilter.addEventListener('click', filterAll)
buttonVegan.addEventListener('click', showVegan)

for (let i = 0; i <= menuOptions.length; i++) {
    const menuItem = menuOptions[i];
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');
    menuItemElement.innerHTML = `
    <li class="bugar">
        <img src="${menuItem.src}" alt="${menuItem.name}">
        <p>${menuItem.name}</p>
        <p class="valor">R$ ${menuItem.price.toFixed(2)}</p>
    </li>
    `;
    document.getElementById('menu').appendChild(menuItemElement);
}
