import {Drug} from './drug';

export class DrugList{

  constructor(){
    this.test = new Drug("Hi",10);
    this.Drugs = [
      new Drug("Cocaine", 30000),
      new Drug("MDMA", 1000),
      new Drug("Weed", 100)
    ];
  }

  Update() {
    for(let drug of this.Drugs) {
      drug.UpdatePrice();
      drug.UpdateAvailability(.1);
    }
  }
}
