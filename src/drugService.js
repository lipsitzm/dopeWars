import {Drug} from './drug';

let drugs = [
  new Drug("Cocaine", 10000, 30000),
  new Drug("MDMA", 500, 1000),
  new Drug("Weed", 50, 200),
  new Drug("Speed", 10, 50),
  new Drug("Meth", 25, 100)
];

export class DrugService {

  GetDrugList() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        resolve(drugs);
      });
  }

  GetNewPrice(drug) {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        drug.Price = Math.floor(Math.random() * drug.MaxPrice) + drug.MinPrice;
        resolve(true);
      });
  }

  GetNewAvailability(city, drug) {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        drug.Available = Math.random() >= city.AvailabilityThreshold;
        resolve(true);
      });
  }
}
