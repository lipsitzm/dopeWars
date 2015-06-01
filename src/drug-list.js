import {inject, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {PlayerService} from './services/playerService';
import {DrugService} from './services/drugService';

@inject(EventAggregator, PlayerService, DrugService)
export class DrugList {
  modalTitle = "";
  modalView = "";
  @bindable modalModel = null;
  showing = false;
  DrugsAvailable = false;

  constructor(eventAggregator, playerService, drugService){
    this.eventAggregator = eventAggregator;

    this.PlayerService = playerService;
    this.Player = null;
    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });

    this.DrugService = drugService;
    this.DrugService.GetDrugList().then(drugList => {
      this.ResetDrugViewModels(drugList);
    });

    this.eventAggregator.subscribe('drugInBackpackChanged', drug => {
      for(let drugVM of this.drugViewModels.values()) {
        if(drugVM.Drug.Name === drug.Name) {
          let purchasedDrug = this.Player.GetPurchasedDrug(drug);
          drugVM.BackpackCount = purchasedDrug.BackpackCount;
          drugVM.HighestBuyPrice = purchasedDrug.HighestBuyPrice;
          break;
        }
      }
    });

    this.eventAggregator.subscribe('resetDrugsInBackpack', drugList => {
      this.ResetDrugViewModels(drugList);
    });

  }

  ResetDrugViewModels(drugList) {
    this.drugViewModels = new Array();
    for(let drug of drugList.values()) {
      this.drugViewModels.push({
        Drug: drug,
        BackpackCount: 0,
        HighestBuyPrice: 0
      });
    }

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

  ShowBuySellIssueDialog(drug) {
    this.modalModel = {
      Drug: drug,
      DrugList: this
    };
    if(this.Player.BackpackSpace === 0) {
      this.modalTitle = 'No More Space';
      this.modalModel.Reason = 1;
    } else {
      this.modalTitle = 'Not Enough Money and Nothing To Sell';
      this.modalModel.Reason = 2;
    }
    this.modalView = 'drugViews/buySellIssue';
    this.showing = true;
  }

  ShowDrugDialog(drug) {
    let curDrugCount = this.Player.GetBackpackDrugCount(drug);
    let maxToBuy = this.Player.GetMaxPossibleToBuy(drug.Price);
    if(curDrugCount > 0) {
      if(maxToBuy > 0)
      {
        this.ShowBuySellChooserDialog(drug, curDrugCount, maxToBuy);
      } else {
        this.ShowSellDrugDialog(drug, curDrugCount);
      }
    } else if(curDrugCount === 0) {
      if(maxToBuy > 0) {
        this.ShowBuyDrugDialog(drug, maxToBuy);
      } else {
        this.ShowBuySellIssueDialog(drug);
      }
    }
  }

  cancel() {
    this.showing = false;
  }
}
