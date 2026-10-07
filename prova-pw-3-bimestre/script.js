const inputCPU = document.querySelector('input#cpu');
const inputMemoria = document.querySelector('input#memoria');
const inputTemperatura = document.querySelector('input#temperatura');

const resultadoCpu = document.querySelector('div#resultadoCpu');
const resultadoMemoria = document.querySelector('div#resultadoMemoria');
const resultadoTemperatura = document.querySelector('div#resultadoTemperatura');


function resultadoCpu() {
    const cpu = String(inputCPU.value)
    if (inputCPU <= 60) {
        resultadoCpu.innerHTML = `CPU: <strong> ${inputCPU} % - Normal <strong>`
    }
    else if (inputCPU < 70) {
        resultadoCpu.innerHTML = `CPU: <strong>${inputCPU}% - Atenção </strong>`;
    }
    else {
        resultadoCpu.innerHTML = `CPU: <strong>${inputCPU}% - Crítico </strong>`;
    }
}

//----------------------------------------------------------------------------------------

function resultadoMemoria() {
    const memoria = String(inputMemoria.value)
    if (inputMemoria <= 60) {
        resultado.innerHTML = `Memória <strong>${inputMemoria}% - Normal</strong>`;

    }
    else if (inputMemoria < 70) {
        resultado.innerHTML = `Memória: <strong>${inputMemoria}% - Atenção </strong>`;
    }
    else {
        resultado.innerHTML = `Memória: <strong>${inputMemoria}% - Crítico </strong>`;
    }
}

//----------------------------------------------------------------------------------------

function resultadoTemperatura() {
    const temperatura = String(inputTemperatura.value)
    if (inputTemperatura <= 60) {
        resultadoTemperatura.innerHTML = `Temperatura: <strong>${inputTemperatura}% - Normal </strong>`;

    }
    else if (inputTemperatura < 70) {
        resultadoTemperatura.innerHTML = `Temperatura: <strong>${inputTemperatura}% - Atenção </strong>`;
    }
    else {
        resultadoTemperatura.innerHTML = `Temperatura: <strong>${inputTemperatura}% - Crítico </strong>`;
    }
}

//----------------------------------------------------------------------------------------

function reiniciar() {
    resultado.innerHTML = `Resultado: <strong> </strong>`;
    inputCPU.value = ``;
    inputMemoria.value = ``;
    inputTemperatura.value = ``;

}
