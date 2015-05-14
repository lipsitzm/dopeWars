import {bindable, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class NavBar {
  @bindable day_options;
  @bindable current_day_option;
  @bindable difficulty_levels;
  @bindable current_difficulty_level;
  @bindable game_engine;

  constructor(router) {
    this.router = router;
  }

  dayOptionChange(newDayOption) {
    // Is there a way to get this into the HTML? Can't do it right now due to it's dependency on a bound param that isn't value immediately
    location.href = this.router.generate("Dope Wars", {
      totalDays: newDayOption.TotalDays,
      difficultyLevel: this.current_difficulty_level.Name
    });
  }

  difficultyLevelChange(newDiffLevel) {
    // Is there a way to get this into the HTML? Can't do it right now due to it's dependency on a bound param that isn't value immediately
    location.href = this.router.generate("Dope Wars", {
      totalDays: this.current_day_option.TotalDays,
      difficultyLevel: newDiffLevel.Name
    });
  }

  restartGame() {
    this.game_engine.ResetGame();
  }
}
