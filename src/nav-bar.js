import {bindable, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {GameEngine} from './engines/gameEngine';
import {DayOption} from './models/dayOption'
import {DifficultyLevel} from './models/difficultyLevel'

@inject(Router, GameEngine)
export class NavBar {
  GameEngine;
  DayOptions;
  CurrentDayOption;
  DifficultyLevels;
  CurrentDifficultyLevel;

  constructor(router, gameEngine) {
    this.router = router;
    this.GameEngine = gameEngine;
  }

  dayOptionChange(newDayOption) {
    // Is there a way to get this into the HTML? Can't do it right now due to it's dependency on a bound param that isn't value immediately
    location.href = this.router.generate("Dope Wars", {
      totalDays: newDayOption.TotalDays,
      difficultyLevel: this.GameEngine.CurrentDifficultyLevel.Name
    });
  }

  difficultyLevelChange(newDiffLevel) {
    // Is there a way to get this into the HTML? Can't do it right now due to it's dependency on a bound param that isn't value immediately
    location.href = this.router.generate("Dope Wars", {
      totalDays: this.GameEngine.CurrentDayOption.TotalDays,
      difficultyLevel: newDiffLevel.Name
    });
  }

  restartGame() {
    this.GameEngine.ResetGame();
  }
}
