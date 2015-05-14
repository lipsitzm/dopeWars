import {bindable, inject} from 'aurelia-framework';
import {DayService} from './services/dayService';
import {DayOption} from './models/dayOption';
import {DifficultyLevelsService} from './services/difficultyService';
import {DifficultyLevel} from './models/difficultyLevel';

import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(DayService, DifficultyLevelsService)
export class App {
  constructor(dayService, difficultyLevelsService) {
    this.DayService = dayService;
    this.DifficultyLevelsService = difficultyLevelsService;
  }

  configureRouter(config, router) {
    config.mapUnknownRoutes(instruction => {
      let promisesAry = [this.DayService.GetDayOptions(), this.DifficultyLevelsService.GetDifficultyLevels()];
      return Promise.all(promisesAry).then(
          resultsAry => {
          if (resultsAry.length != 2) {
            throw 'Expected 2 arrays to be resolved from Service promises';
          }
          if (resultsAry[0].length < 1 && resultsAry[0][0] instanceof DayOption) {
            throw 'Expected at least one Day Option to load as a default';
          }
          if (resultsAry[1].length < 1 && resultsAry[1][0] instanceof DifficultyLevel) {
            throw 'Expected at least one Difficulty Level to load as a default';
          }

          instruction.params.totalDays = resultsAry[0][0].TotalDays;
          instruction.params.difficultyLevel = resultsAry[1][0].Name;
          instruction.config.moduleId = './game'
        }
      );
    });

    config.map([
      // No default route because the mapUnknownRoutes is handling that now
      {
        route: ':totalDays/:difficultyLevel',
        moduleId: './game',
        title: 'Dope Wars'
      }
    ]);

    config.title = 'Dope Wars';
  }

}
