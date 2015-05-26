System.register(['aurelia-framework', 'aurelia-router', './services/gameEngineService', './engines/gameEngine', './models/dayOption', './models/difficultyLevel'], function (_export) {
  var bindable, inject, Router, GameEngineService, GameEngine, DayOption, DifficultyLevel, _classCallCheck, _createClass, NavBar;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_servicesGameEngineService) {
      GameEngineService = _servicesGameEngineService.GameEngineService;
    }, function (_enginesGameEngine) {
      GameEngine = _enginesGameEngine.GameEngine;
    }, function (_modelsDayOption) {
      DayOption = _modelsDayOption.DayOption;
    }, function (_modelsDifficultyLevel) {
      DifficultyLevel = _modelsDifficultyLevel.DifficultyLevel;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      NavBar = (function () {
        function NavBar(router, gameEngineService) {
          var _this = this;

          _classCallCheck(this, _NavBar);

          this.router = router;

          this.GameEngineService = gameEngineService;
          this.GameEngineService.GetGameEngine().then(function (gameEngine) {
            _this.GameEngine = gameEngine;
          });
        }

        var _NavBar = NavBar;

        _createClass(_NavBar, [{
          key: 'GameEngine',
          value: undefined,
          enumerable: true
        }, {
          key: 'DayOptions',
          value: undefined,
          enumerable: true
        }, {
          key: 'CurrentDayOption',
          value: undefined,
          enumerable: true
        }, {
          key: 'DifficultyLevels',
          value: undefined,
          enumerable: true
        }, {
          key: 'CurrentDifficultyLevel',
          value: undefined,
          enumerable: true
        }, {
          key: 'dayOptionChange',
          value: function dayOptionChange(newDayOption) {
            location.href = this.router.generate('Dope Wars', {
              totalDays: newDayOption.TotalDays,
              difficultyLevel: this.GameEngine.CurrentDifficultyLevel.Name
            });
          }
        }, {
          key: 'difficultyLevelChange',
          value: function difficultyLevelChange(newDiffLevel) {
            location.href = this.router.generate('Dope Wars', {
              totalDays: this.GameEngine.CurrentDayOption.TotalDays,
              difficultyLevel: newDiffLevel.Name
            });
          }
        }, {
          key: 'restartGame',
          value: function restartGame() {
            this.GameEngine.ResetGame();
          }
        }]);

        NavBar = inject(Router, GameEngineService)(NavBar) || NavBar;
        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjswSEFRYSxNQUFNOzs7O21DQVJYLFFBQVE7aUNBQUUsTUFBTTs7OEJBQ2hCLE1BQU07O3FEQUNOLGlCQUFpQjs7c0NBQ2pCLFVBQVU7O21DQUNWLFNBQVM7OytDQUNULGVBQWU7Ozs7Ozs7OztBQUdWLFlBQU07QUFPTixpQkFQQSxNQUFNLENBT0wsTUFBTSxFQUFFLGlCQUFpQixFQUFFOzs7OztBQUNyQyxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7QUFFckIsY0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0FBQzNDLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLFVBQUEsVUFBVSxFQUFJO0FBQ1osa0JBQUssVUFBVSxHQUFHLFVBQVUsQ0FBQztXQUM5QixDQUNKLENBQUM7U0FDSDs7c0JBaEJVLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFrQkYseUJBQUMsWUFBWSxFQUFFO0FBRTVCLG9CQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRTtBQUNoRCx1QkFBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO0FBQ2pDLDZCQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJO2FBQzdELENBQUMsQ0FBQztXQUNKOzs7aUJBRW9CLCtCQUFDLFlBQVksRUFBRTtBQUVsQyxvQkFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7QUFDaEQsdUJBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7QUFDckQsNkJBQWUsRUFBRSxZQUFZLENBQUMsSUFBSTthQUNuQyxDQUFDLENBQUM7V0FDSjs7O2lCQUVVLHVCQUFHO0FBQ1osZ0JBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7V0FDN0I7OztBQXBDVSxjQUFNLEdBRGxCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FDckIsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJuYXYtYmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=