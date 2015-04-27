import {bindable} from 'aurelia-framework';

export class City {
  @bindable city_info = null;
  @bindable drug_list = null;

  // TODO: Make these privates but not statics / in a closure outside of the class... http://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes

  constructor(){
  }
}
