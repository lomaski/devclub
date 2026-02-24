/*
    document -> HTML

    getElementById -> Trás UM-elemento pelo-ID
    getElementByClassName -> Trás TODOS os elementos com essa classe
    getElementByTagName -> Trás TODOSs elementos com essa TAG
    getElementByName -> Trás TODOS entos com esse NAME

    querySelector--> Trás UM-elemento, O PRIMEIRO que encontrar
    querySelectorAll -> Trás TODOS os elementos que encontrar

    Alterando e Acessando textos
    textContent -> Pega todo o conteúdo
    innerText -> Pega APENAS o texto
    innerHTML -> Permite adicionar HTML texto
*/

const input = document.getElementById("main-input")

const elementos = document.getElementsByClassName("paragraph-js")

const tag = document.getElementsByTagName("h1")

const name = document.getElementsByName("h1")

const selector = document.querySelector("p") //. ou #

const all = document.querySelectorAll("#main-input")

//console.log(selector.textContent) //so HTML
//console.log(selector.innerText) // leva em conta o CSS
//console.log(selector.innerHTML) // trás tudo

/* Evento */

const input1 = document.querySelector('#main-input');
const acho = document.querySelector('.acho');

function clique() {
    // Pegamos o valor NO MOMENTO do clique
    const itemx = input1.value; 
    console.log("Elemento input:", input1);
    console.log("Valor digitado:", itemx);
    console.log("Elemento clicado:", acho);
    acho.innerHTML = itemx; 
}

function digitei() {
    // Pegamos o valor NO MOMENTO da digitação
    // Certifique-se que o ID no HTML é 'input' ou '#main-input'
    let texto = document.querySelector('#main-input').value; 
    //console.log("Texto atual:", texto);
}

const select = document.querySelector('select')
const button = document.querySelector('.main-button')

function troqueiValor(event){
    console.log(event)
}

//select.addEventListener('change', function(){})

select.addEventListener('change', troqueiValor())

input1.addEventListener('keypress', troqueiValor())