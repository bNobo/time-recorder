import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Timer } from '../timer';
import { TimerService } from '../timer.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer-stoppedlist',
  templateUrl: './timer-stoppedlist.component.html',
  styleUrls: ['./timer-stoppedlist.component.css']
})
export class TimerStoppedlistComponent implements OnInit {
  timers: Timer[] = [];
  
  constructor(public timerService: TimerService) { }

  ngOnInit() {
    this.timerService.getStoppedTimers()
      ////.pipe(tap(_ => this.computeTotalDuration(_)))
      .subscribe(timers => this.timers = timers);
  }

  // computeTotalDuration(timers: Timer[])
  // {
  //   if (!timers) return;

  //   this.totalDuration = 1000;

  //   if (timers.length > 0) {
  //     this.totalDuration = 2000;

  //     this.totalDuration = timers
  //       .map(timer => timer.duration.getDate())
  //       .reduce((previous, current) => previous + current);
  //   }    
  // }
}
