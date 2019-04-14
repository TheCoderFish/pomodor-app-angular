import { Component, OnInit } from '@angular/core';
import { TimerService } from "../timer.service";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timerStarted: boolean = this.time.timerStarted;
  mm: string = this.time.minutes;
  ss: string = this.time.seconds;

  constructor(private time: TimerService) {

  }

  ngOnInit() {
    this.time.timerEmitter.subscribe(
      (x)=>{
        this.mm = this.time.getMinutes();
        this.ss = this.time.getSeconds();
        this.timerStarted = this.time.getStatus();
      })

  }
}
