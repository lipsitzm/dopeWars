import {inject} from 'aurelia-framework';
import {DrugService} from './drugService';

@inject(DrugService)
export class DrugList{

  constructor(drugService){
    this.DrugService = drugService;
    this.Drugs = [];
  }

  created() {
    this.DrugService.GetDrugList().then(drugList => {
      this.Drugs = drugList;
    });
  }

  Update(city) {
    for(let drug of this.Drugs) {
      this.DrugService.GetNewPrice(drug).then(function() {
        // Nothing to do here as the DrugService sets the value on the drug itself
        // This feels like a code smell?
      });

      this.DrugService.GetNewPrice(city, drug).then(function() {
        // Nothing to do here as the DrugService sets the value on the drug itself
        // This feels like a code smell?
      });
    }
  }
}
