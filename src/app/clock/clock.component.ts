import { Component, OnInit } from '@angular/core';
import { TimerService } from "../timer.service";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  currentTimeRemaining: string ;
  timerStarted: boolean;

  constructor(private timerInterface: TimerService) {

  }

  ngOnInit() {
    this.timerInterface.signal.subscribe(()=>{
      this.currentTimeRemaining = this.timerInterface.getFormattedTime();
      this.timerStarted = this.timerInterface.getStatus();
    })
  }
}
