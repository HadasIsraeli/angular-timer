import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Timer';
  timerName='Timer';
  // timeSec: number = 0;
  interval: any;
  time = new Date(+0);
  saveTime: any;

  startTimer() {
    this.interval = setInterval(() => {
      this.time.setSeconds(this.time.getSeconds() + 1);

      // if(this.timeSec < 60) {
      //   this.timeSec++;
      // } else {
      //   this.timeSec = 0;
      // }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resetTimer() {
    this.time.setSeconds(0);
    this.time.setMinutes(0);
    // this.time.setHours(0);
  }

  stopTimer() {

    this.saveTime.getTime(this.interval);
  }

  addTimer(){

  }

  renameTimer(){

  }
}
