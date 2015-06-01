import {inject, bindable} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {EventAggregator} from 'aurelia-event-aggregator';
import {PlayerService} from 'services/playerService';

@inject(Validation, EventAggregator, PlayerService)
export class BuyDrug {
  drug = null;
  buyAmount = null;
  maxBuyAmount = null;
  drugList = null; // Can't get the showing bool val to be passed by reference so I need to pass the whole drugList object :-(

  constructor(validation, eventAggregator, playerService) {
    this.validation = validation.on(this)
      .ensure('buyAmount')
      .containsOnlyDigits()
      .isNotEmpty()
      .isBetween(1, () => { return this.maxBuyAmount});

    this.eventAggregator = eventAggregator;

    this.PlayerService = playerService;
    this.Player = null;
    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });
  }

  activate(model) {
    this.drug = model.Drug;
    this.buyAmount = this.maxBuyAmount = model.MaxBuyAmount;
    this.drugList = model.DrugList;
  }

  buyDrugs() {
    this.validation.validate().then(
      () => {
        this.Player.BuyDrug(this.drug, this.buyAmount);
        this.eventAggregator.publish('drugInBackpackChanged', this.drug);
        this.drugList.showing = false;
      }
    );
  }

  cancel() {
    this.drugList.showing = false;
  }

  /* Figure out why this doesn't work... Can't trigger the Changed call on an inner property. How do you do that?
  model_BuyAmountChanged(newValue) {
    // Need to propagate the total cost back to the wrapper so that it can deal with the results as well as set it to a local
    //  prop so that it can be displayed in the modal as the number to buy is being changed
    console.log('by changed model', model);
    this.model.total_cost = newValue * this.;
  }*/
}
