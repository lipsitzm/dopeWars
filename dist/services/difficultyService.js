System.register(['models/difficultyLevel'], function (_export) {
  var DifficultyLevel, _classCallCheck, _createClass, difficultyLevels, DifficultyLevelsService;

  return {
    setters: [function (_modelsDifficultyLevel) {
      DifficultyLevel = _modelsDifficultyLevel.DifficultyLevel;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      difficultyLevels = [new DifficultyLevel('Easy', 25000, 100, 0.1, 10000), new DifficultyLevel('Medium', 10000, 75, 0.3, 7500), new DifficultyLevel('Hard', 5000, 50, 0.5, 5000)];

      DifficultyLevelsService = (function () {
        function DifficultyLevelsService() {
          _classCallCheck(this, DifficultyLevelsService);
        }

        _createClass(DifficultyLevelsService, [{
          key: 'GetDifficultyLevels',
          value: function GetDifficultyLevels() {
            return new Promise(function (resolve, reject) {
              resolve(difficultyLevels);
            });
          }
        }]);

        return DifficultyLevelsService;
      })();

      _export('DifficultyLevelsService', DifficultyLevelsService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RpZmZpY3VsdHlTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7c0RBRUksZ0JBQWdCLEVBTVAsdUJBQXVCOzs7OytDQVI1QixlQUFlOzs7Ozs7Ozs7QUFFbkIsc0JBQWdCLEdBQUcsQ0FDckIsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRSxFQUFFLEtBQUssQ0FBQyxFQUNsRCxJQUFJLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFFLEVBQUUsSUFBSSxDQUFDLEVBQ2xELElBQUksZUFBZSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUUsRUFBRSxJQUFJLENBQUMsQ0FDaEQ7O0FBRVksNkJBQXVCO2lCQUF2Qix1QkFBdUI7Z0NBQXZCLHVCQUF1Qjs7O3FCQUF2Qix1QkFBdUI7O2lCQUNmLCtCQUFHO0FBQ3BCLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIscUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQzNCLENBQUMsQ0FBQztXQUNOOzs7ZUFOVSx1QkFBdUI7Ozt5Q0FBdkIsdUJBQXVCIiwiZmlsZSI6InNlcnZpY2VzL2RpZmZpY3VsdHlTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=