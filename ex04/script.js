let coin = document.querySelectorAll('.coin')
let valor = document.querySelector('.section-input')


function clique(){
    console.log(coin[0].value)
    console.log(coin[1].value)
    console.log(valor.value)
    console.log('cliquei!')
}

function digitei(){
    console.log(coin[0].value)
    console.log(coin[1].value)
}


coin[0].addEventListener("click", digitei)
coin[1].addEventListener("click", digitei)