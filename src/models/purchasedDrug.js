export class PurchasedDrug {
  BackpackCount;
  HighestBuyPrice;

  constructor(count, price) {
    this.BackpackCount = count;
    this.HighestBuyPrice = price;
  }

  Update(count, price) {
    this.BackpackCount = this.BackpackCount + count;
    this.HighestBuyPrice = price > this.HighestBuyPrice ? price : this.HighestBuyPrice;
  }
}
