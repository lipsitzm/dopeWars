import {CityInfo} from '../models/cityInfo';

let cityInfos = [
  new CityInfo("Dublin", .3),
  new CityInfo("London", .4),
  new CityInfo("Paris", .4),
  new CityInfo("Amsterdam",.05),
  new CityInfo("Munich", .3),
  new CityInfo("Prague", .2),
  new CityInfo("Rome", .25),
  new CityInfo("Ibiza", 0)
];

export class CityService {
  GetCityList() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
          resolve(cityInfos);
      });
  }
}
