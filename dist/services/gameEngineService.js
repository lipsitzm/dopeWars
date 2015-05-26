System.register(['engines/gameEngine'], function (_export) {
  var GameEngine, _classCallCheck, _createClass, gameEngine, GameEngineService;

  return {
    setters: [function (_enginesGameEngine) {
      GameEngine = _enginesGameEngine.GameEngine;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      gameEngine = null;

      GameEngineService = (function () {
        function GameEngineService() {
          _classCallCheck(this, GameEngineService);
        }

        _createClass(GameEngineService, [{
          key: 'Initialize',
          value: function Initialize(cityService, drugService, playerService, dayService, difficultyLevelsService) {
            return new Promise(function (resolve, reject) {
              gameEngine = new GameEngine(cityService, drugService, playerService, dayService, difficultyLevelsService);
              resolve(gameEngine);
            });
          }
        }, {
          key: 'GetGameEngine',
          value: function GetGameEngine() {
            return new Promise(function (resolve, reject) {
              resolve(gameEngine);
            });
          }
        }]);

        return GameEngineService;
      })();

      _export('GameEngineService', GameEngineService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dhbWVFbmdpbmVTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7aURBRUksVUFBVSxFQUVELGlCQUFpQjs7OztzQ0FKdEIsVUFBVTs7Ozs7Ozs7O0FBRWQsZ0JBQVUsR0FBRyxJQUFJOztBQUVSLHVCQUFpQjtpQkFBakIsaUJBQWlCO2dDQUFqQixpQkFBaUI7OztxQkFBakIsaUJBQWlCOztpQkFHbEIsb0JBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLHVCQUF1QixFQUFFO0FBQ3ZGLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIsd0JBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQUMxRyxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztXQUNOOzs7aUJBRVkseUJBQUc7QUFDZCxtQkFBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3pCLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDckIsQ0FBQyxDQUFDO1dBQ047OztlQWhCVSxpQkFBaUI7OzttQ0FBakIsaUJBQWlCIiwiZmlsZSI6InNlcnZpY2VzL2dhbWVFbmdpbmVTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=