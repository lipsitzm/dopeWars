import {computedFrom} from 'aurelia-framework';

export class Drug{
  // TODO: Make these privates but not statics / in a closure outside of the class...
  maxPrice = 1;
  price = 1;
  available = true;

  constructor(name, maxPriceIn){
    this.Name = name;
    this.maxPrice = maxPriceIn;
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
    this.price = Math.floor(Math.random() * this.maxPrice) + 1;
  }

  UpdateAvailability(availableThreshold) {
    this.available = Math.random() >= availableThreshold;
  }
}
