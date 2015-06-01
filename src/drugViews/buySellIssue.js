export class BuySellIssue {
  activate(model) {
    this.drug = model.Drug;
    this.reason = model.Reason;
    this.drugList = model.DrugList;
  }

  cancel() {
    this.drugList.showing = false;
  }
}
