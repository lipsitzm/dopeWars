import {inject, computedFrom} from 'aurelia-framework';
import {DrugList} from './drugList';

@inject(DrugList)
export class City {
  // TODO: Make these privates but not statics / in a closure outside of the class... http://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
  name = '';

  // Each city maintains it's own drugList so that it can manipulate thresholds as it sees fit
  constructor(drugList){
    this.DrugList = drugList || new DrugList(); // TODO: Figure out why this isn't being injected correctly :-(
  }

  get Name() {
    return this.name;
  }

  set Name(n) {
    this.name = n;
  }

  Update() {
    this.DrugList.Update();
  }
}
