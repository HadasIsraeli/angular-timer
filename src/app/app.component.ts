import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Timer';
  timerName = 'Timer';
  interval: any;
  time = new Date('October 16, 2021 00:00:00');
  startSavedTime = new Date();
  endSavedTime = new Date();
  history: Array<{ name: string, timeStartedAt: string, timeStopedAt: string, timerStatus: string }> = [];

  startTimer() {
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.time.setSeconds(0);
  }

  stopTimer() {
    this.endSavedTime = new Date();
    this.history.push({
      name: this.timerName,
      timeStartedAt: this.startSavedTime.toString().substr(0,25),
      timeStopedAt: this.endSavedTime.toTimeString().substr(0, 8),
      timerStatus: this.time.toTimeString().substr(0, 8)
    });
    this.resetTimer();
    this.pauseTimer();
  }

  addTimer() {

  }

  renameTimer() {

  }
}
