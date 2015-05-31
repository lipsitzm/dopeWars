import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {GameEngine} from './engines/gameEngine';

@inject(EventAggregator,  GameEngine)
export class Game {
  surpriseTriggered = false;
  surpriseTitle;
  surpriseModalView;
  surpriseModalModel;

  constructor(eventAggregator, gameEngine) {
    this.GameEngine = gameEngine;

    this.eventAggregator = eventAggregator;

    this.eventAggregator.subscribe('surprisesTriggered', surpriseResults => {
      this.surpriseTitle = 'Today\'s Events';
      this.surpriseModalView = 'modalBodies/surpriseEvents';
      this.surpriseModalModel = {
        Results: surpriseResults,
        Game: this
      };
      this.surpriseTriggered = true;
    });
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

  cancel() {
    this.surpriseTriggered = false;
  }
}
