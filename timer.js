let time = 25 * 60; // 25 minutes in seconds
let timerInterval = null;
let isRunning = false;

const timerDisplay = document.getElementById("timer");

function updateDisplay() {
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timerInterval = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        alert("Time's up! Take a break! 🍵");
      }
    }, 1000);
  }
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  pauseTimer();
  time = 25 * 60;
  updateDisplay();
}

updateDisplay(); // Initial display
