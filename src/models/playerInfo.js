export class PlayerInfo {
  BackpackSize = 50; // Is this really needed? Basically just used to make the displaying of the size easier...
  Money = 5000;
  Drugs = new Map();
  BackpackSpace = 50;

  constructor(){
  }

  GetDrugCount(drugName) {
    return this.Drugs.get(drugName);
  }

  BuyDrug(drugName, count, pricePerDrug) {
    count = parseInt(count); // this doesn't belong here... Figure out how to fix the modal's pass through / input box

    if (this.BackpackSpace - count <= 0) {
      return 'You can\'t fit that much ' + drugName + ' in your backpack! The cops would see it if it\'s hanging out like that.';
    }

    let drugCost = pricePerDrug * count;
    if(this.Money < drugCost) {
      return 'You don\'t have enough cash for that much ' + drugName + '. If you rip off your supplier, you\'ll never be able to buy from them again.';
      // Idea: Let people rip off their supplier then never have drugs available in this town again...
    }

    let curDrugCount = 0;
    if (this.Drugs.has(drugName)) {
      curDrugCount = this.Drugs.get(drugName);
    }
    this.Drugs.set(drugName, curDrugCount + count);
    this.BackpackSpace -= count;
    this.Money -= drugCost;
    return null; // Don't like that null is the success retVal, but it's an error msg being return otherwise so it does work... Go back to throwing?
  }

  SellDrug(drugName, count, pricePerDrug) {
    count = parseInt(count); // this doesn't belong here... Figure out how to fix the modal's pass through / input box

    if(!this.Drugs.has(drugName)) {
      return 'You don\'t have any ' + drugName + ' to sell... Try finding a college kid to mug first.';
    }

    let newDrugCount = this.Drugs.get(drugName) - count;
    if(newDrugCount < 0) {
      return 'You don\'t have that much ' + drugName + ' to sell. You tryin\' to your supplier off?';
      // Idea: Allow people to rip off their supplier... Or maybe cut the drug down? Get 2/3's the price? Something like that?
    }

    this.Drugs.set(drugName, newDrugCount);
    this.BackpackSpace += count;
    this.Money += (count * pricePerDrug);
    return null; // Don't like this for the same reason as above, but again, it works for now.
  }
}
