//JAVASCRIPT 

//Selecionado elemento pela tag 
const p0 = window.document.getElementsByTagName('p')[0];

//Alterando as características do elemento
p0.style.color = "yellow";
p0.innerText = "Mudei o texto =)"
const p1 = document.getElementsByTagName("p")[1];
p1.style.color = "black";

//Capturando o corpo do site 
const corpoSite = window.document.body

//Mudando a cor de fundo do site 
corpoSite.style.backgroundColor = "#fea0d2";

//Acessando o conteúdo de um elemento DOM 
document.write(`<br> No 2° parágrafo do site está escrito asssim : ${p1.innerText}`)

const paraf = document.getElementsByTagName("p")[2];
paraf.style.color = "red";

const div = document.getElementById("titulo")
div.style.backgroundColor = "#ac8fe5";

const botoes = document.getElementsByName("botao");

const headers = document.getElementsByClassName("header");

const divtopo = document.querySelector("#topo");