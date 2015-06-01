System.register([], function (_export) {
  "use strict";

  var CityInfo;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      CityInfo = (function () {
        function CityInfo(nameIn, avThresh) {
          _classCallCheck(this, CityInfo);

          this.name = nameIn;
          this.availabilityThreshold = avThresh;
        }

        _createClass(CityInfo, [{
          key: "Name",
          get: function () {
            return this.name;
          }
        }, {
          key: "AvailabilityThreshold",
          get: function () {
            return this.availabilityThreshold;
          }
        }]);

        return CityInfo;
      })();

      _export("CityInfo", CityInfo);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9jaXR5SW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxRQUFROzs7Ozs7Ozs7QUFBUixjQUFRO0FBSVIsaUJBSkEsUUFBUSxDQUlQLE1BQU0sRUFBRSxRQUFRLEVBQUU7Z0NBSm5CLFFBQVE7O0FBS2pCLGNBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUM7U0FDdkM7O3FCQVBVLFFBQVE7O2VBU1gsWUFBRztBQUNULG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7V0FDbEI7OztlQUV3QixZQUFHO0FBQzFCLG1CQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztXQUNuQzs7O2VBZlUsUUFBUTs7OzBCQUFSLFFBQVEiLCJmaWxlIjoibW9kZWxzL2NpdHlJbmZvLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=