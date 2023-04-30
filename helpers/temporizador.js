let tiempoRestante = 0;
let temporizador;

const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");

const pausePath = ``;
const start = () => {
    const tiempoMinutos = document.getElementById("inputMins").value;
    tiempoRestante = tiempoMinutos * 60;

    temporizador = setInterval(() => {
        tiempoRestante--;
        console.log(tiempoRestante);

        if (tiempoRestante === 0) {
            detenerTemporizador();
        }
    }, 1000);
}

const pause = () => {
    clearInterval(temporizador);
}

const stop = () => {
    clearInterval(temporizador);
    tiempoRestante = 0;
    console.log("Temporizador detenido y reiniciado");
}
