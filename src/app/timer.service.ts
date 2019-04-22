import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timerStarted: boolean = false;
  private timerCompleted : boolean = false;
  signal: EventEmitter<any> = new EventEmitter();


  private myTimer;
  private timeRemaining;


  startTimer(value) {
    let totalSecs = value * 1;

    let minutes = "";
    let seconds = "";

    //this.timerCompleted = false;
    this.timerStarted = true;
    this.signal.emit();


    this.myTimer = setInterval(() => {
      if (totalSecs < 0) {
        this.stopTimer();
      } else {
        let m = Math.floor(totalSecs / 60);
        let s = totalSecs % 60;
        minutes = m < 10 ? '0' + m : m + "";
        seconds = s < 10 ? '0' + s : s + "";

        this.timeRemaining = `${minutes} : ${seconds}`;
        this.signal.emit();
        totalSecs--;
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.myTimer);
    this.timerStarted = false;
    this.timerCompleted = true;
    this.signal.emit();

  }

  getStatus() {
    return this.timerStarted;
  }

  getCompleted(){
    return this.timerCompleted;
  }

  getFormattedTime() {
    return this.timeRemaining;
  }

  constructor() {
    this.timeRemaining = '00 : 00';

  }
}
