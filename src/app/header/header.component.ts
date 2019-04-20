import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  today = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  feature: string = 'Improves time management and focus';

  toggle: boolean = false;

  getFormat() {
    return this.toggle ? 'short' : 'medium'
  }

  constructor() {

  }

  ngOnInit() {
  }

}
