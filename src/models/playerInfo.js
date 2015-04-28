import {inject} from 'aurelia-framework';

export class PlayerInfo {
  BackpackSize = 50;
  Money = 5000;
  Drugs = new Map();
  BackpackSpace = 50;

  constructor(){
  }

  BuyDrug(drugName, count, pricePerDrug) {
    if (this.BackpackSpace + count > this.BackpackSize) {
      throw 'Attempted to buy more ' + drugName + ' than the backpack could hold';
    }

    let drugCost = pricePerDrug * count;
    if(this.Money < drugCost) {
      throw 'Attempted to buy more ' + drugName + ' than could be afforded';
    }

    let curDrugCount = 0;
    if (this.Drugs.has(drugName)) {
      curDrugCount = this.Drugs.get(drugName);
    }
    this.Drugs.set(drugName, curDrugCount + count);
    this.BackpackSpace -= count;
    this.Money -= drugCost;
  }

  SellDrug(drugName, count, pricePerDrug) {
    if(!this.Drugs.has(drugName)) {
      throw drugName + ' was attempted to be sold but wasn\'t present in the backpack';
    }

    let newDrugCount = this.Drugs.get(drugName) - count;
    if(newDrugCount < 0) {
      throw 'Attempted to sell more ' + drugName + ' than the player had in the backpack';
    }

    this.Drugs.set(drugName, newDrugCount);
    this.BackpackSpace += count;
    this.Money += (count * pricePerDrug);
  }
}
