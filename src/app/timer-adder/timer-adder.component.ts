import { Component, OnInit, Input } from '@angular/core';
import { Timer } from '../timer';
import { TimerService } from '../timer.service';
import { catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-timer-adder',
  templateUrl: './timer-adder.component.html',
  styleUrls: ['./timer-adder.component.css']
})
export class TimerAdderComponent implements OnInit {
  @Input() label: string = '';
   
  constructor(private timerService: TimerService) { }

  ngOnInit() {
  }

  addTimer(name: string) {
    const timer: Timer = new Timer(name);

    this.timerService.addTimer(timer)
      .subscribe();
  }

}
