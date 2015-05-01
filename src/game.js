import {inject} from 'aurelia-framework';
import {CityService} from './services/cityService';
import {DrugService} from './services/drugService';
import {PlayerService} from './services/playerService';
import {DayService} from './services/dayService';

@inject(CityService, DrugService, PlayerService, DayService)
export class Game {

  constructor(cityService, drugService, playerService, dayService){
    this.CityService = cityService;
    this.CurrentCityIndex = 0;
    this.Cities = [];
    this.DrugService = drugService;
    this.Drugs = [];
    this.PlayerService = playerService;
    this.Player = null;
    this.DayService = dayService;
    this.DayOptions = null;
    this.CurrentDayOption = null;
    this.CurrentDay = 1;
    this.IsLastDay = false;

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

    this.DayService.GetDayOptions().then(dayOptions => {
      this.DayOptions = dayOptions;
      this.CurrentDayOption = dayOptions[0];
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

  UpdateDay() {
    this.CurrentDay++;
  }

  CheckIfReachedMaxDay() {
    return this.CurrentDay >= this.CurrentDayOption.TotalDays;
  }

  MoveCity(idx) {
    if(this.IsLastDay) { // If we were already on the last day, that means that the player is triggering the end game
      return;
    }

    this.UpdateDay();
    this.IsLastDay = this.CheckIfReachedMaxDay();

    this.CurrentCityIndex = idx;
    this.UpdateDrugs();
  }
}
