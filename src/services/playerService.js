import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {PlayerInfo} from '../models/playerInfo';
import {DrugService} from '../services/drugService';
import numeral from 'numeral';

let player = new PlayerInfo();
let drugList = null;
let eventAggregator = null;

@inject(EventAggregator, DrugService)
export class PlayerService {
  constructor(eventAggregatorIn, drugService) {
    eventAggregator = eventAggregatorIn;

    this.DrugService = drugService;
    this.DrugService.GetDrugList().then(drugListIn => {
      drugList = drugListIn;
    });
  }

  GetPlayer() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        resolve(player);
      });
  }

  SurpriseFindDrugsOnSubway() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        let idx = Math.floor(Math.random() * (drugList.length + 1));
        let drug = drugList[idx];
        let drugsToFind = Math.floor(player.BackpackSpace / 10 * 1.5);
        if(drugsToFind > 0) {
          player.BuyDrug(drug, drugsToFind, 0);
          eventAggregator.publish('drugInBackpackChanged', drug);
          resolve('You saw a dead guy on the subway so you checked his pockets and found ' + drugsToFind + ' ' + drug.Name + '!');
        } else {
          resolve('You saw a dead guy on the subway with a ton of drugs on him, but your backpack was already full so you had to gave em all to the homeless guy next to you.');
        }
      }
    );
  }

  SurpriseGetMugged() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        for (let drug of drugList.values()) {
          let drugsOnPlayer = player.GetBackpackDrugCount(drug);
          if(drugsOnPlayer > 0) {
            player.SellDrug(drug, Math.ceil(drugsOnPlayer / 2), 0);
            eventAggregator.publish('drugInBackpackChanged', drug);
          }
        }

        player.Money = Math.floor(player.Money / 2);
        resolve('You got jumped in the middle the middle of the night! They stole half of all your drugs and money!');
      }
    );
  }

  SurpriseFindMoney() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        let moneyToAdd = Math.floor(Math.random() * ((player.Money / 2) - 1) + 1);
        player.Money = player.Money + moneyToAdd;
        resolve('You found a briefcase on the subway with ' + numeral(moneyToAdd).format('($0,0)') + ' in it!');
      }
    );
  }

  SurpriseBiggerBackpack() {
    return new Promise( // Faking out a promise in case down the road this becomes an actual server call
      function (resolve, reject) {
        let spaceToAdd = Math.floor(Math.random() * ((player.BackpackSize / 5) - 1) + 1);
        if(spaceToAdd <= 1) {
          spaceToAdd = 2; // Don't want to deal with singular vs plural messages
        }
        player.BackpackSize = player.BackpackSize + spaceToAdd;
        player.BackpackSpace = player.BackpackSpace + spaceToAdd;
        resolve('You were on your way to your next customer and found a new backpack with space for ' + spaceToAdd + ' more drugs in it!');
      }
    );
  }
}
