import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {CityService} from '../services/cityService';
import {DrugService} from '../services/drugService';
import {PlayerService} from '../services/playerService';
import {DayService} from '../services/dayService';
import {DifficultyLevelsService} from '../services/difficultyService';
import {DifficultyLevel} from '../models/difficultyLevel';
import {SurpriseService} from '../services/surpriseService';
import {Surprise} from '../models/surprise';

@inject(EventAggregator, CityService, DrugService, PlayerService, DayService, DifficultyLevelsService, SurpriseService)
export class GameEngine {
  constructor(eventAggregator, cityService, drugService, playerService, dayService, difficultyLevelsService, surpriseService){
    this.eventAggregator = eventAggregator;

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
    this.DrugsAvailable = false;
    this.DrugService.GetDrugList().then(drugList => {
      this.Drugs = drugList;
    });

    this.PlayerService = playerService;
    this.Player = null;
    this.PlayerService.GetPlayer().then(player => {
      this.Player = player;
    });

    this.SurpriseService = surpriseService;
    this.Surprises = null;
    this.SurpriseService.GetSurprises().then(surprises => {
      this.Surprises = surprises;
    });
  }

  get CurrentCity() {
    return this.Cities[this.CurrentCityIndex];
  }

  ResetGame() {
    this.CurrentCityIndex = Math.floor(Math.random() * this.Cities.length); // Start at a random city (0 indexed)
    this.CurrentDay = 1;
    this.Player.ResetPlayer(this.CurrentDifficultyLevel);
    this.eventAggregator.publish('resetDrugsInBackpack', this.Drugs);
    this.IsLastDay = false;
    this.GameOver = false;
    this.UpdateDrugs();
    //this.TriggerSurprises(); Can't trigger these on the opening day because the modal tries to open too early... How to get around that?
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
      promisesAry.push(this.DrugService.GetNewAvailability(this.CurrentCity, drug));
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

  TriggerSurprises() {
    // Going through the surprises randomly to make sure that all have an equal chance of being triggered
    let surprisePromises = [];
    for (let i = this.Surprises.length - 1; i >= 0; i--) {
      let idx = Math.floor(Math.random() * (i + 1));
      let surpriseToCheck = this.Surprises[idx];

      if(Math.random() <= surpriseToCheck.Threshold) {
        // Add checks here to ensure that these things are all in existence

        surprisePromises.push(this[surpriseToCheck.ServiceName][surpriseToCheck.FunctionName](surpriseToCheck.FunctionArguments));
        break;
      }
    }

    Promise.all(surprisePromises).then(
      resultsAry => {
        if(resultsAry.length > 0) {
          this.eventAggregator.publish('surprisesTriggered', resultsAry);
        }
      }
    );
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

    this.TriggerSurprises();
  }
}
