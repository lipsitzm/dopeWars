System.register(['aurelia-framework', 'aurelia-event-aggregator', 'services/cityService', 'services/drugService', 'services/playerService', 'services/dayService', 'services/difficultyService', 'models/difficultyLevel', 'services/surpriseService', 'models/Surprise'], function (_export) {
  'use strict';

  var inject, EventAggregator, CityService, DrugService, PlayerService, DayService, DifficultyLevelsService, DifficultyLevel, SurpriseService, Surprise, GameEngine;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
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
    }, function (_servicesSurpriseService) {
      SurpriseService = _servicesSurpriseService.SurpriseService;
    }, function (_modelsSurprise) {
      Surprise = _modelsSurprise.Surprise;
    }],
    execute: function () {
      GameEngine = (function () {
        function GameEngine(eventAggregator, cityService, drugService, playerService, dayService, difficultyLevelsService, surpriseService) {
          var _this = this;

          _classCallCheck(this, _GameEngine);

          this.eventAggregator = eventAggregator;

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
          this.DrugsAvailable = false;
          this.DrugService.GetDrugList().then(function (drugList) {
            _this.Drugs = drugList;
          });

          this.PlayerService = playerService;
          this.Player = null;
          this.PlayerService.GetPlayer().then(function (player) {
            _this.Player = player;
          });

          this.SurpriseService = surpriseService;
          this.Surprises = null;
          this.SurpriseService.GetSurprises().then(function (surprises) {
            _this.Surprises = surprises;
          });
        }

        var _GameEngine = GameEngine;

        _createClass(_GameEngine, [{
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
            this.eventAggregator.publish('resetDrugsInBackpack', this.Drugs);
            this.IsLastDay = false;
            this.GameOver = false;
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
          key: 'TriggerSurprises',
          value: function TriggerSurprises() {
            var _this3 = this;

            var surprisePromises = [];
            for (var i = this.Surprises.length - 1; i >= 0; i--) {
              var idx = Math.floor(Math.random() * (i + 1));
              var surpriseToCheck = this.Surprises[idx];

              if (Math.random() <= surpriseToCheck.Threshold) {

                surprisePromises.push(this[surpriseToCheck.ServiceName][surpriseToCheck.FunctionName](surpriseToCheck.FunctionArguments));
                break;
              }
            }

            Promise.all(surprisePromises).then(function (resultsAry) {
              if (resultsAry.length > 0) {
                _this3.eventAggregator.publish('surprisesTriggered', resultsAry);
              }
            });
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

            this.TriggerSurprises();
          }
        }]);

        GameEngine = inject(EventAggregator, CityService, DrugService, PlayerService, DayService, DifficultyLevelsService, SurpriseService)(GameEngine) || GameEngine;
        return GameEngine;
      })();

      _export('GameEngine', GameEngine);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFPLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLENBQUM7ZUFDaEU7YUFDRixDQUNGLENBQUM7V0FDSDs7O2lCQUVPLGtCQUFDLEdBQUcsRUFBRTtBQUNaLGdCQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDakIsa0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLHFCQUFPO2FBQ1I7O0FBR0QsZ0JBQUcsSUFBSSxDQUFDLGdCQUFnQixLQUFLLEdBQUcsRUFBRTtBQUNoQyxxQkFBTzthQUNSOztBQUVELGdCQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDakIsZ0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0FBRTdDLGdCQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDOztBQUU1QixnQkFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztBQUVuQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDOztBQUVqQyxnQkFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7V0FDekI7OztBQTVJVSxrQkFBVSxHQUR0QixNQUFNLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFVBQVUsRUFBRSx1QkFBdUIsRUFBRSxlQUFlLENBQUMsQ0FDMUcsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVOzs7NEJBQVYsVUFBVSIsImZpbGUiOiJlbmdpbmVzL2dhbWVFbmdpbmUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==