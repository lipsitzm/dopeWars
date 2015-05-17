import {bindable} from 'aurelia-framework';

export class BuySellChooser {
  @bindable drug = null;
  @bindable drug_count = 0;
  @bindable drug_list_engine = null;

  goToSell() {
    this.drug_list_engine.showSellDialog(this.drug);
  }

  goToBuy() {
    this.drug_list_engine.showBuyDialog(this.drug);
  }
}
