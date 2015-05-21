import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {PlayerService} from 'services/playerService';

@inject(Validation, PlayerService)
export class BuyDrug {
  paymentAmount = 0; // TODO: Make this equal the amount of cash the player has or the debt amount left, whichever is smaller
  // Don't know how to make it happen on the 2nd opening of the modal which is why I'm not doing it now...

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
