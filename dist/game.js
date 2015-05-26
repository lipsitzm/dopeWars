System.register(['aurelia-framework', './services/cityService', './services/drugService', './services/playerService', './services/dayService', './services/difficultyService', './models/difficultyLevel', './services/gameEngineService', './engines/gameEngine'], function (_export) {
  var inject, CityService, DrugService, PlayerService, DayService, DifficultyLevelsService, DifficultyLevel, GameEngineService, GameEngine, _classCallCheck, _createClass, Game;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesCityService) {
      CityService = _servicesCityService.CityService;
    }, function (_servicesDrugService) {
      DrugService = _servicesDrugService.DrugService;
    }, function (_servicesPlayerService) {
      PlayerService = _servicesPlayerService.PlayerService;
    }, function (_servicesDayService) {
      DayService = _servicesDayService.DayService;
    }, function (_servicesDifficultyService) {
      DifficultyLevelsService = _servicesDifficultyService.DifficultyLevelsService;
    }, function (_modelsDifficultyLevel) {
      DifficultyLevel = _modelsDifficultyLevel.DifficultyLevel;
    }, function (_servicesGameEngineService) {
      GameEngineService = _servicesGameEngineService.GameEngineService;
    }, function (_enginesGameEngine) {
      GameEngine = _enginesGameEngine.GameEngine;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Game = (function () {
        function Game(gameEngineService, cityService, drugService, playerService, dayService, difficultyLevelsService) {
          var _this = this;

          _classCallCheck(this, _Game);

          this.GameEngineService = gameEngineService;
          this.GameEngineService.Initialize(cityService, drugService, playerService, dayService, difficultyLevelsService).then(function (gameEngine) {
            _this.GameEngine = gameEngine;
          });
        }

        var _Game = Game;

        _createClass(_Game, [{
          key: 'ResetGame',
          value: function ResetGame() {
            this.GameEngine.ResetGame();
          }
        }, {
          key: 'activate',
          value: function activate(params, config, instruction) {
            var _this2 = this;

            if (instruction.params.hasOwnProperty('totalDays')) {
              (function () {
                var totalDays = parseInt(instruction.params.totalDays);
                var matchingDayOpts = _this2.GameEngine.DayOptions.filter(function (dOpt) {
                  return dOpt.TotalDays === totalDays;
                });

                if (matchingDayOpts.length === 1) {
                  _this2.GameEngine.CurrentDayOption = matchingDayOpts[0];
                } else {
                  throw 'Found multiple matching Day Options for the given Total Days.';
                }
              })();
            } else {
              throw 'There should have been a totalDays param';
            }

            if (instruction.params.hasOwnProperty('difficultyLevel')) {
              (function () {
                var diffLevelName = instruction.params.difficultyLevel;
                var matchingDiffLevels = _this2.GameEngine.DifficultyLevels.filter(function (dLevel) {
                  return dLevel.Name === diffLevelName;
                });

                if (matchingDiffLevels.length === 1) {
                  _this2.GameEngine.CurrentDifficultyLevel = matchingDiffLevels[0];
                } else {
                  throw 'Found multiple matching Difficulty Levels for the given Name.';
                }
              })();
            } else {
              throw 'There should have been a difficultyLevel param';
            }

            this.GameEngine.ResetGame();
          }
        }, {
          key: 'ChangeDifficultyLevel',
          value: function ChangeDifficultyLevel(chosenDifficultyLevel) {
            this.GameEngine.ChangeDifficultyLevel(chosenDifficultyLevel);
          }
        }, {
          key: 'UpdateDrugs',
          value: function UpdateDrugs() {
            this.GameEngine.UpdateDrugs();
          }
        }, {
          key: 'UpdateDay',
          value: function UpdateDay() {
            this.GameEngine.UpdateDay();
          }
        }, {
          key: 'CheckIfReachedMaxDay',
          value: function CheckIfReachedMaxDay() {
            this.GameEngine.CheckIfReachedMaxDay();
          }
        }, {
          key: 'MoveCity',
          value: function MoveCity(idx) {
            this.GameEngine.MoveCity(idx);
          }
        }]);

        Game = inject(GameEngineService, CityService, DrugService, PlayerService, DayService, DifficultyLevelsService)(Game) || Game;
        return Game;
      })();

      _export('Game', Game);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjsyS0FXYSxJQUFJOzs7O2lDQVhULE1BQU07O3lDQUNOLFdBQVc7O3lDQUNYLFdBQVc7OzZDQUNYLGFBQWE7O3VDQUNiLFVBQVU7OzJEQUNWLHVCQUF1Qjs7K0NBQ3ZCLGVBQWU7O3FEQUNmLGlCQUFpQjs7c0NBQ2pCLFVBQVU7Ozs7Ozs7OztBQUdMLFVBQUk7QUFFSixpQkFGQSxJQUFJLENBRUgsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFOzs7OztBQUMzRyxjQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7QUFDM0MsY0FBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQ2hILFVBQUEsVUFBVSxFQUFJO0FBQ2Qsa0JBQUssVUFBVSxHQUFHLFVBQVUsQ0FBQztXQUM5QixDQUNGLENBQUM7U0FDSDs7b0JBVFUsSUFBSTs7OztpQkFXTixxQkFBRztBQUNWLGdCQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1dBQzdCOzs7aUJBRU8sa0JBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7OztBQUNwQyxnQkFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRTs7QUFDbEQsb0JBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZELG9CQUFJLGVBQWUsR0FBRyxPQUFLLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQzlELHlCQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDO2lCQUNyQyxDQUFDLENBQUM7O0FBRUgsb0JBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDaEMseUJBQUssVUFBVSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkQsTUFBTTtBQUNMLHdCQUFNLCtEQUErRCxDQUFDO2lCQUN2RTs7YUFDRixNQUFNO0FBQ0wsb0JBQU0sMENBQTBDLENBQUM7YUFDbEQ7O0FBRUQsZ0JBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsRUFBRTs7QUFDeEQsb0JBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO0FBQ3ZELG9CQUFJLGtCQUFrQixHQUFHLE9BQUssVUFBVSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUN6RSx5QkFBTyxNQUFNLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQztpQkFDdEMsQ0FBQyxDQUFDOztBQUVILG9CQUFJLGtCQUFrQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDbkMseUJBQUssVUFBVSxDQUFDLHNCQUFzQixHQUFHLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNoRSxNQUFNO0FBQ0wsd0JBQU0sK0RBQStELENBQUM7aUJBQ3ZFOzthQUNGLE1BQU07QUFDTCxvQkFBTSxnREFBZ0QsQ0FBQzthQUN4RDs7QUFFRCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztXQUM3Qjs7O2lCQUVvQiwrQkFBQyxxQkFBcUIsRUFBRTtBQUMzQyxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1dBQzlEOzs7aUJBRVUsdUJBQUc7QUFDWixnQkFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUMvQjs7O2lCQUVRLHFCQUFHO0FBQ1YsZ0JBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7V0FDN0I7OztpQkFFbUIsZ0NBQUc7QUFDckIsZ0JBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztXQUN4Qzs7O2lCQUVPLGtCQUFDLEdBQUcsRUFBRTtBQUNaLGdCQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztXQUMvQjs7O0FBbkVVLFlBQUksR0FEaEIsTUFBTSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxDQUMzRixJQUFJLEtBQUosSUFBSTtlQUFKLElBQUk7OztzQkFBSixJQUFJIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==