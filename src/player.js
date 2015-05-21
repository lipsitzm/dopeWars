import {bindable} from 'aurelia-framework';

export class Player {
  @bindable player_info = null;
  modalTitle = "Pay Debt";
  modalView = "modalBodies/payDebt";

  cancel() {
    // Nothing to do when cancelling out of the pay debt modal...
  }
}
