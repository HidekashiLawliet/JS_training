let timerDisplay = document.querySelector('.timerDisplay');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let resetButton = document.querySelector('.reset');
let timer = null;
let elapsedTime = 0;
let startTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    } else {
        console.error('Timer is already running');
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else {
        console.error('Timer is not running');
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    startTime = 0;
    timerDisplay.innerHTML = '00:00:00:00';
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / 1000 / 60 / 60).toString().padStart(2, '0');
    let minutes = Math.floor((elapsedTime / 1000 / 60) % 60).toString().padStart(2, '0');
    let seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, '0');
    let milliseconds = Math.floor((elapsedTime) % 1000).toString().padStart(2, '0');

    timerDisplay.innerHTML = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}