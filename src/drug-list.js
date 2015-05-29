import {inject, bindable} from 'aurelia-framework';
import {PlayerService} from './services/playerService';

@inject(PlayerService)
export class DrugList{
  @bindable drugs = null; // TODO: I think that this can actually be injected in as the DrugService...
  modalTitle = "";
  modalView = "";
  @bindable modalModel = null;
  showing = false;

  constructor(playerService){
    this.PlayerService = playerService;
    this.Player = null;
    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });

    this.Engine = this;
  }

  // TODO: Refactor buy and sell into one because they are ridic similar
  ShowSellDrugDialog(drug, curDrugCount) {
    this.modalTitle = 'Sell Drugs';
    this.modalView = 'drugViews/sellDrug';
    this.modalModel = {
      Drug: drug,
      MaxSellAmount: curDrugCount,
      DrugList: this
    };
    this.showing = true;
  }

  ShowBuyDrugDialog(drug, maxToBuy) {
    this.modalTitle = 'Buy Drugs';
    this.modalView = 'drugViews/buyDrug';
    this.modalModel = {
      Drug: drug,
      MaxBuyAmount: maxToBuy,
      DrugList: this
    };
    this.showing = true;
  }

  ShowBuySellChooserDialog(drug, curDrugCount, maxToBuy) {
    this.modalTitle = 'Buy or Sell';
    this.modalView = 'drugViews/buySellChooser';
    this.modalModel = {
      Drug: drug,
      DrugCount: curDrugCount,
      MaxBuyAmount: maxToBuy,
      DrugList: this
    };
    this.showing = true;
  }

  ShowDrugDialog(drug) {
    let curDrugCount = drug.BackpackCount;
    let maxToBuy = this.Player.GetMaxPossibleToBuy(drug.Price);
    if(curDrugCount > 0) {
      if(maxToBuy > 0)
      {
        this.ShowBuySellChooserDialog(drug, curDrugCount, maxToBuy);
      } else {
        this.ShowSellDrugDialog(drug, curDrugCount);
      }
    } else if(curDrugCount === 0) {
      this.ShowBuyDrugDialog(drug, maxToBuy);
    }
  }

  cancel() {
    this.showing = false;
  }
}
