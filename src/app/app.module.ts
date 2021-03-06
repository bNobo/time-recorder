import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { TimerAdderComponent } from './timer-adder/timer-adder.component';
import { TimerRunninglistComponent } from './timer-runninglist/timer-runninglist.component';
import { TimerStoppedlistComponent } from './timer-stoppedlist/timer-stoppedlist.component';
import { TimeRecorderComponent } from './time-recorder/time-recorder.component';
import { TripleClicDetectorComponent } from './triple-clic-detector/triple-clic-detector.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TimerAdderComponent,
    TimerRunninglistComponent,
    TimerStoppedlistComponent,
    TimeRecorderComponent,
    TripleClicDetectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
