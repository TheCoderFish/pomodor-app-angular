import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms'

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { HeaderComponent } from './header/header.component';
import { TimerDataComponent } from './timer-data/timer-data.component';
import { TimeformatterPipe } from './header/timeformatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    HeaderComponent,
    TimerDataComponent,
    TimeformatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
