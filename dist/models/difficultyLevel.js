System.register([], function (_export) {
  "use strict";

  var DifficultyLevel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kaWZmaWN1bHR5TGV2ZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsZUFBZTs7Ozs7Ozs7O0FBQWYscUJBQWU7QUFPZixpQkFQQSxlQUFlLENBT2QsTUFBTSxFQUFFLGVBQWUsRUFBRSxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7Z0NBUHJGLGVBQWU7O0FBUXhCLGNBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ3JDLGNBQUksQ0FBQyxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztBQUNuRCxjQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQztBQUNuQyxjQUFJLENBQUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDO1NBQzFDOztxQkFiVSxlQUFlOztlQWVsQixZQUFHO0FBQ1QsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztXQUNsQjs7O2VBRWdCLFlBQUc7QUFDbEIsbUJBQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztXQUMzQjs7O2VBRXVCLFlBQUc7QUFDekIsbUJBQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1dBQ2xDOzs7ZUFFZSxZQUFHO0FBQ2pCLG1CQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7V0FDMUI7OztlQUVrQixZQUFHO0FBQ3BCLG1CQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7V0FDN0I7OztlQWpDVSxlQUFlOzs7aUNBQWYsZUFBZSIsImZpbGUiOiJtb2RlbHMvZGlmZmljdWx0eUxldmVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=