    const limite=80;

function calcularVelocidade() {

    const inputVelo = document.querySelector("input#velocidade");
    const velocidade = (inputVelo.value);
    const resultado = document.querySelector("div#resultado");
    resultado.innerHTML = `A velocidade atual do carro é de <strong>${velocidade} Km/h</strong>. O limite da via é de <strong>${limite} Km/h</strong>.`;

    if (velocidade > limite) {
        resultado.innerHTML += `<p> Você está acima do limite de velocidade. <strong>Multa!</strong></p>`;
    }
    else{
        resultado.innerHTML += `<p> Você está dentro do limite de velocidade.</p>`;
    }
}