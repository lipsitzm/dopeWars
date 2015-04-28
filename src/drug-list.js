import {bindable} from 'aurelia-framework';

export class DrugList{
  @bindable drugs = null;

  constructor(){
  }

  buyDrug(drugName) {
    console.log('buying', drugName);
  }
}
