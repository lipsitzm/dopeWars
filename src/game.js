import {inject} from 'aurelia-framework';
import {CityList} from './cityList';

@inject(CityList)
export class GameEngine {

  constructor(cityList){
    this.CityList = cityList;
    this.currentCity = this.CityList.Cities[0];
    this.currentCity.Update();
  }

  move() {
    let newCityIdx = Math.floor(Math.random() * this.CityList.Cities.length);
    this.currentCity = this.CityList.Cities[newCityIdx];
    this.currentCity.Update();
  }
}
