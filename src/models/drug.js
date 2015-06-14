let drugPriceColorClasses = [
  'cheapest-drug-cost',
  'middle-cheapest-drug-cost',
  'middle-drug-cost',
  'middle-expensive-drug-cost',
  'most-expensive-drug-cost'
];

let drugPriceChangeDirectionClasses = {
  'down': 'fa fa-arrow-down',
  'up': 'fa fa-arrow-up',
  'even': ''
};

let setThreshold = function(newPrice, obj) {
  // With the drugService Surprises allowing outlier prices, we need to colorize those as well
  if(newPrice >= obj.MaxPrice) {
    obj.ThresholdLevel = 4;
  } else if (newPrice <= obj.MinPrice) {
    obj.ThresholdLevel = 0;
  } else {
    // Otherwise we can just figure out the band that this price would fall in and color it that way
    obj.ThresholdLevel = Math.floor((obj.Price - obj.MinPrice) / (obj.MaxPrice - obj.MinPrice) * 100 / 20);
  }
};

export class Drug{
  MaxPrice = 1;
  MinPrice = 1;
  price = null;
  Available = true;
  Name = '';
  ThresholdLevel = 2;
  directionChange = 'even';

  constructor(nameIn, minPriceIn, maxPriceIn){
    this.Name = nameIn;
    this.MaxPrice = maxPriceIn;
    this.MinPrice = minPriceIn;
  }

  get PriceChangeDirectionClass() {
    return drugPriceChangeDirectionClasses[this.directionChange];
  }

  get ThresholdColorClass() {
    return drugPriceColorClasses[this.ThresholdLevel];
  }

  get Price() {
    return this.price;
  }

  set Price(newVal) {
    if(this.price !== null) { // Don't change the directionChange from even if we're setting the price for the first time
      this.directionChange = newVal > this.price ? 'up' : (newVal < this.price ? 'down' : 'even');
    }

    this.price = newVal;
    setThreshold(newVal, this);
  }
}
