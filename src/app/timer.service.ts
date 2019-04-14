import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  myTimer;
  deadLine: number;
  minutes: string;
  seconds: string;
  initTime : number;
  timerStarted: boolean = false;
  timerEmitter: EventEmitter<any> = new EventEmitter();

  startTimer(value) {
    this.timerStarted = true;
    this.timerEmitter.emit(this.timerStarted);

    this.deadLine = new Date().getTime() + value * 60 * 1000;

    this.myTimer = setInterval(() => {
      let now = new Date().getTime();
      let t = this.deadLine - now;
      if (t < 0) {
        this.stopTimer();
      } else {
        let m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((t / 1000) % 60);

        this.minutes = m < 10 ? '0' + m : m + "";
        this.timerEmitter.emit(this.minutes);

        this.seconds = s < 10 ? '0' + s : s + "";
        this.timerEmitter.emit(this.seconds);
      }
    }, 1000);
  }

  stopTimer() {
    this.timerStarted = false;
    this.timerEmitter.emit(this.timerStarted);
    clearInterval(this.myTimer)
  }

  getMinutes() {
    return this.minutes;
  }

  getSeconds() {
    return this.seconds;
  }

  getStatus() {
    return this.timerStarted;
  }

  constructor() {
    this.minutes = "00";
    this.seconds = "00";
  }
}
