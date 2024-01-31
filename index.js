// bloco de código que tem um dever
// bloco de código que tem uma obrigacao
// funcoes -> verbos 
// funcoes -> acoes 
// repetir uma acao varias vezes 

// declarando uma funcao
// function mostrarNome(){
//   let jogador1 = prompt("Digite o nome do jogador 1");
//   let jogador2 = prompt("Digite o nome do jogador 2");
//   let result = prompt("Digite o resultado de 2 + 2");

//   if(parseInt(result) == 4){
//     console.log(jogador1 + " voce acertou")
//   }else{
//     console.log(jogador1 + " voce infelizmente errou")
//   }
// }

//[] criar uma funcao que pegue o nome do usuario e retorne
// no ALERT uma mensagem de cumprimento "Olá @fulano!"


// function cumprimento() {
//     let usuario = prompt("Digite seu nome");
//     alert("Ola, " + usuario);
// };

// cumprimento();

//[] crie 4 funcoes representando as 4 operacoes matematicas
// onde cada funcao vai pegar 2 valores e calcular baseado 
// na operacao definida pelo nome da funcao 

function somar() {
    let valor1 = prompt("Digite o primeiro valor");
    let valor2 = prompt("Digite o segundo valor");
    let result = parseInt(valor1) + parseInt(valor2);
    alert("resultado = " + result);
}
//somar();

function subtrair() {
    let valor1 = prompt("Digite o primeiro valor");
    let valor2 = prompt("Digite o segundo valor");
    if(parseInt(valor1) > parseInt(valor2)){
        result = parseInt(valor1) - parseInt(valor2);
    }else{
       result = parseInt(valor2) - parseInt(valor1);
    }
    alert("resultado = " + result);
}
//subtrair()

function multiplicar() {
    let valor1 = prompt("Digite o primeiro valor");
    let valor2 = prompt("Digite o segundo valor");
    let result = parseInt(valor1) * parseInt(valor2);
    alert("resultado = " + result);
}
//multiplicar()

function dividir() {
    let valor1 = prompt("Digite o primeiro valor");
    let valor2 = prompt("Digite o segundo valor");
    let result = parseInt(valor1) / parseInt(valor2);
    alert("resultado = " + result);
}
//dividir()









// // let somar = 10
// function soma(){
//     let valor1 = prompt("Digite o primeiro valor");
//     let valor2 = prompt("Digite o segundo valor");

//     console.log(parseInt(valor1) + parseInt(valor2));
// }
// soma();

// function soma2(){

// }


// //soma2()
// // // chamar esta funcao
// // //mostrarNome();

// let passos = 0;


// function andar(){
//     passos = passos + 10;
// }

// console.log(passos);

// andar();
// console.log(passos);
// andar();
// console.log(passos);
// andar();
// console.log(passos);
// andar();
// console.log(passos);




