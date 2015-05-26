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
          key: 'CurrentCity',
          get: function () {
            return this.Cities[this.CurrentCityIndex];
          }
        }, {
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
                promisesAry.push(this.DrugService.GetNewAvailability(this.CurrentCity, drug));
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
          }
        }]);

        return GameEngine;
      })();

      _export('GameEngine', GameEngine);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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RU8sa0JBQUMsR0FBRyxFQUFFO0FBQ1osZ0JBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNqQixrQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIscUJBQU87YUFDUjs7QUFHRCxnQkFBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssR0FBRyxFQUFFO0FBQ2hDLHFCQUFPO2FBQ1I7O0FBRUQsZ0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUNqQixnQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7QUFFN0MsZ0JBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7QUFDNUIsZ0JBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1dBQ2xDOzs7ZUF6R1UsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoiZW5naW5lcy9nYW1lRW5naW5lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=