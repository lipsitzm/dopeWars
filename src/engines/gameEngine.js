import {CityService} from 'services/cityService';
import {DrugService} from 'services/drugService';
import {PlayerService} from 'services/playerService';
import {DayService} from 'services/dayService';
import {DifficultyLevelsService} from 'services/difficultyService';
import {DifficultyLevel} from 'models/difficultyLevel';

export class GameEngine {

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
    this.OriginalDrugs = [];
    this.DrugsAvailable = false;
    this.DrugService.GetDrugList().then(drugList => {
      this.Drugs = this.OriginalDrugs = drugList;
    });

    this.PlayerService = playerService;
    this.Player = null;
    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });
  }

  ResetGame() {
    this.CurrentCityIndex = Math.floor(Math.random() * this.Cities.length); // Start at a random city (0 indexed)
    this.CurrentDay = 1;
    this.Player.ResetPlayer(this.CurrentDifficultyLevel);
    this.IsLastDay = false;
    this.GameOver = false;
    this.Drugs = this.OriginalDrugs; // Reset the drugs back to their initial states
    this.UpdateDrugs();
    this.TriggerRestart = false;
  }

  ChangeDifficultyLevel(chosenDifficultyLevel) {
    this.CurrentDifficultyLevel = chosenDifficultyLevel;
    this.ResetGame();
  }

  UpdateDrugs() {
    let promisesAry = [];
    for (let drug of this.Drugs) {
      promisesAry.push(this.DrugService.GetNewPrice(drug));
      promisesAry.push(this.DrugService.GetNewAvailability(this.Cities[this.CurrentCityIndex], drug));
    }

    return Promise.all(promisesAry).then(resultsAry => {
      // Nothing to do here on the actual Drug objects as the DrugService sets the value on the drug itself
      // This feels like a code smell?

      // I feel like this logic could / should get pushed further down the stack...
      this.DrugsAvailable = false;
      for(let drug of this.Drugs) {
        if(drug.Available) {
          this.DrugsAvailable = true;
          break;
        }
      }
    });
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

    // Force the player to move cities every day
    if(this.CurrentCityIndex === idx) {
      return;
    }

    this.UpdateDay();
    this.IsLastDay = this.CheckIfReachedMaxDay();

    this.CurrentCityIndex = idx;
    this.UpdateDrugs();
    this.Player.IncreaseLoanAmount();
  }
}
