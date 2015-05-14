import {bindable} from 'aurelia-framework';

export class CityList{
  @bindable current_city = null;
  @bindable drugs = null;
  @bindable drugs_available = false;

  constructor(){
  }
}
