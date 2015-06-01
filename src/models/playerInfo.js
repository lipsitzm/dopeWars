import {DifficultyLevel} from 'models/difficultyLevel';
import {PurchasedDrug} from 'models/purchasedDrug'

export class PlayerInfo {
  startingMoney;

  ResetPlayer(DifficultyLevel) {
    this.BackpackSpace = DifficultyLevel.StartingBackpackSize;
    this.BackpackSize = DifficultyLevel.StartingBackpackSize; // Is this really needed? Basically just used to make the displaying of the size easier...
    this.Money = this.startingMoney = DifficultyLevel.StartingMoney;
    this.Drugs = new Map();
    this.LoanOutstanding = DifficultyLevel.LoanOutstanding;
    this.InterestRate = DifficultyLevel.InterestRate;
  }

  GetMaxPossibleToBuy(pricePerDrug) {
    let max = Math.floor(this.Money / pricePerDrug);
    return max > this.BackpackSpace ? this.BackpackSpace : max;
  }

  get Profit() {
    return this.Money - this.LoanOutstanding;
    // Still on the fence of whether or not I should subtract the starting money from this or not...
  }

  GetBackpackDrugCount(drug) {
    if(this.Drugs.has(drug.Name)) {
      let purchasedDrug = this.Drugs.get(drug.Name);
      return purchasedDrug.BackpackCount;
    } else {
      return 0;
    }
  }

  GetPurchasedDrug(drug) {
    if(this.Drugs.has(drug.Name)) {
      return this.Drugs.get(drug.Name);
    } else {
      return new PurchasedDrug(0,0);
    }
  }

  BuyDrug(drug, count, price) {
    if (this.BackpackSpace - count < 0) {
      return 'You can\'t fit that much ' + drug.Name + ' in your backpack! The cops would see it if it\'s hanging out like that.';
    }

    if(price === undefined) { // If price wasn't passed in, fail-over to the drug's
      price = drug.Price;
    }

    let drugCost = price * count;
    if(this.Money < drugCost) {
      return 'You don\'t have enough cash for that much ' + drug.Name + '. If you rip off your supplier, you\'ll never be able to buy from them again.';
      // Idea: Let people rip off their supplier then never have drugs available in this town again...
    }

    let purchasedDrug;
    if(this.Drugs.has(drug.Name)) {
      purchasedDrug = this.Drugs.get(drug.Name);
      purchasedDrug.Update(count, drug.Price);
    } else {
      purchasedDrug = new PurchasedDrug(count, drug.Price);
    }
    this.Drugs.set(drug.Name, purchasedDrug);

    this.BackpackSpace -= count;
    this.Money -= drugCost;
    return null; // Don't like that null is the success retVal, but it's an error msg being return otherwise so it does work... Go back to throwing?
  }

  SellDrug(drug, count, price) {
    count = parseInt(count); // TODO: Why does buy's count come in correctly but sell's doesn't?
    let purchasedDrug;
    if(!this.Drugs.has(drug.Name)) {
      return 'You don\'t have any ' + drug.Name + ' to sell... Try finding a college kid to mug first.';
    } else {
      purchasedDrug = this.Drugs.get(drug.Name);
      if(purchasedDrug.BackpackCount - count < 0) {
        return 'You don\'t have that much ' + drug.Name + ' to sell. You tryin\' to your supplier off?';
        // Idea: Allow people to rip off their supplier... Or maybe cut the drug down? Get 2/3's the price? Something like that?
      } else if(purchasedDrug.BackpackCount - count === 0) {
        this.Drugs.delete(drug.Name);
      } else {
        purchasedDrug.Update(count * -1, 0); // We don't want to change the high purchase price if not all the drugs were sold
        this.Drugs.set(drug.Name, purchasedDrug);
      }
    }
    this.BackpackSpace += count;

    if(price === undefined) { // If price wasn't passed in, fail-over to the drug's
      price = drug.Price;
    }

    this.Money += (count * price);

    return null; // Don't like this for the same reason as above, but again, it works for now.
  }

  IncreaseLoanAmount() {
    this.LoanOutstanding = Math.floor(this.LoanOutstanding * (1 + this.InterestRate));
  }

  PayOffLoan(payDownAmount) {
    if(this.Money < payDownAmount) {
      return 'You don\'t have that much money, watch out for your knees if you\'re trying to rip off your bookie!';
    }

    this.Money -= payDownAmount;
    this.LoanOutstanding -= payDownAmount;
  }
}
