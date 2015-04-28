import {CityInfo} from 'models/cityInfo';

let cityInfos = [
  new CityInfo("Dublin", .6),
  new CityInfo("London", .8),
  new CityInfo("Paris", .9),
  new CityInfo("Amsterdam", .1),
  new CityInfo("Munich", .6),
  new CityInfo("Prague", .4),
  new CityInfo("Rome", .5),
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
