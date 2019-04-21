import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timerStarted: boolean = false;
  signal: EventEmitter<any> = new EventEmitter();


  private myTimer;
  private timeRemaining ;


  startTimer(value) {
    this.timerStarted = true;
    this.signal.emit();

    let deadLine = new Date().getTime() + value * 60 * 1000;

    this.myTimer = setInterval(() => {
      let minutes = "";
      let seconds = "";
      let now = new Date().getTime();
      let t = deadLine - now;
      if (t < 0) {
        this.stopTimer();
      } else {
        let m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((t / 1000) % 60);

        minutes = m < 10 ? '0' + m : m + "";
        seconds = s < 10 ? '0' + s : s + "";

        this.timeRemaining = `${minutes} : ${seconds}`;
        this.signal.emit();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.myTimer);
    this.timerStarted = false;
    this.signal.emit();

  }

  getStatus() {
    return this.timerStarted;
  }

  getFormattedTime(){
    return this.timeRemaining;
  }

  constructor() {
    this.timeRemaining = '00 : 00';

  }
}
