import {bindable} from 'aurelia-framework';

export class BuyDrug {
  @bindable drug_name = null;
  @bindable drug_cost = null;
  @bindable buy_amount = null;

  constructor(){
  }

  activate(model) {
    this.drug_name = model.Name;
    this.drug_cost = model.Price;
  }
}
