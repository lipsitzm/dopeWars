import {bindable} from 'aurelia-framework';

export class BuyDrug {
  @bindable model = null;

  constructor(){
  }

  activate(model) {
    this.model = model;
  }

  /* Figure out why this doesn't work... Can't trigger the Changed call on an inner property. How do you do that?
  model_BuyAmountChanged(newValue) {
    // Need to propagate the total cost back to the wrapper so that it can deal with the results as well as set it to a local
    //  prop so that it can be displayed in the modal as the number to buy is being changed
    console.log('by changed model', model);
    this.model.total_cost = newValue * this.;
  }*/
}
