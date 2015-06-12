import {Drug} from '../models/drug';

let drugs = [
  new Drug("Acid", 1000, 3000),
  new Drug("Cocaine", 10000, 30000),
  new Drug("Hashish", 800, 1500),
  new Drug("Heroin", 6000, 20000),
  new Drug("Ludes", 25, 100),
  new Drug("Meth", 25, 100),
  new Drug("MDMA", 1000, 4000),
  new Drug("Opium", 500, 1250),
  new Drug("PCP", 750, 2000),
  new Drug("Peyote", 100, 750),
  new Drug("Shrooms", 100, 1250),
  new Drug("Speed", 50, 200),
  new Drug("Weed", 50, 200)
];

let doPriceMath = (minPrice, maxPrice) => {
  return Math.floor(Math.random() * (maxPrice - minPrice) + minPrice);
};

let surpriseUpdateDrugPrice = (minFunc, maxFunc) => {
  // Going through the drugs randomly but need the loop to make sure I'm working on one that's available
  let drugToCheck;
  for (let i = drugs.length - 1; i > 0; i--) {
    let idx = Math.floor(Math.random() * (i + 1));
    drugToCheck = drugs[idx];

    if(drugToCheck.Available) {
      drugToCheck.Price = doPriceMath(minFunc(drugToCheck), maxFunc(drugToCheck));
      break;
    }
  }
  return drugToCheck
};

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
        drug.Price = doPriceMath(drug.MinPrice, drug.MaxPrice);
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

  SurpriseMakeRandomAvailableDrugMoreExpensive() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        let drugToCheck = surpriseUpdateDrugPrice((drug) => { return drug.MaxPrice }, (drug) => { return drug.MaxPrice * 2 });
        resolve('The cops seized tons of ' + drugToCheck.Name + ' making it unreal expensive!');
      });
  }

  SurpriseMakeRandomAvailableDrugCheaper() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        let drugToCheck = surpriseUpdateDrugPrice((drug) => { return drug.MinPrice / 2 }, (drug) => { return drug.MinPrice });
        resolve('Someone broke into the evidence locker at the police station and stole a ton of ' + drugToCheck.Name + ' making it beyond cheap!');
      });
  }
}
