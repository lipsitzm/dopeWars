System.register(['aurelia-framework', 'aurelia-router', './engines/gameEngine', './models/dayOption', './models/difficultyLevel'], function (_export) {
  'use strict';

  var bindable, inject, Router, GameEngine, DayOption, DifficultyLevel, NavBar;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_enginesGameEngine) {
      GameEngine = _enginesGameEngine.GameEngine;
    }, function (_modelsDayOption) {
      DayOption = _modelsDayOption.DayOption;
    }, function (_modelsDifficultyLevel) {
      DifficultyLevel = _modelsDifficultyLevel.DifficultyLevel;
    }],
    execute: function () {
      NavBar = (function () {
        function NavBar(router, gameEngine) {
          _classCallCheck(this, _NavBar);

          this.router = router;
          this.GameEngine = gameEngine;
        }

        var _NavBar = NavBar;

        _createClass(_NavBar, [{
          key: 'dayOptionChange',
          value: function dayOptionChange(newDayOption) {
            location.href = this.router.generate('game', {
              totalDays: newDayOption.TotalDays,
              difficultyLevel: this.GameEngine.CurrentDifficultyLevel.Name
            });
          }
        }, {
          key: 'difficultyLevelChange',
          value: function difficultyLevelChange(newDiffLevel) {
            location.href = this.router.generate('game', {
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

        NavBar = inject(Router, GameEngine)(NavBar) || NavBar;
        return NavBar;
      })();

      _export('NavBar', NavBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dFQU9hLE1BQU07Ozs7Ozs7O21DQVBYLFFBQVE7aUNBQUUsTUFBTTs7OEJBQ2hCLE1BQU07O3NDQUNOLFVBQVU7O21DQUNWLFNBQVM7OytDQUNULGVBQWU7OztBQUdWLFlBQU07QUFPTixpQkFQQSxNQUFNLENBT0wsTUFBTSxFQUFFLFVBQVUsRUFBRTs7O0FBQzlCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzlCOztzQkFWVSxNQUFNOzs7O2lCQVlGLHlCQUFDLFlBQVksRUFBRTtBQUU1QixvQkFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDM0MsdUJBQVMsRUFBRSxZQUFZLENBQUMsU0FBUztBQUNqQyw2QkFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsSUFBSTthQUM3RCxDQUFDLENBQUM7V0FDSjs7O2lCQUVvQiwrQkFBQyxZQUFZLEVBQUU7QUFFbEMsb0JBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO0FBQzNDLHVCQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO0FBQ3JELDZCQUFlLEVBQUUsWUFBWSxDQUFDLElBQUk7YUFDbkMsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFVSx1QkFBRztBQUNaLGdCQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1dBQzdCOzs7QUE5QlUsY0FBTSxHQURsQixNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUNkLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoibmF2LWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9