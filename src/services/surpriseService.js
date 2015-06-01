import {Surprise} from 'models/surprise';

let surprises = [
  new Surprise(.25, 'DrugService', 'SurpriseMakeRandomAvailableDrugCheaper'),
  new Surprise(.25, 'DrugService', 'SurpriseMakeRandomAvailableDrugMoreExpensive'),
  new Surprise(.25, 'PlayerService', 'SurpriseFindDrugsOnSubway'),
  new Surprise(.25, 'PlayerService', 'SurpriseGetMugged')
];

export class SurpriseService {
  GetSurprises() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        resolve(surprises);
      });
  }
}
