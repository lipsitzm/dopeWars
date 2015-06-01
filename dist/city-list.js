System.register(['aurelia-framework', './engines/gameEngine'], function (_export) {
  'use strict';

  var bindable, inject, GameEngine, CityList;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_enginesGameEngine) {
      GameEngine = _enginesGameEngine.GameEngine;
    }],
    execute: function () {
      CityList = (function () {
        function CityList(gameEngine) {
          _classCallCheck(this, _CityList);

          this.GameEngine = gameEngine;
        }

        var _CityList = CityList;

        _createClass(_CityList, [{
          key: 'MoveCity',
          value: function MoveCity(index) {
            this.GameEngine.MoveCity(index);
          }
        }]);

        CityList = inject(GameEngine)(CityList) || CityList;
        return CityList;
      })();

      _export('CityList', CityList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHktbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0NBSWEsUUFBUTs7Ozs7Ozs7bUNBSmIsUUFBUTtpQ0FBRSxNQUFNOztzQ0FDaEIsVUFBVTs7O0FBR0wsY0FBUTtBQUdSLGlCQUhBLFFBQVEsQ0FHUCxVQUFVLEVBQUU7OztBQUN0QixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM5Qjs7d0JBTFUsUUFBUTs7OztpQkFPWCxrQkFBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDakM7OztBQVRVLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FDTixRQUFRLEtBQVIsUUFBUTtlQUFSLFFBQVE7OzswQkFBUixRQUFRIiwiZmlsZSI6ImNpdHktbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9