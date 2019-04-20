import { Component, OnInit, Input } from '@angular/core';
import { TimerService } from "../timer.service";
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-timer-data',
  templateUrl: './timer-data.component.html',
  styleUrls: ['./timer-data.component.scss']
})
export class TimerDataComponent implements OnInit {

  isTimerOn: boolean;
  @Input() inputText: string;

  initTimer(form: NgForm) {
    if (this.time.validateTimer(this.inputText)) {
      this.time.startTimer(parseInt(this.inputText));
    }else{
      this.showError();
    }

  }

  showError() {
    let inpBox = (document.querySelector('#inpMin') as HTMLTextAreaElement);
    inpBox.placeholder = 'Please Enter Valid Data';
    inpBox.classList.add('error');
    setTimeout(() => {
      inpBox.placeholder = "Enter Minutes";
      inpBox.classList.remove('error');
    }, 4000);
  }

  pauseTimer() {
    if (this.isTimerOn) {
      this.time.stopTimer();
    }
  }

  constructor(private time: TimerService) { }

  ngOnInit() {
    this.time.timerEmitter.subscribe(() => {
      this.isTimerOn = this.time.getStatus();
    }
    )
  }
}
