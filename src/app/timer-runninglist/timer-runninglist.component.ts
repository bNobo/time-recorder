import { Component, OnInit } from '@angular/core';
import { Timer } from '../timer';
import { TimerService } from '../timer.service';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-timer-runninglist',
  templateUrl: './timer-runninglist.component.html',
  styleUrls: ['./timer-runninglist.component.css']
})
export class TimerRunninglistComponent implements OnInit {
  timers: Timer[];
  environment: any;

  constructor(private timerService : TimerService) {
    this.environment = environment;
   }

  ngOnInit() {
    this.timerService.getRunningTimers()
      .subscribe(timers => this.timers = timers);
  }

  stopClicked(timer: Timer) {
    this.timerService.stopTimer(timer)
      .subscribe();
  }

}
