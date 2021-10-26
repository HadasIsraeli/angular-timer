import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
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
  history: Array<{ name: string, date: string, timeStartedAt: string, timeStopedAt: string, timerStatus: string }> = [];
  fileName = 'Timer-ExcelSheet.xlsx';

  startTimer() {
    this.startSavedTime = new Date();
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
      date: this.startSavedTime.toString().substr(0, 10),
      timeStartedAt: this.startSavedTime.toTimeString().substr(0, 8),
      timeStopedAt: this.endSavedTime.toTimeString().substr(0, 8),
      timerStatus: this.time.toTimeString().substr(0, 8)
    });
    this.resetTimer();
    this.pauseTimer();
    this.timerName = 'Timer';
  }

  addTimer() {

  }

  clearHistory() {
    this.history = [];
  }

  renameTimer(val: string) {
    this.timerName = val;
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}
