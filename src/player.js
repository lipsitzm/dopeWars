import {bindable} from 'aurelia-framework';

export class Player {
  @bindable player_info = null;
  modalTitle = "Pay Debt";
  modalView = "modalBodies/payDebt";
  showing = false;
  that = this;

  showDebtDialog() {
    this.showing = true;
  }
  cancel() {
    this.showing = false;
  }
}
