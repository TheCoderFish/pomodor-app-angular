import { Component } from '@angular/core';
import { Title} from '@angular/platform-browser'
import { TimerService } from './timer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(private titleService: Title, private time:TimerService) { }

  ngOnInit(): void {
    this.time.signal.subscribe(() => {
      this.titleService.setTitle(`${this.time.getFormattedTime()}`);
    });
  }
}
