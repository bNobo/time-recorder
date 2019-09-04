import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput, Subject, Scheduler, fromEvent } from 'rxjs';
import { buffer, debounce, debounceTime, map, throttleTime, throttle, bufferCount, bufferTime, filter, bufferWhen, bufferToggle } from 'rxjs/operators';
import { Stream } from 'stream';

@Component({
  selector: 'app-triple-clic-detector',
  templateUrl: './triple-clic-detector.component.html',
  styleUrls: ['./triple-clic-detector.component.css']
})
export class TripleClicDetectorComponent implements OnInit {
  //clickStream: Subject<MyMouseEvent>;
  clicks$: Observable<Event>;
  multipleClicks$: Observable<number>;

  constructor() {
    //this.clickStream = new Subject<MyMouseEvent>();
  }

  ngOnInit() {
    // this.clicks$ = this.clickStream.pipe(
    //   //debounceTime(1000),

    //   //buffer(this.clickStream),
    //   //bufferCount(3),
    //   bufferTime(1000),      
    //   map(_ => _.length),
    //   //filter(_ => _ >= 2)
    // )

    this.clicks$ = fromEvent(document.getElementById("canvas"), "click");

    this.multipleClicks$ = this.clicks$.pipe(
      buffer(this.clicks$.pipe(throttleTime(500))),
      map(_ => _.length)
    );

    this.multipleClicks$.pipe(filter(_ => _ == 3))
      .subscribe(_ => console.log("Triple click"));

    this.multipleClicks$.subscribe(_ => console.log(_));

    this.clicks$
      .pipe(
        buffer(this.clicks$.pipe(throttleTime(250))),
        // if array is greater than 1, double click occured
        filter(clickArray => clickArray.length > 1)
      )
      .subscribe(() => this.logDoubleClick());
  }

    logDoubleClick()
    {
      console.log('Double Click!')
    }

  // onClick()
  // {
  //   this.clickStream.next(new MyMouseEvent());
  // }

}
