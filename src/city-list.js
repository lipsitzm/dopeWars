import {bindable} from 'aurelia-framework';

export class CityList{
  @bindable cities = null;
  @bindable drugs = null;
  @bindable current_city_index = null;

  constructor(){
  }

  UpdateCurrentCity(idx) {
    this.current_city_index = idx;
  }
}
