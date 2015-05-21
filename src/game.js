import {inject} from 'aurelia-framework';
import {CityService} from './services/cityService';
import {DrugService} from './services/drugService';
import {PlayerService} from './services/playerService';
import {DayService} from './services/dayService';
import {DifficultyLevelsService} from './services/difficultyService';
import {DifficultyLevel} from './models/difficultyLevel';
import {GameEngineService} from './services/gameEngineService';
import {GameEngine} from './engines/gameEngine';

@inject(GameEngineService, CityService, DrugService, PlayerService, DayService, DifficultyLevelsService)
export class Game {

  constructor(gameEngineService, cityService, drugService, playerService, dayService, difficultyLevelsService) {
    this.GameEngineService = gameEngineService;
    this.GameEngineService.Initialize(cityService, drugService, playerService, dayService, difficultyLevelsService).then(
        gameEngine => {
        this.GameEngine = gameEngine;
      }
    );
  }

  ResetGame() {
    this.GameEngine.ResetGame();
  }

  activate(params, config, instruction) {
    if (instruction.params.hasOwnProperty('totalDays')) {
      let totalDays = parseInt(instruction.params.totalDays);
      let matchingDayOpts = this.GameEngine.DayOptions.filter(dOpt => {
        return dOpt.TotalDays === totalDays;
      });

      if (matchingDayOpts.length === 1) {
        this.GameEngine.CurrentDayOption = matchingDayOpts[0];
      } else {
        throw 'Found multiple matching Day Options for the given Total Days.';
      }
    } else {
      throw 'There should have been a totalDays param';
    }

    if (instruction.params.hasOwnProperty('difficultyLevel')) {
      let diffLevelName = instruction.params.difficultyLevel;
      let matchingDiffLevels = this.GameEngine.DifficultyLevels.filter(dLevel => {
        return dLevel.Name === diffLevelName;
      });

      if (matchingDiffLevels.length === 1) {
        this.GameEngine.CurrentDifficultyLevel = matchingDiffLevels[0];
      } else {
        throw 'Found multiple matching Difficulty Levels for the given Name.';
      }
    } else {
      throw 'There should have been a difficultyLevel param';
    }

    this.GameEngine.ResetGame();
  }

  ChangeDifficultyLevel(chosenDifficultyLevel) {
    this.GameEngine.ChangeDifficultyLevel(chosenDifficultyLevel);
  }

  UpdateDrugs() {
    this.GameEngine.UpdateDrugs();
  }

  UpdateDay() {
    this.GameEngine.UpdateDay();
  }

  CheckIfReachedMaxDay() {
    this.GameEngine.CheckIfReachedMaxDay();
  }

  MoveCity(idx) {
    this.GameEngine.MoveCity(idx);
  }
}
