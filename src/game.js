import {inject} from 'aurelia-framework';
import {CityList} from './cityList';

@inject(CityList)
export class GameEngine {

  constructor(cityList){
    this.Cities = cityList.Cities;
    this.currentCity = this.Cities[0];
    this.currentCity.Update();
  }

  move(idx) {
    this.currentCity = this.Cities[idx];
    this.currentCity.Update();
  }
}
