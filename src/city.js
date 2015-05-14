import {bindable} from 'aurelia-framework';

export class City {
  @bindable city_info = null;
  @bindable drug_list = null;
  @bindable drugs_available = false;

  constructor(){
  }
}
