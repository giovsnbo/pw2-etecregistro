/*
  EXERCÍCIO: Seleção e Manipulação do DOM
  ----------------------------------------
  Objetivo: praticar como selecionar elementos do DOM e alterar
  sua aparência.

  Complete cada exercício abaixo escrevendo o código onde indicado.
*/

// ------------------------------------------------------
// Exercício 1
// Selecione o elemento com id "titulo" e:
// - altere o texto para "Título Alterado"
// - mude a cor do texto para azul
// ------------------------------------------------------

const titulo = document.getElementById("titulo");
titulo.innerText = "Título Alterado";
titulo.style.color = "blue";

// ------------------------------------------------------
// Exercício 2
// Selecione TODOS os elementos com a classe "paragrafo"
// e mude a cor de fundo (background-color) de todos eles para amarelo.
// Dica: use querySelectorAll e um laço (for ou forEach) para
// percorrer os elementos, já que são vários.
// ------------------------------------------------------
const paragrafos = document.getElementsByClassName("paragrafo");

// Alterando a cor de fundo acessando os elementos da coleção pelo índice
paragrafos[0].style.backgroundColor = "yellow";
paragrafos[1].style.backgroundColor = "yellow";

// ------------------------------------------------------
// Exercício 3
// Selecione o elemento com id "caixa" e:
// - altere o innerText para "Conteúdo atualizado!"
// - mude a borda (border) para "3px solid red"
// - mude o tamanho da fonte (fontSize) para "20px"
// ------------------------------------------------------

const caixa = document.getElementById("caixa");
caixa.innerText = "Conteúdo atualizado!";
caixa.style.border = "3px solid red";
caixa.style.fontSize = "20px";

// ------------------------------------------------------
// Exercício 4
// Selecione os itens da lista (id "lista")
// usando querySelector e mude seu texto para "Item alterado"
// ------------------------------------------------------

const itemLista = document.querySelector("#lista li");
itemLista.innerText = "Item alterado";

// ------------------------------------------------------
// Exercício 5
// Selecione o botão com id "botao" e:
// - altere o texto para "Clique aqui"
// - mude a cor de fundo para verde
// - mude a cor do texto para branco
// ------------------------------------------------------

const botao = document.getElementById("botao");
botao.innerText = "Clique aqui";
botao.style.backgroundColor = "green";
botao.style.color = "white";