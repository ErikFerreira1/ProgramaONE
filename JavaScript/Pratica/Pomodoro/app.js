let timer;
let minutes = 25; // Tempo padrão: 25 minutos
let seconds = 0;
let isRunning = false;

const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const timerDisplay = document.getElementById("timer-display");

function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
    startButton.textContent = "Pause";
  } else {
    clearInterval(timer);
    isRunning = false;
    startButton.textContent = "Resume";
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  startButton.textContent = "Start";
  minutes = 25;
  seconds = 0;
  updateDisplay();
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isRunning = false;
    // Você pode adicionar um som de notificação aqui
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.textContent = `${displayMinutes}:${displaySeconds}`;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

// Inicializa o display
updateDisplay();
