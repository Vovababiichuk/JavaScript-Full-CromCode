const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.secondsPassed += 1;
        if (this.secondsPassed === 60) {
          this.minsPassed += 1;
          this.secondsPassed = 0;
        }
      }, 1000);
    }
  },
  getTime() {
    return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' : ''}${this.secondsPassed}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.stopTimer();
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

timer.startTimer();

// Затримка для демонстрації роботи таймера
setTimeout(() => {
  timer.getTime(); // Виведе поточний час у форматі mins:seconds
  timer.stopTimer(); // Зупиняє таймер
  timer.getTime(); // Виведе 0:06
}, 6000);
