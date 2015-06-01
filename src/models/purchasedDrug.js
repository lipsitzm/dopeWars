import numeral from 'numeral';

export class PurchasedDrug {
  backpackCount = 0;
  HighestBuyPrice = 0;

  constructor(count, price) {
    this.backpackCount = numeral(count);
    this.HighestBuyPrice = price;
  }

  Update(count, price) {
    this.backpackCount = this.backpackCount.add(count);
    this.HighestBuyPrice = (price > this.HighestBuyPrice ? price : this.HighestBuyPrice);
  }

  get BackpackCount() {
    return this.backpackCount.format();
  }
}
