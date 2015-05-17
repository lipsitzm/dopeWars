import {inject, bindable} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';

@inject(Validation)
export class BuyDrug {
  @bindable drug = null;
  @bindable buy_amount = null;
  @bindable max_can_buy_amount = null;
  @bindable drug_list_engine = null;

  constructor(validation) {
    this.validation = validation.on(this)
      .ensure('buy_amount')
      .containsOnlyDigits()
      .isNotEmpty()
      .isBetween(1, () => { return this.max_can_buy_amount});
  }

  buyDrugs() {
    this.validation.validate().then(
      () => {
        this.drug_list_engine.buyDrugs(this.drug);
      }
    );
  }

  cancel() {
    this.drug_list_engine.loadDrugPanelInfo(this.drug);
  }

  /* Figure out why this doesn't work... Can't trigger the Changed call on an inner property. How do you do that?
  model_BuyAmountChanged(newValue) {
    // Need to propagate the total cost back to the wrapper so that it can deal with the results as well as set it to a local
    //  prop so that it can be displayed in the modal as the number to buy is being changed
    console.log('by changed model', model);
    this.model.total_cost = newValue * this.;
  }*/
}
