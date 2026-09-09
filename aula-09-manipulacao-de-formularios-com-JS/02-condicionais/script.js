///Funções da calculadora

    //Capturando as inputs
    const inputN1 = document.querySelector('input#n1');
    const inputN2 = document.querySelector('input#n2');

function somar() {
    //Capturando os valores das inputs
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);

    //somando os valores
    const soma = n1 + n2;

    //exibindo o resultado
    const resultado = document.querySelector('div#resultado');
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>`;
}