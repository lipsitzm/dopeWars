import {bindable} from 'aurelia-framework';

export class SellDrug{
  @bindable drug_name = null;
  @bindable drug_cost = null;
  @bindable buy_amount = null;

  constructor(){
  }
}
/**
 * Created by Mike on 4/29/2015.
 */
