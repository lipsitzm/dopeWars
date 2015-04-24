import {computedFrom} from 'aurelia-framework';

export class Drug{
  // TODO: Make these privates but not statics / in a closure outside of the class... http://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
  maxPrice = 1;
  minPrice = 1;
  price = 1;
  available = true;
  name = '';

  constructor(nameIn, minPriceIn, maxPriceIn){
    this.name = nameIn;
    this.maxPrice = maxPriceIn;
    this.minPrice = minPriceIn;
  }

  @computedFrom('name')
  get Name() {
    return this.name;
  }

  @computedFrom('maxPrice', 'price') // TODO: How to tell if the binding is being refreshed using this?
  get Price() {
    return this.price;
  }

  @computedFrom('available')
  get Available() {
    return this.available;
  }

  UpdatePrice() {
    this.price = Math.floor(Math.random() * this.maxPrice) + this.minPrice;
  }

  UpdateAvailability(availableThreshold) {
    this.available = Math.random() >= availableThreshold;
  }
}
