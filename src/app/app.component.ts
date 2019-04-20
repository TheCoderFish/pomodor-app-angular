import { Component } from '@angular/core';
import { Title} from '@angular/platform-browser'
import { TimerService } from './timer.service';
import { ObsTimerService } from './obs-timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(private titleService: Title, private time:TimerService, private obsTimer:ObsTimerService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let m = this.time.getMinutes();
    let s = this.time.getSeconds();


    this.time.timerEmitter.subscribe(() => {
      m = this.time.getMinutes();
      s = this.time.getSeconds();
      this.titleService.setTitle(`${m} : ${s}`);
    });



  }
}
