System.register(['services/cityService', 'services/drugService', 'services/playerService', 'services/dayService', 'services/difficultyService', 'models/difficultyLevel'], function (_export) {
  var CityService, DrugService, PlayerService, DayService, DifficultyLevelsService, DifficultyLevel, _classCallCheck, _createClass, GameEngine;

  return {
    setters: [function (_servicesCityService) {
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
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      GameEngine = (function () {
        function GameEngine(cityService, drugService, playerService, dayService, difficultyLevelsService) {
          var _this = this;

          _classCallCheck(this, GameEngine);

          this.DayService = dayService;
          this.DayOptions = null;
          this.CurrentDayOption = null;
          this.DayService.GetDayOptions().then(function (dayOptions) {
            _this.DayOptions = dayOptions;
          });

          this.DifficultyLevelsService = difficultyLevelsService;
          this.DifficultyLevels = null;
          this.CurrentDifficultyLevel = null;
          this.DifficultyLevelsService.GetDifficultyLevels().then(function (diffLevels) {
            _this.DifficultyLevels = diffLevels;
          });

          this.CityService = cityService;
          this.Cities = [];
          this.CityService.GetCityList().then(function (cities) {
            _this.Cities = cities;
          });

          this.DrugService = drugService;
          this.Drugs = [];
          this.OriginalDrugs = [];
          this.DrugsAvailable = false;
          this.DrugService.GetDrugList().then(function (drugList) {
            _this.Drugs = _this.OriginalDrugs = drugList;
          });

          this.PlayerService = playerService;
          this.Player = null;
          this.PlayerService.GetPlayer().then(function (player) {
            _this.Player = player;
          });
        }

        _createClass(GameEngine, [{
          key: 'ResetGame',
          value: function ResetGame() {
            this.CurrentCityIndex = Math.floor(Math.random() * this.Cities.length);
            this.CurrentDay = 1;
            this.Player.ResetPlayer(this.CurrentDifficultyLevel);
            this.IsLastDay = false;
            this.GameOver = false;
            this.Drugs = this.OriginalDrugs;
            this.UpdateDrugs();
            this.TriggerRestart = false;
          }
        }, {
          key: 'ChangeDifficultyLevel',
          value: function ChangeDifficultyLevel(chosenDifficultyLevel) {
            this.CurrentDifficultyLevel = chosenDifficultyLevel;
            this.ResetGame();
          }
        }, {
          key: 'UpdateDrugs',
          value: function UpdateDrugs() {
            var _this2 = this;

            var promisesAry = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.Drugs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var drug = _step.value;

                promisesAry.push(this.DrugService.GetNewPrice(drug));
                promisesAry.push(this.DrugService.GetNewAvailability(this.Cities[this.CurrentCityIndex], drug));
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return Promise.all(promisesAry).then(function (resultsAry) {
              _this2.DrugsAvailable = false;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = _this2.Drugs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var drug = _step2.value;

                  if (drug.Available) {
                    _this2.DrugsAvailable = true;
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                    _iterator2['return']();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }
            });
          }
        }, {
          key: 'UpdateDay',
          value: function UpdateDay() {
            this.CurrentDay++;
          }
        }, {
          key: 'CheckIfReachedMaxDay',
          value: function CheckIfReachedMaxDay() {
            return this.CurrentDay >= this.CurrentDayOption.TotalDays;
          }
        }, {
          key: 'MoveCity',
          value: function MoveCity(idx) {
            if (this.IsLastDay) {
              this.GameOver = true;
              return;
            }

            if (this.CurrentCityIndex === idx) {
              return;
            }

            this.UpdateDay();
            this.IsLastDay = this.CheckIfReachedMaxDay();

            this.CurrentCityIndex = idx;
            this.UpdateDrugs();
            this.Player.IncreaseLoanAmount();

            return this.Cities[this.CurrentCityIndex];
          }
        }]);

        return GameEngine;
      })();

      _export('GameEngine', GameEngine);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFDakIsa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLHFCQUFPO2FBQ1I7O0FBR0QsZ0JBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLEdBQUcsRUFBRTtBQUNoQyxxQkFBTzthQUNSOztBQUVELGdCQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDakIsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0FBRTdDLGdCQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0FBQzVCLGdCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzs7QUFFakMsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztXQUMzQzs7O2VBdkdVLFVBQVU7Ozs0QkFBVixVQUFVIiwiZmlsZSI6ImVuZ2luZXMvZ2FtZUVuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9