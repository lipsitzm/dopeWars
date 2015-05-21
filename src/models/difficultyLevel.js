export class DifficultyLevel {
  startingMoney;
  startingBackpackSize;
  name;
  interestRate;
  loanOutstanding;

  constructor(nameIn, startingMoneyIn, startingBackpackSizeIn, interestRateIn, loanOutstandingIn) {
    this.name = nameIn;
    this.startingMoney = startingMoneyIn;
    this.startingBackpackSize = startingBackpackSizeIn;
    this.interestRate = interestRateIn;
    this.loanOutstanding = loanOutstandingIn;
  }

  get Name() {
    return this.name;
  }

  get StartingMoney() {
    return this.startingMoney;
  }

  get StartingBackpackSize() {
    return this.startingBackpackSize;
  }

  get InterestRate() {
    return this.interestRate;
  }

  get LoanOutstanding() {
    return this.loanOutstanding;
  }
}
