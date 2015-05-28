import {Surprise} from 'models/surprise';

let surprises = [
  new Surprise(1, 'DrugService', 'SurpriseMakeRandomAvailableDrugCheaper'),
  new Surprise(1, 'DrugService', 'SurpriseMakeRandomAvailableDrugMoreExpensive')
];

export class SurpriseService {
  GetSurprises() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        resolve(surprises);
      });
  }
}
