let drugPriceColorClasses = [
  'cheapest-drug-cost',
  'middle-cheapest-drug-cost',
  'middle-drug-cost',
  'middle-expensive-drug-cost',
  'most-expensive-drug-cost'
];

export class Drug{
  MaxPrice = 1;
  MinPrice = 1;
  price = 1;
  Available = true;
  Name = '';
  ThresholdLevel = 2;

  constructor(nameIn, minPriceIn, maxPriceIn){
    this.Name = nameIn;
    this.MaxPrice = maxPriceIn;
    this.MinPrice = minPriceIn;
  }

  SetThreshold(newPrice) {
    // With the drugService Surprises allowing outlier prices, we need to colorize those as well
    if(newPrice >= this.MaxPrice) {
      this.ThresholdLevel = 4;
    } else if (newPrice <= this.MinPrice) {
      this.ThresholdLevel = 0;
    } else {
      // Otherwise we can just figure out the band that this price would fall in and color it that way
      this.ThresholdLevel = Math.floor((this.Price - this.MinPrice) / (this.MaxPrice - this.MinPrice) * 100 / 20);
    }
  }

  get ThresholdColorClass() {
    return drugPriceColorClasses[this.ThresholdLevel];
  }

  get Price() {
    return this.price;
  }

  set Price(newVal) {
    this.price = newVal;
    this.SetThreshold(newVal);
  }
}
