import {inject, bindable} from 'aurelia-framework';
import {DrugList} from './drug-list';

@inject(DrugList)
export class City {
  @bindable city = null;

  // TODO: Make these privates but not statics / in a closure outside of the class... http://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes

  // Each city maintains it's own drugList so that it can manipulate thresholds as it sees fit
  constructor(drugList){
    this.DrugList = drugList;
  }

  Update() {
    console.log('updating prices');
    this.DrugList.Update(this);
  }
}
