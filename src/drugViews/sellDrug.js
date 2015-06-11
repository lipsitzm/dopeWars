import {inject, bindable} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {EventAggregator} from 'aurelia-event-aggregator';
import {PlayerService} from '../services/playerService';

@inject(Validation, EventAggregator, PlayerService)
export class SellDrug {
  drug = null;
  sellAmount = null;
  maxSellAmount = null;
  drugList = null; // Can't get the showing bool val to be passed by reference so I need to pass the whole drugList object :-(

  constructor(validation, eventAggregator, playerService) {
    this.validation = validation.on(this)
      .ensure('sellAmount')
      .containsOnlyDigits()
      .isNotEmpty()
      .isBetween(1, () => { return this.maxSellAmount});

    this.eventAggregator = eventAggregator;

    this.PlayerService = playerService;
    this.Player = null;
    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });
  }

  activate(model) {
    this.drug = model.Drug;
    this.sellAmount = this.maxSellAmount = model.MaxSellAmount;
    this.drugList = model.DrugList;
  }

  sellDrugs() {
    this.validation.validate().then(
      () => {
        this.Player.SellDrug(this.drug, this.sellAmount);
        this.eventAggregator.publish('drugInBackpackChanged', this.drug);
        this.drugList.showing = false;
      }
    );
  }

  cancel() {
    this.drugList.showing = false;
  }

  /* Figure out why this doesn't work... Can't trigger the Changed call on an inner property. How do you do that?
   model_SellAmountChanged(newValue) {
   // Need to propagate the total cost back to the wrapper so that it can deal with the results as well as set it to a local
   //  prop so that it can be displayed in the modal as the number to buy is being changed
   console.log('by changed model', model);
   this.model.total_cost = newValue * this.;
   }*/
}
