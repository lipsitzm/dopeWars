import {inject} from 'aurelia-framework';
import {CityService} from './services/cityService';
import {DrugService} from './services/drugService';
import {PlayerService} from './services/playerService';
import {DayService} from './services/dayService';
import {DifficultyLevelsService} from './services/difficultyService';

@inject(CityService, DrugService, PlayerService, DayService, DifficultyLevelsService)
export class Game {

  constructor(cityService, drugService, playerService, dayService, difficultyLevelsService){
    this.DayService = dayService;
    this.DayOptions = null;
    this.CurrentDayOption = null;
    this.DayService.GetDayOptions().then(dayOptions => {
      this.DayOptions = dayOptions;
    });

    this.DifficultyLevelsService = difficultyLevelsService;
    this.DifficultyLevels = null;
    this.CurrentDifficultyLevel = null;
    this.DifficultyLevelsService.GetDifficultyLevels().then(diffLevels => {
      this.DifficultyLevels = diffLevels;
    });

    this.CityService = cityService;
    this.Cities = [];
    this.CityService.GetCityList().then(cities => {
      this.Cities = cities;
    });

    this.DrugService = drugService;
    this.Drugs = [];
    this.DrugService.GetDrugList().then(drugList => {
      this.Drugs = drugList;
    });

    this.PlayerService = playerService;
    this.Player = null;
    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });
  }

  ResetGame() {
    this.CurrentCityIndex = Math.floor(Math.random() * this.Cities.length) + 1; // Start at a random city
    this.CurrentDay = 1;
    this.Player.ResetPlayer(this.CurrentDifficultyLevel);
    this.IsLastDay = false;
    this.GameOver = false;
    this.UpdateDrugs();
  }

  activate(params) {
    if(params.hasOwnProperty('totalDays')) {
      let totalDays = parseInt(params.totalDays);
      let matchingDayOpts = this.DayOptions.filter(dOpt => {
        return dOpt.TotalDays === totalDays;
      });

      if(matchingDayOpts.length === 1) {
        this.CurrentDayOption = matchingDayOpts[0];
      } else {
        throw 'Found multiple matching Day Options for the given Total Days.';
      }
    } else {
      // This is a nav to just the url so we need to init some base options
      this.CurrentDayOption = this.DayOptions[0];
      this.CurrentDifficultyLevel = this.DifficultyLevels[0];
    }

    this.ResetGame();
  }

  ChangeDifficultyLevel(chosenDifficultyLevel) {
    this.CurrentDifficultyLevel = chosenDifficultyLevel;
    this.ResetGame();
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
      this.GameOver = true;
      return;
    }

    this.UpdateDay();
    this.IsLastDay = this.CheckIfReachedMaxDay();

    this.CurrentCityIndex = idx;
    this.UpdateDrugs();
  }
}
