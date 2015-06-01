export class BuySellChooser {
  activate(model) {
    this.drug = model.Drug;
    this.drugCount = model.DrugCount;
    this.maxToBuy = model.MaxBuyAmount;
    this.drugList = model.DrugList;
  }

  goToSell() {
    this.drugList.ShowSellDrugDialog(this.drug, this.drugCount);
  }

  goToBuy() {
    this.drugList.ShowBuyDrugDialog(this.drug, this.maxToBuy);
  }

  cancel() {
    this.drugList.showing = false;
  }
}
