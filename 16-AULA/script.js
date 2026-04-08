console.log("SALVE O TRICOLOR PAULISTA");

// FUNÇÕES
// Só executa
function teste(){
    console.log("Funcionou aqui");
}
teste()
// mostra o texto do que é aquela função
console.log(teste);

// Com parâmetro
function teste2(parametro){
    console.log("O parametro é:", parametro);
}
teste2("Arroz")

//com retorno
function media(n1,n2){
    var resultado = (n1 + n2) / 2 
    return resultado 
}
console.log(media(3,4));

// Guarda o valor do retorno em uma variável
var mediaFinal = media(8,6)
console.log("Média:", mediaFinal)


// FUNÇÃO ANÔNIMA
// É uma função que não tem nome, e seu retorno é guardado em uma variável

 var mensagem = function(){
        console.log("OI, MEU CHAPA");
 }

 // Mostra o texto da função
 console.log(mensagem);

 // Apenas guarda o texto da função, sem executar
 mensagem

 // Executa a função
 mensagem()


 // ARROW FUNCTION - FUNÇÃO DE SETA
 // Forma mais comum de escrever funções no javascript 
 const multiplicar = (x,y) => { 
    return x * y
 }

 console.log("Sua multiplicação deu:", multiplicar(7,6));
 
 // MAIS MENOR AINDA
 // quando só tem uma linha de retorno, o return pode ser omitido e fica uma linha só
 const dobro = numero => numero * 2 

 console.log("O dobro é:", dobro(4));
 