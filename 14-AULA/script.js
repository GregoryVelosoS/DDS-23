/*
// MOSTRANDO UMA MENSAGEM NO CONSOLE
console.log("Salve rapaziadinha do canal, se inscreve ai")

// CAIXINHA DE ALERTA
// alert("TESTE PRA VER SE FUNCIONA")

// CRIANDO VARIÁVEIS
var nome = "Cristiano" // String ou cadeia
var numero = 7         // Int ou inteiro
var salto = 2.10       // Float ou real
var theBest = true     // bool ou lógico

// FUNÇÃO QUE MOSTRA O TIPO DA VARIÁVEL
console.log(typeof(nome))

console.log("Seu nome é: " + nome)
console.log("Seu número é:", numero)
console.log("Seu pulo é:", salto)
console.log("É o milior? = ", theBest)

nome = 10
console.log(typeof(nome))

// OUTROS TIPOS DE VARIÁVEL
var nulo = null
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

/*
// OPERADORES ARITIMÉTICOS
// +,-,*,/,%

var a = 10 , b = 5

console.log("Soma:", a + b)
console.log("Subtração:", a - b)
console.log("Multiplicação:", a * b)
console.log("Divisão:", a / b)
console.log("Módulo:", a % b)

// OPERADORES LÓGICOS
// E, OU, NÃO
// &&, ||, !

var verdade = true, mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

// OPERADORES RELACIONAIS
// >, <, >=, <=, ==, !=, ===, !==

var x = 65, y = 32, z = "65"
// Verificando apenas o valor
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
// Verificando valor e tipo
console.log(x === z)
console.log(x !== y)

*/
// COMENTEI TODA A PARTE DE OPERADORES

/*
// DESVIOS CONDICIONAIS

// SE = IF 

 var estaVivo = undefined

 // primeira comparação
 if(estaVivo == true){
    console.log("Parabéns, você está vivo")
 }
 // segunda comparação, caso a primeira dê errado
 else if(estaVivo == undefined){
    console.log("Você não tá nada")
 }
 // entra aqui, caso todas as outras comparações deem errado
 else{
    console.log("Infelizmente, você foi de F ☠")
 }

 // SWITCH = ESCOLHA
 var camisa = "Azul"

 switch(camisa){
    case "Azul":
        console.log("Você ganhou um voucher")
    break
    case "Branco":
        console.log("Você ganhou um body splash da Vírginia")
    break
    case "Vermelho":
        console.log("Você ganhou uma Ferrari 3 portas")
    break
    default:
        console.log("Camisa inválida e feia, vá trocar")
    break
 }

 */

 /*
 //COMENTEI TODA A PARTE DE DESVIOS
 
 // PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR
 prompt("Digite seu nome:")

 var time = prompt("Me diga, pra quem você torce?")

 console.log("Seu time é: ", time)

*/
var cx1 = Number(prompt("Caixa 1: "))
var cx2 = Number(prompt("Caixa 2: "))
var cx3 = Number(prompt("Caixa 3: "))

// var cx1 = 30, cx2 = 30, cx3 = 55

if((cx1 < cx2 && cx2 < cx3) || ((cx1 + cx2) <= cx3)){
    console.log("1 viagem necessária");
}
else if((cx1 < cx2 && cx2 == cx3) || (cx1 == cx2 && cx2 < cx3)){
    console.log("2 viagens necessárias");
}
else{
    console.log("3 viagens necessárias");
}