/*
1 - string -> texto
2 - numbers -> números
3 - Boolean -> boleando
4 - Object -> objetos
5 - Null & Undefined 
-----

1 - Array 
*/
const texto1 = "aspas duplas"
const texto2 = 'aspas simples'
const texto3 = ` crase `

console.log(texto1)
console.log(texto2)
console.log(texto3)

const myAge = 30
const myString = `Minha idade é ${myAge}` // Template Lite
console.log (myString)

const pessoa = {
    name : 'Ayesha',
    nasc : '02/10/1986',
    address: {
        street: "Rua Condessa de São Joaquim",
        number: 254,
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        state: "SP",
        country: 'Brasil'
    }
}

console.log(pessoa.address.number)

