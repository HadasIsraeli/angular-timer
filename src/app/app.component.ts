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
  savedTime = new Date();
  history: Array<{ name: string, timeSavedAt: string, stopedAt: string }> = [];

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
    this.savedTime = new Date();
    console.log(this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds());
    console.log('time: ' + this.time.toTimeString().substr(0, 8));
    console.log('saved: ' + this.savedTime.toTimeString());
    this.history.push({
      name: this.timerName,
      timeSavedAt: this.savedTime.toTimeString(),
      stopedAt: this.time.toTimeString().substr(0, 8)
    });
    // console.log('history: ' + this.history[0].name + this.history[0].stopedAt + this.history[0].timeSavedAt);

    this.resetTimer();
  }

  addTimer() {

  }

  renameTimer() {

  }
}
