import {inject} from 'aurelia-framework';
import {CityService} from './cityService';

@inject(CityService)
export class CityList{
  constructor(cityService){
    this.CityService = cityService;
    this.idx = 0;
    this.Cities = [];
  }

  created() {
    this.CityService.GetCityList().then(cities => {
      this.Cities = cities;
    });
  }

  Update() {
    for(let city of this.Cities) {
      city.Update();
    }
  }

  UpdateCurrentCity(idx) {
    this.idx = idx;
    this.Cities[idx].Update();
  }
}
