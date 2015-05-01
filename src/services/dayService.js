import {DayOption} from 'models/dayOption';

let dayOptions = [
  new DayOption(4),
  new DayOption(30),
  new DayOption(60),
  new DayOption(90),
  new DayOption(120)
];

export class DayService {
  GetDayOptions() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        resolve(dayOptions);
      });
  }
}
