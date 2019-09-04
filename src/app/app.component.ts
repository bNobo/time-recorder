import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number;
  b: number;
  c: number = 1;
  d: number = 1;
  input: number = 5;

  constructor() {
    const numberPromise = new Promise(resolve => resolve(this.input));

    numberPromise.then(value => this.a = +value);

    numberPromise.then(value => this.b = +value);

    setInterval(() => this.c++, 1000);

    const secondsObservable = new Observable((observer) => {
      let i = this.d;
      setInterval(() => {
        observer.next(++i);
      }, 1000);
    });

    secondsObservable.subscribe(value => this.d = +value);

    const getCurrentCity = () => {
      /* Return an already resolved promise. */
      return Promise.resolve('Lyon');
    };

    const getWeatherInfo = (city: any) => {
      /* Return an already resolved promise. */
      return Promise.resolve({
        temperature: city.length * 6
      });
    };

    const main = async () => {

      try {

        const city = await getCurrentCity();
        const weatherInfo = await getWeatherInfo(city);

        console.log(`${city}: ${weatherInfo.temperature}`);

      }
      catch (error) {
        console.error(error);
      }

    };

    main()
      .then(() => console.log('Finished'))
      .catch(() => console.error('Failed!'));

  }



  // main()
  //   .then(() => console.log('Finished'))
  //   .catch (() => console.error('Failed!'));
}
