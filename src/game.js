import {inject} from 'aurelia-framework';
import {CityService} from './services/cityService';
import {DrugService} from './services/drugService';
import {PlayerService} from './services/playerService';

@inject(CityService, DrugService, PlayerService)
export class Game {

  constructor(cityService, drugService, playerService){
    this.CityService = cityService;
    this.CurrentCityIndex = 0;
    this.Cities = [];
    this.DrugService = drugService;
    this.Drugs = [];
    this.PlayerService = playerService;
    this.Player = null;
  }

  created() {
    this.CityService.GetCityList().then(cities => {
      this.Cities = cities;
    });

    this.DrugService.GetDrugList().then(drugList => {
      this.Drugs = drugList;
      this.UpdateDrugs();
    });

    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });
  }

  UpdateDrugs() {
    for (let drug of this.Drugs) {
      this.DrugService.GetNewPrice(drug).then(function () {
        // Nothing to do here as the DrugService sets the value on the drug itself
        // This feels like a code smell?
      });

      this.DrugService.GetNewAvailability(this.Cities[this.CurrentCityIndex], drug).then(function () {
        // Nothing to do here as the DrugService sets the value on the drug itself
        // This feels like a code smell?
      });
    }
  }

  UpdateCurrentCity(idx) {
    this.CurrentCityIndex = idx;
    this.UpdateDrugs();
  }
}
