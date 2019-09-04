import { Component, OnInit, Input } from '@angular/core';
import { Timer } from '../timer';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-time-recorder',
  templateUrl: './time-recorder.component.html',
  styleUrls: ['./time-recorder.component.css']
})
export class TimeRecorderComponent implements OnInit {
  title = 'time-recorder';
  @Input() stoppedTimers: Timer[];

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    this.timerService.getStoppedTimers()
      .subscribe(timers => this.stoppedTimers = timers);
  }

}
