let tiempoRestante = 0;
let temporizador;

const playButton = document.getElementById("playButton");
const stopButton = document.getElementById("stopButton");
let playing = false;

const pausePath = `<path d="M26 12c2.209 0 4 1.791 4 4v40c0 2.209-1.791 4-4 4s-4-1.791-4-4V16C22 13.791 23.791 12 26 12zM46 12c2.209 0 4 1.791 4 4v40c0 2.209-1.791 4-4 4s-4-1.791-4-4V16C42 13.791 43.791 12 46 12z"/>`;
const playPath = `<path d="M56.379,30.904c1.774,1.103,2.833,3.008,2.833,5.096s-1.059,3.993-2.832,5.096L22.167,62.362	C21.2,62.964,20.101,63.266,19,63.266c-1.004,0-2.008-0.25-2.915-0.755C14.183,61.454,13,59.444,13,57.267V14.733	c0-2.177,1.183-4.187,3.085-5.245c1.903-1.057,4.234-1,6.083,0.149L56.379,30.904z"/>`;
const start = () => {
    if(playing)
        return pause();
    
    playing = true;
    const playBtn = document.getElementById("playBtn");
    playBtn.innerHTML = pausePath;
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
    const playBtn = document.getElementById("playBtn");
    playBtn.innerHTML = playPath;

    playing = false;
    clearInterval(temporizador);
}

const stop = () => {
    clearInterval(temporizador);
    tiempoRestante = 0;
    console.log("Temporizador detenido y reiniciado");
}
