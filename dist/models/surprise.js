System.register([], function (_export) {
  "use strict";

  var Surprise;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      Surprise = (function () {
        function Surprise(thresholdIn, serviceNameIn, functionNameIn, functionArgumentsIn) {
          _classCallCheck(this, Surprise);

          this.threshold = thresholdIn;
          this.serviceName = serviceNameIn;
          this.functionName = functionNameIn;
          this.functionArguments = functionArgumentsIn;
        }

        _createClass(Surprise, [{
          key: "Threshold",
          get: function () {
            return this.threshold;
          }
        }, {
          key: "ServiceName",
          get: function () {
            return this.serviceName;
          }
        }, {
          key: "FunctionName",
          get: function () {
            return this.functionName;
          }
        }, {
          key: "FunctionArguments",
          get: function () {
            return this.functionArguments;
          }
        }]);

        return Surprise;
      })();

      _export("Surprise", Surprise);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9zdXJwcmlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxRQUFROzs7Ozs7Ozs7QUFBUixjQUFRO0FBTVIsaUJBTkEsUUFBUSxDQU1QLFdBQVcsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFO2dDQU5sRSxRQUFROztBQU9qQixjQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUM3QixjQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztBQUNqQyxjQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUNuQyxjQUFJLENBQUMsaUJBQWlCLEdBQUcsbUJBQW1CLENBQUM7U0FDOUM7O3FCQVhVLFFBQVE7O2VBYU4sWUFBRztBQUNkLG1CQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7V0FDdkI7OztlQUVjLFlBQUc7QUFDaEIsbUJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztXQUN6Qjs7O2VBRWUsWUFBRztBQUNqQixtQkFBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1dBQzFCOzs7ZUFFb0IsWUFBRztBQUN0QixtQkFBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7V0FDL0I7OztlQTNCVSxRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJtb2RlbHMvc3VycHJpc2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==