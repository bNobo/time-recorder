import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Timer } from './timer';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  runningTimers: Timer[] = [];
  stoppedTimers: Timer[] = [];

  lastId = 2;
  totalDuration: Date;
  totalElapsed: number = 0;

  constructor() { }

  getRunningTimers() : Observable<Timer[]> {
    return of(this.runningTimers);
  }

  getStoppedTimers() : Observable<Timer[]> {
    return of(this.stoppedTimers);
  }

  addTimer(timer: Timer) : Observable<Timer>
  {
    timer.id = this.lastId++;
   
    this.runningTimers.push(timer);

    return of(timer)
      .pipe(tap(_ => _.start()))
      ;
  }

  stopTimer(timer: Timer) : Observable<Timer>
  {
    const index = this.runningTimers.indexOf(timer);

    if(index > -1) {
      this.runningTimers.splice(index, 1);
    }

    this.stoppedTimers.push(timer);

    this.totalElapsed += timer.duration.getSeconds() + timer.duration.getMinutes() * 60 + timer.duration.getHours() * 3600

    this.totalDuration = new Date(0, 0, 0, 0, 0, this.totalElapsed);

    return of(timer)
      .pipe(tap(_ => _.stop()));
  }

  computeTotalDuration() : Observable<number>
  {
    return of(this.stoppedTimers
        .map(timer => timer.duration.getDate())
        .reduce((previous, current) => previous + current));
  }

  // getTotalDuration() : Observable<number> {
  //   return of(this.totalDuration);
  // }
}
