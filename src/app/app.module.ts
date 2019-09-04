import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TimerAdderComponent } from './timer-adder/timer-adder.component';
import { TimerRunninglistComponent } from './timer-runninglist/timer-runninglist.component';
import { TimerStoppedlistComponent } from './timer-stoppedlist/timer-stoppedlist.component';
import { TimeRecorderComponent } from './time-recorder/time-recorder.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerAdderComponent,
    TimerRunninglistComponent,
    TimerStoppedlistComponent,
    TimeRecorderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
