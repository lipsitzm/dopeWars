System.register(['aurelia-framework', 'aurelia-event-aggregator', './engines/gameEngine'], function (_export) {
  'use strict';

  var inject, EventAggregator, GameEngine, Game;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_enginesGameEngine) {
      GameEngine = _enginesGameEngine.GameEngine;
    }],
    execute: function () {
      Game = (function () {
        function Game(eventAggregator, gameEngine) {
          var _this = this;

          _classCallCheck(this, _Game);

          this.surpriseTriggered = false;

          this.GameEngine = gameEngine;

          this.eventAggregator = eventAggregator;

          this.eventAggregator.subscribe('surprisesTriggered', function (surpriseResults) {
            _this.surpriseTitle = 'Today\'s Events';
            _this.surpriseModalView = 'modalBodies/surpriseEvents';
            _this.surpriseModalModel = {
              Results: surpriseResults,
              Game: _this
            };
            _this.surpriseTriggered = true;
          });
        }

        var _Game = Game;

        _createClass(_Game, [{
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
          key: 'cancel',
          value: function cancel() {
            this.surpriseTriggered = false;
          }
        }]);

        Game = inject(EventAggregator, GameEngine)(Game) || Game;
        return Game;
      })();

      _export('Game', Game);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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