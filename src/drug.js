import {computedFrom} from 'aurelia-framework';

export class Drug{
  // TODO: Make these privates but not statics / in a closure outside of the class... http://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
  // Still a todo above?
  MaxPrice = 1;
  MinPrice = 1;
  Price = 1;
  Available = true;
  Name = '';

  constructor(nameIn, minPriceIn, maxPriceIn){
    this.Name = nameIn;
    this.MaxPrice = maxPriceIn;
    this.MinPrice = minPriceIn;
  }
}
