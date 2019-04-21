import { Component, OnInit, Input } from '@angular/core';
import { TimerService } from "../timer.service";
import {  NgForm } from '@angular/forms'

@Component({
  selector: 'app-timer-data',
  templateUrl: './timer-data.component.html',
  styleUrls: ['./timer-data.component.scss']
})
export class TimerDataComponent implements OnInit {

  isTimerOn: boolean;

  initTimer(form: NgForm) {
    let value: number = parseInt(form.controls.minutes.value);
    if (!isNaN(value)) {
      this.timerInterface.startTimer(value);
    } else {
      this.showError('Please Enter Valid Data');
    }
  }

  showError(errorMsg) {
    let inpBox = (document.querySelector('#inpMin') as HTMLTextAreaElement);
    inpBox.value = "";
    inpBox.placeholder = `${errorMsg}`;;
    inpBox.classList.add('error');
    setTimeout(() => {
      inpBox.placeholder = "Enter Minutes";
      inpBox.classList.remove('error');
      inpBox.focus();
    }, 4000);
  }

  stopTimer() {
    if (this.isTimerOn) {
      this.timerInterface.stopTimer();
    }
  }

  constructor(private timerInterface: TimerService) { }

  ngOnInit() {
    this.timerInterface.signal.subscribe(() => {
      this.isTimerOn = this.timerInterface.getStatus();
    }
    )
  }
}
