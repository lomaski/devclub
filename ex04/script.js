let coin = document.querySelectorAll('.coin')
let valor = document.querySelector('.section-input')
let div = document.querySelectorAll('.moeda-div')
let coin1 = coin[0].className
let coin2 = coin[1].className


const moeda = [
    br = [
        'R$',
        'Real',
        'br'
    ],
    usa = [
        'US$',
        'Dolar',
        'eua'
    ],
    euro = [
        '€',
        'Euro',
        'euro'
    ],
    uk = [
        '£',
        'Libra',
        'uk'
    ],
    bi = [
        '₿',
        'Bitcoin',
        'Bitcoin'
    ]
]



function clique(){
    coin1 = coin[0].className
    coin2 = coin[1].className

    num = valor.value

    console.log(coin1+' + '+coin2+' + '+num)
}

function digitei(){
    console.log(coin[0].value)
    console.log(coin[1].value)
    console.log(valor.value)
}


coin[0].addEventListener("click", digitei)
coin[1].addEventListener("click", digitei)