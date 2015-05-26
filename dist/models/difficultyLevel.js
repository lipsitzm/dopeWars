System.register([], function (_export) {
  var _classCallCheck, _createClass, DifficultyLevel;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      DifficultyLevel = (function () {
        function DifficultyLevel(nameIn, startingMoneyIn, startingBackpackSizeIn, interestRateIn, loanOutstandingIn) {
          _classCallCheck(this, DifficultyLevel);

          this.name = nameIn;
          this.startingMoney = startingMoneyIn;
          this.startingBackpackSize = startingBackpackSizeIn;
          this.interestRate = interestRateIn;
          this.loanOutstanding = loanOutstandingIn;
        }

        _createClass(DifficultyLevel, [{
          key: "startingMoney",
          value: undefined,
          enumerable: true
        }, {
          key: "startingBackpackSize",
          value: undefined,
          enumerable: true
        }, {
          key: "name",
          value: undefined,
          enumerable: true
        }, {
          key: "interestRate",
          value: undefined,
          enumerable: true
        }, {
          key: "loanOutstanding",
          value: undefined,
          enumerable: true
        }, {
          key: "Name",
          get: function () {
            return this.name;
          }
        }, {
          key: "StartingMoney",
          get: function () {
            return this.startingMoney;
          }
        }, {
          key: "StartingBackpackSize",
          get: function () {
            return this.startingBackpackSize;
          }
        }, {
          key: "InterestRate",
          get: function () {
            return this.interestRate;
          }
        }, {
          key: "LoanOutstanding",
          get: function () {
            return this.loanOutstanding;
          }
        }]);

        return DifficultyLevel;
      })();

      _export("DifficultyLevel", DifficultyLevel);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kaWZmaWN1bHR5TGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxlQUFlOzs7Ozs7Ozs7OztBQUFmLHFCQUFlO0FBT2YsaUJBUEEsZUFBZSxDQU9kLE1BQU0sRUFBRSxlQUFlLEVBQUUsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFO2dDQVByRixlQUFlOztBQVF4QixjQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNuQixjQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQztBQUNyQyxjQUFJLENBQUMsb0JBQW9CLEdBQUcsc0JBQXNCLENBQUM7QUFDbkQsY0FBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDbkMsY0FBSSxDQUFDLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQztTQUMxQzs7cUJBYlUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWVsQixZQUFHO0FBQ1QsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztXQUNsQjs7O2VBRWdCLFlBQUc7QUFDbEIsbUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztXQUMzQjs7O2VBRXVCLFlBQUc7QUFDekIsbUJBQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1dBQ2xDOzs7ZUFFZSxZQUFHO0FBQ2pCLG1CQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7V0FDMUI7OztlQUVrQixZQUFHO0FBQ3BCLG1CQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7V0FDN0I7OztlQWpDVSxlQUFlOzs7aUNBQWYsZUFBZSIsImZpbGUiOiJtb2RlbHMvZGlmZmljdWx0eUxldmVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=