System.register(['aurelia-framework', './services/gameEngineService', './engines/gameEngine'], function (_export) {
  var bindable, inject, GameEngineService, GameEngine, _classCallCheck, _createClass, CityList;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_servicesGameEngineService) {
      GameEngineService = _servicesGameEngineService.GameEngineService;
    }, function (_enginesGameEngine) {
      GameEngine = _enginesGameEngine.GameEngine;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      CityList = (function () {
        function CityList(gameEngineService) {
          var _this = this;

          _classCallCheck(this, _CityList);

          this.GameEngineService = gameEngineService;
          this.GameEngineService.GetGameEngine().then(function (gameEngine) {
            _this.GameEngine = gameEngine;
          });
        }

        var _CityList = CityList;

        _createClass(_CityList, [{
          key: 'GameEngine',
          value: undefined,
          enumerable: true
        }, {
          key: 'MoveCity',
          value: function MoveCity(index) {
            this.GameEngine.MoveCity(index);
          }
        }]);

        CityList = inject(GameEngineService)(CityList) || CityList;
        return CityList;
      })();

      _export('CityList', CityList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHktbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3NGQUthLFFBQVE7Ozs7bUNBTGIsUUFBUTtpQ0FBRSxNQUFNOztxREFDaEIsaUJBQWlCOztzQ0FDakIsVUFBVTs7Ozs7Ozs7O0FBR0wsY0FBUTtBQUdSLGlCQUhBLFFBQVEsQ0FHUCxpQkFBaUIsRUFBRTs7Ozs7QUFDN0IsY0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0FBQzNDLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLFVBQUEsVUFBVSxFQUFJO0FBQ1osa0JBQUssVUFBVSxHQUFHLFVBQVUsQ0FBQztXQUM5QixDQUNKLENBQUM7U0FDSDs7d0JBVlUsUUFBUTs7Ozs7Ozs7aUJBWVgsa0JBQUMsS0FBSyxFQUFFO0FBQ2QsZ0JBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ2pDOzs7QUFkVSxnQkFBUSxHQURwQixNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FDYixRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVE7OzswQkFBUixRQUFRIiwiZmlsZSI6ImNpdHktbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9