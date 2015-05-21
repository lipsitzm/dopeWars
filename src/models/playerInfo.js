import {DifficultyLevel} from 'models/difficultyLevel';

export class PlayerInfo {
  startingBackpackSize;
  startingMoney;

  constructor(){
  }

  ResetPlayer(DifficultyLevel) {
    this.BackpackSpace = DifficultyLevel.StartingBackpackSize;
    this.BackpackSize = DifficultyLevel.StartingBackpackSize; // Is this really needed? Basically just used to make the displaying of the size easier...
    this.Money = DifficultyLevel.StartingMoney;
    this.Drugs = new Map();
    this.LoanOutstanding = DifficultyLevel.LoanOutstanding;
    this.InterestRate = DifficultyLevel.InterestRate;
  }

  GetMaxPossibleToBuy(pricePerDrug) {
    let max = Math.floor(this.Money / pricePerDrug);
    return max > this.BackpackSpace ? this.BackpackSpace : max;
  }

  BuyDrug(drug, count) {
    count = parseInt(count); // this doesn't belong here... Figure out how to fix the modal's pass through / input box

    if (this.BackpackSpace - count < 0) {
      return 'You can\'t fit that much ' + drug.Name + ' in your backpack! The cops would see it if it\'s hanging out like that.';
    }

    let drugCost = drug.Price * count;
    if(this.Money < drugCost) {
      return 'You don\'t have enough cash for that much ' + drug.Name + '. If you rip off your supplier, you\'ll never be able to buy from them again.';
      // Idea: Let people rip off their supplier then never have drugs available in this town again...
    }

    drug.BackpackCount += count;
    drug.HighestBuyPrice = drug.HighestBuyPrice > drug.Price ? drug.HighestBuyPrice : drug.Price;

    this.BackpackSpace -= count;
    this.Money -= drugCost;
    return null; // Don't like that null is the success retVal, but it's an error msg being return otherwise so it does work... Go back to throwing?
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

  SellDrug(drug, count) {
    count = parseInt(count); // this doesn't belong here... Figure out how to fix the modal's pass through / input box

    if(drug.BackpackCount <= 0) {
      return 'You don\'t have any ' + drug.Name + ' to sell... Try finding a college kid to mug first.';
    } else if (drug.BackpackCount - count < 0) {
      return 'You don\'t have that much ' + drug.Name + ' to sell. You tryin\' to your supplier off?';
      // Idea: Allow people to rip off their supplier... Or maybe cut the drug down? Get 2/3's the price? Something like that?
    }

    drug.BackpackCount -= count;
    this.BackpackSpace += count;
    this.Money += (count * drug.Price);
    return null; // Don't like this for the same reason as above, but again, it works for now.
  }
}
