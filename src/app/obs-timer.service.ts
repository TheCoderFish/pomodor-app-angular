import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsTimerService {

  oneSec: Observable<number> = timer(0,1000);


  constructor() {

  }
}
