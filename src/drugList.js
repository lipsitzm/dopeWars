//import {transient} from 'aurelia-framework';
import {Drug} from './drug';

//@transient()
export class DrugList{

  constructor(){
    this.Drugs = [
      new Drug("Cocaine", 10000, 30000),
      new Drug("MDMA", 500, 1000),
      new Drug("Weed", 50, 200),
      new Drug("Speed", 10, 50),
      new Drug("Meth", 25, 100)
    ];
  }

  Update(availabilityThreshold) {
    for(let drug of this.Drugs) {
      drug.UpdatePrice();
      drug.UpdateAvailability(availabilityThreshold);
    }
  }
}
