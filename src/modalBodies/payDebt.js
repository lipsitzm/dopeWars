import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {PlayerService} from 'services/playerService';

@inject(Validation, PlayerService)
export class BuyDrug {
  paymentAmount = 0;

  constructor(validation, playerService) {
    this.validation = validation.on(this)
      .ensure('paymentAmount')
      .containsOnlyDigits()
      .isNotEmpty()
      .isBetween(1, () => { return this.Player.LoanOutstanding });

    this.PlayerService = playerService;
    this.Player = null;
    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });
  }

  payDebt() {
    this.validation.validate().then(
      () => {
        this.Player.PayOffLoan(this.paymentAmount);
      }
    );
  }
}
