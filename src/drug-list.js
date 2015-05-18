import {inject, bindable} from 'aurelia-framework';
import {PlayerService} from './services/playerService';

@inject(PlayerService)
export class DrugList{
  @bindable drugs = null; // TODO: I think that this can actually be injected in as the DrugService...
  currentAmount = 0;
  maxAmount = 0;

  constructor(playerService){
    this.PlayerService = playerService;
    this.Player = null;

    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });

    this.Engine = this;
  }

  showSellDialog(drug) {
    this.currentAmount = this.maxAmount = drug.BackpackCount;
    this.panelBodyToShow = -1;
  }

  showBuyDialog(drug) {
    this.currentAmount = this.maxAmount = this.Player.GetMaxPossibleToBuy(drug.Price);
    if(this.currentAmount > 0) {
      this.panelBodyToShow = 1; // Show the buy chooser
    } else {
      this.panelBodyToShow = null; // Show the no buy no sell message
      // This needs more context-full messages (aka out of backpack space vs no money and nothing to sell
    }
  }

  buyDrugs(drug) {
    let errorMessage = this.Player.BuyDrug(drug, this.currentAmount);
    if(errorMessage == null) {
      this.loadDrugPanelInfo(drug);
    } else {
      console.log('there was an error buying', errorMessage);
      this.errorMessage = errorMessage;
    }
  }

  sellDrugs(drug) {
    let errorMessage = this.Player.SellDrug(drug, this.currentAmount);
    if(errorMessage == null) {
      this.loadDrugPanelInfo(drug);
    } else {
      console.log('there was an error selling', errorMessage);
      this.errorMessage = errorMessage;
    }

  }

  loadDrugPanelInfo(drug) {
    let curDrugCount = drug.BackpackCount;
    let maxToBuy = this.Player.GetMaxPossibleToBuy(drug.Price);
    if(curDrugCount > 0) {
      if(maxToBuy > 0)
      {
        this.drugCount = curDrugCount;
        this.panelBodyToShow =  0; // Show the buy sell chooser
      } else {
        this.showSellDialog(drug);
      }
    } else if(curDrugCount === 0) {
      this.showBuyDialog(drug);
    }
  }
}
