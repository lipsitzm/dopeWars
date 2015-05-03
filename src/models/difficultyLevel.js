export class DifficultyLevel {
  startingMoney;
  startingBackpackSize;
  name;

  constructor(nameIn, startingMoneyIn, startingBackpackSizeIn) {
    this.name = nameIn;
    this.startingMoney = startingMoneyIn;
    this.startingBackpackSize = startingBackpackSizeIn;
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
}
