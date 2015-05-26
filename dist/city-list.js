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
            _this.CurrentCity = _this.GameEngine.Cities[_this.GameEngine.CurrentCityIndex];
          });
        }

        var _CityList = CityList;

        _createClass(_CityList, [{
          key: 'GameEngine',
          value: undefined,
          enumerable: true
        }, {
          key: 'CurrentCity',
          value: undefined,
          enumerable: true
        }, {
          key: 'MoveCity',
          value: function MoveCity(index) {
            this.CurrentCity = this.GameEngine.MoveCity(index);
          }
        }]);

        CityList = inject(GameEngineService)(CityList) || CityList;
        return CityList;
      })();

      _export('CityList', CityList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHktbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3NGQUthLFFBQVE7Ozs7bUNBTGIsUUFBUTtpQ0FBRSxNQUFNOztxREFDaEIsaUJBQWlCOztzQ0FDakIsVUFBVTs7Ozs7Ozs7O0FBR0wsY0FBUTtBQUlSLGlCQUpBLFFBQVEsQ0FJUCxpQkFBaUIsRUFBRTs7Ozs7QUFDN0IsY0FBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0FBQzNDLGNBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLFVBQUEsVUFBVSxFQUFJO0FBQ1osa0JBQUssVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixrQkFBSyxXQUFXLEdBQUcsTUFBSyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQUssVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7V0FDN0UsQ0FDSixDQUFDO1NBQ0g7O3dCQVpVLFFBQVE7Ozs7Ozs7Ozs7OztpQkFjWCxrQkFBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUNwRDs7O0FBaEJVLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUNiLFFBQVEsS0FBUixRQUFRO2VBQVIsUUFBUTs7OzBCQUFSLFFBQVEiLCJmaWxlIjoiY2l0eS1saXN0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=