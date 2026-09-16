//Capturando o elemento da DOM
const caixaMagica = document.getElementById('caixaMagica');

//"Escutando" os eventos realizados com os elementos do DOM 
caixaMagica.addEventListener('mouseenter', entradaMouse)
caixaMagica.addEventListener('mouseleave', saidaMouse)
caixaMagica.addEventListener('click', clickMouse)


//Criando uma function 
function entradaMouse() {
    caixaMagica.innerText = "Olá Giovanna ;)";
    caixaMagica.style.backgroundColor = "blue";
}

function saidaMouse() {
    caixaMagica.innerText = "Tchau, até breve! ;(";
    caixaMagica.style.backgroundColor = "red";
}

function clickMouse() {
    caixaMagica.innerText = "Interaja com a caixa!";
    caixaMagica.style.backgroundColor = "purple";
}

