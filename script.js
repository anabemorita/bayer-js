// alert("SEJA BEM VINDO AO MEU SITE") 
// let palavra reservada para declarar uma variável
let botao = document.querySelector("button");
let quadrado = document.querySelector("div");
console.log(quadrado);

// snake case python nome_da_variavel
// camel case javascript nomeDaVariavel

// function nomeDaFuncao () {
//    
// }

// if (condicao) {
//
// }

// = é atribuição
// == e === é de comparação

// 2 == "2"  true
// 2 === "2" false

// function cliqueDoBotao () {
//     if (quadrado.style.backgroundColor === "red") {
//         quadrado.style.backgroundColor = "blue";
//     } else {
//         quadrado.style.backgroundColor = "red";
//     }
// }

// function cliqueDoBotao () {
//     if (quadrado.classList.contains("blue")) {
//         quadrado.classList.remove("blue");
//     } else {
//         quadrado.classList.add("blue");
//     }
// }

function cliqueDoBotao () {
    quadrado.classList.toggle("blue")
}

botao.onclick = cliqueDoBotao;

// --------------------------------------------------------------

// ATIVIDADE 2 - TROCAR CONTEUDO DO ELEMENTO DO HTML

let paragrafo = document.querySelector("p");
console.log(paragrafo)

function adicionarTexto () {
    paragrafo.innerHTML = "Olá Ana, tudo bem?"
}

paragrafo.onclick = adicionarTexto;