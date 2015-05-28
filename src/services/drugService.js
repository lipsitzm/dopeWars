import {Drug} from 'models/drug';

let drugs = [
  new Drug("Cocaine", 10000, 30000),
  new Drug("MDMA", 500, 1000),
  new Drug("Weed", 50, 200),
  new Drug("Speed", 10, 50),
  new Drug("Meth", 25, 100)
];

let doPriceMath = (minPrice, maxPrice) => {
  return Math.floor(Math.random() * (maxPrice - minPrice)) + minPrice;
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

  // There should be a way to refactor these to make them workable... Issue is that the prices passed to doPriceMath are dependent on the
  //  drug that's been randomly chosen which is the part that is repetitive...
  SurpriseMakeRandomAvailableDrugMoreExpensive() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        // Going through the drugs randomly but need the loop to make sure I'm working on one that's available
        let drugToCheck;
        for (let i = drugs.length - 1; i > 0; i--) {
          let idx = Math.floor(Math.random() * (i + 1));
          drugToCheck = drugs[idx];

          if(drugToCheck.Available) {
            drugToCheck.Price = doPriceMath(drugToCheck.MaxPrice, drugToCheck.MaxPrice * 2);
            break;
          }
        }
        resolve(drugToCheck);
      });
  }

  SurpriseMakeRandomAvailableDrugCheaper() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        // Going through the drugs randomly but need the loop to make sure I'm working on one that's available
        let drugToCheck;
        for (let i = drugs.length - 1; i > 0; i--) {
          let idx = Math.floor(Math.random() * (i + 1));
          drugToCheck = drugs[idx];

          if(drugToCheck.Available) {
            drugToCheck.Price = doPriceMath(drugToCheck.MinPrice / 2, drugToCheck.MinPrice);
            break;
          }
        }
        resolve(drugToCheck);
      });
  }
}
