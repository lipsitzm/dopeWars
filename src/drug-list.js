import {inject, bindable} from 'aurelia-framework';
import {PlayerService} from './services/playerService';

@inject(PlayerService)
export class DrugList{
  @bindable drugs = null; // TODO: I think that this can actually be injected in as the DrugService...
  showBSModal = false;
  modal_title = "";
  modal_body = "";
  modalDrugCost = 0;
  modalDrugName = '';
  modal_success_label = "";

  constructor(playerService){
    this.PlayerService = playerService;
    this.Player = null;

    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });
  }

  buySellDrug(drug) {
    this.showBSModal = true;
    let drugCount = this.Player.GetDrugCount(drug.Name);
    if(!drugCount) {
      this.modal_title = "Buy " + drug.Name;
      this.modal_body = 'modalBodies/buyDrug';
      this.modal_success_label = "Buy";
      drug.BuyAmount = null;
      this.modalModel = drug;
    } else {
      this.modal_title = "Sell " + drug.Name;
      this.modal_body = 'modalBodies/sellDrug';
      this.modal_success_label = "Sell";
      drug.TotalAmount = drugCount;
      drug.SellAmount = null;
      this.modalModel = drug;
    }
  }

  closeBSModal() {
    this.showBSModal = false;
  }

  bsModalSuccess() {
    if(this.modalModel.TotalAmount == undefined) { // This can be done in a way cleaner way...
      let errorMessage = this.Player.BuyDrug(this.modalModel.Name, this.modalModel.BuyAmount, this.modalModel.Price);
      if(errorMessage == null) {
        this.showBSModal = false;
      } else {
        this.modalModel.ErrorMessage = errorMessage;
      }
    } else {
      let errorMessage = this.Player.SellDrug(this.modalModel.Name, this.modalModel.SellAmount, this.modalModel.Price);
      if(errorMessage == null) {
        this.showBSModal = false;
      } else {
        this.modalModel.ErrorMessage = errorMessage;
      }
    }

    if(!this.modalModel.ErrorMessage) {
      // Need to clean up the Drug object now that we're done with it
      // Is there a better way to do this? Probably should create a new model class with the properties that is created in buySellDrug and thrown away here...
      this.modalModel.ErrorMessage = undefined;
      this.modalModel.BuyAmount = undefined;
      this.modalModel.TotalAmount = undefined;
      this.modalModel.SellAmount = undefined;
    }
  }
}
