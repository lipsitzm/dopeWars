System.register(['models/difficultyLevel'], function (_export) {
  var DifficultyLevel, _classCallCheck, _createClass, PlayerInfo;

  return {
    setters: [function (_modelsDifficultyLevel) {
      DifficultyLevel = _modelsDifficultyLevel.DifficultyLevel;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      PlayerInfo = (function () {
        function PlayerInfo() {
          _classCallCheck(this, PlayerInfo);
        }

        _createClass(PlayerInfo, [{
          key: 'startingMoney',
          value: undefined,
          enumerable: true
        }, {
          key: 'ResetPlayer',
          value: function ResetPlayer(DifficultyLevel) {
            this.BackpackSpace = DifficultyLevel.StartingBackpackSize;
            this.BackpackSize = DifficultyLevel.StartingBackpackSize;
            this.Money = this.startingMoney = DifficultyLevel.StartingMoney;
            this.Drugs = new Map();
            this.LoanOutstanding = DifficultyLevel.LoanOutstanding;
            this.InterestRate = DifficultyLevel.InterestRate;
          }
        }, {
          key: 'GetMaxPossibleToBuy',
          value: function GetMaxPossibleToBuy(pricePerDrug) {
            var max = Math.floor(this.Money / pricePerDrug);
            return max > this.BackpackSpace ? this.BackpackSpace : max;
          }
        }, {
          key: 'Profit',
          get: function () {
            return this.Money - this.LoanOutstanding;
          }
        }, {
          key: 'BuyDrug',
          value: function BuyDrug(drug, count) {
            count = parseInt(count);

            if (this.BackpackSpace - count < 0) {
              return 'You can\'t fit that much ' + drug.Name + ' in your backpack! The cops would see it if it\'s hanging out like that.';
            }

            var drugCost = drug.Price * count;
            if (this.Money < drugCost) {
              return 'You don\'t have enough cash for that much ' + drug.Name + '. If you rip off your supplier, you\'ll never be able to buy from them again.';
            }

            drug.BackpackCount += count;
            drug.HighestBuyPrice = drug.HighestBuyPrice > drug.Price ? drug.HighestBuyPrice : drug.Price;

            this.BackpackSpace -= count;
            this.Money -= drugCost;
            return null;
          }
        }, {
          key: 'IncreaseLoanAmount',
          value: function IncreaseLoanAmount() {
            this.LoanOutstanding = Math.floor(this.LoanOutstanding * (1 + this.InterestRate));
          }
        }, {
          key: 'PayOffLoan',
          value: function PayOffLoan(payDownAmount) {
            if (this.Money < payDownAmount) {
              return 'You don\'t have that much money, watch out for your knees if you\'re trying to rip off your bookie!';
            }

            this.Money -= payDownAmount;
            this.LoanOutstanding -= payDownAmount;
          }
        }, {
          key: 'SellDrug',
          value: function SellDrug(drug, count) {
            count = parseInt(count);

            if (drug.BackpackCount <= 0) {
              return 'You don\'t have any ' + drug.Name + ' to sell... Try finding a college kid to mug first.';
            } else if (drug.BackpackCount - count < 0) {
              return 'You don\'t have that much ' + drug.Name + ' to sell. You tryin\' to your supplier off?';
            }

            drug.BackpackCount -= count;
            this.BackpackSpace += count;
            this.Money += count * drug.Price;
            return null;
          }
        }]);

        return PlayerInfo;
      })();

      _export('PlayerInfo', PlayerInfo);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wbGF5ZXJJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7c0RBRWEsVUFBVTs7OzsrQ0FGZixlQUFlOzs7Ozs7Ozs7QUFFVixnQkFBVTtBQUdWLGlCQUhBLFVBQVUsR0FHUjtnQ0FIRixVQUFVO1NBSXBCOztxQkFKVSxVQUFVOzs7Ozs7aUJBTVYscUJBQUMsZUFBZSxFQUFFO0FBQzNCLGdCQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztBQUMxRCxnQkFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUM7QUFDekQsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO0FBQ2hFLGdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDdkIsZ0JBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDLGVBQWUsQ0FBQztBQUN2RCxnQkFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDO1dBQ2xEOzs7aUJBRWtCLDZCQUFDLFlBQVksRUFBRTtBQUNoQyxnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDO0FBQ2hELG1CQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1dBQzVEOzs7ZUFFUyxZQUFHO0FBQ1gsbUJBQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1dBRTFDOzs7aUJBRU0saUJBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNuQixpQkFBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFeEIsZ0JBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO0FBQ2xDLHFCQUFPLDJCQUEyQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsMEVBQTBFLENBQUM7YUFDN0g7O0FBRUQsZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ2xDLGdCQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxFQUFFO0FBQ3hCLHFCQUFPLDRDQUE0QyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsK0VBQStFLENBQUM7YUFFbko7O0FBRUQsZ0JBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO0FBQzVCLGdCQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7O0FBRTdGLGdCQUFJLENBQUMsYUFBYSxJQUFJLEtBQUssQ0FBQztBQUM1QixnQkFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUM7QUFDdkIsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7OztpQkFFaUIsOEJBQUc7QUFDbkIsZ0JBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFBLEFBQUMsQ0FBQyxDQUFDO1dBQ25GOzs7aUJBRVMsb0JBQUMsYUFBYSxFQUFFO0FBQ3hCLGdCQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxFQUFFO0FBQzdCLHFCQUFPLHFHQUFxRyxDQUFDO2FBQzlHOztBQUVELGdCQUFJLENBQUMsS0FBSyxJQUFJLGFBQWEsQ0FBQztBQUM1QixnQkFBSSxDQUFDLGVBQWUsSUFBSSxhQUFhLENBQUM7V0FDdkM7OztpQkFFTyxrQkFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3BCLGlCQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUV4QixnQkFBRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtBQUMxQixxQkFBTyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLHFEQUFxRCxDQUFDO2FBQ25HLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7QUFDekMscUJBQU8sNEJBQTRCLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyw2Q0FBNkMsQ0FBQzthQUVqRzs7QUFFRCxnQkFBSSxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7QUFDNUIsZ0JBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDO0FBQzVCLGdCQUFJLENBQUMsS0FBSyxJQUFLLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxBQUFDLENBQUM7QUFDbkMsbUJBQU8sSUFBSSxDQUFDO1dBQ2I7OztlQXpFVSxVQUFVOzs7NEJBQVYsVUFBVSIsImZpbGUiOiJtb2RlbHMvcGxheWVySW5mby5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9