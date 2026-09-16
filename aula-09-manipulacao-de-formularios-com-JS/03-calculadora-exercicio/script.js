const inputN1 = document.querySelector('input#n1');
const inputN2 = document.querySelector('input#n2');
const resultado = document.querySelector('div#resultado');

function somar() {
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const soma = n1 + n2;
    resultado.innerHTML = `Resultado: <strong>${soma}</strong>`;
}

function subtrair() {
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const sub = n1 - n2;
    resultado.innerHTML = `Resultado: <strong>${sub}</strong>`;
}

function multiplicar() {
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    const mult = n1 * n2;
    resultado.innerHTML = `Resultado: <strong>${mult}</strong>`;
}

function dividir() {
    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    
    const div = n1 / n2;
    resultado.innerHTML = `Resultado: <strong>${div}</strong>`;
}

function limpar() {
    resultado.innerHTML = `Resultado: <strong> </strong>`;
    inputN1.value = ``;
    inputN2.value = ``;
}