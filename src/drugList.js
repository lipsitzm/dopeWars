//import {transient} from 'aurelia-framework';
import {Drug} from './drug';

//@transient()
export class DrugList{

  constructor(){
    this.Drugs = [
      new Drug("Cocaine", 30000),
      new Drug("MDMA", 1000),
      new Drug("Weed", 200),
      new Drug("Speed", 50),
      new Drug("Meth", 100)
    ];
  }

  Update(availabilityThreshold) {
    for(let drug of this.Drugs) {
      drug.UpdatePrice();
      drug.UpdateAvailability(availabilityThreshold);
    }
  }
}
