import {computedFrom} from 'aurelia-framework';

export class Drug{
  maxPrice = 1;
  price = 1;

  constructor(name, maxPriceIn){
    this.Name = name;
    this.maxPrice = maxPriceIn;
  }

  @computedFrom('maxPrice', 'price')
  get Price() {
    return this.price;
  }

  UpdatePrice() {
    this.price = Math.floor(Math.random() * this.maxPrice) + 1;
  }
}
