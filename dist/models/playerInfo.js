System.register(['models/difficultyLevel', 'models/purchasedDrug'], function (_export) {
  'use strict';

  var DifficultyLevel, PurchasedDrug, PlayerInfo;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_modelsDifficultyLevel) {
      DifficultyLevel = _modelsDifficultyLevel.DifficultyLevel;
    }, function (_modelsPurchasedDrug) {
      PurchasedDrug = _modelsPurchasedDrug.PurchasedDrug;
    }],
    execute: function () {
      PlayerInfo = (function () {
        function PlayerInfo() {
          _classCallCheck(this, PlayerInfo);
        }

        _createClass(PlayerInfo, [{
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
          key: 'GetBackpackDrugCount',
          value: function GetBackpackDrugCount(drug) {
            if (this.Drugs.has(drug.Name)) {
              var purchasedDrug = this.Drugs.get(drug.Name);
              return purchasedDrug.BackpackCount;
            } else {
              return 0;
            }
          }
        }, {
          key: 'GetPurchasedDrug',
          value: function GetPurchasedDrug(drug) {
            if (this.Drugs.has(drug.Name)) {
              return this.Drugs.get(drug.Name);
            } else {
              return new PurchasedDrug(0, 0);
            }
          }
        }, {
          key: 'BuyDrug',
          value: function BuyDrug(drug, count, price) {
            if (this.BackpackSpace - count < 0) {
              return 'You can\'t fit that much ' + drug.Name + ' in your backpack! The cops would see it if it\'s hanging out like that.';
            }

            if (price === undefined) {
              price = drug.Price;
            }

            var drugCost = price * count;
            if (this.Money < drugCost) {
              return 'You don\'t have enough cash for that much ' + drug.Name + '. If you rip off your supplier, you\'ll never be able to buy from them again.';
            }

            var purchasedDrug = undefined;
            if (this.Drugs.has(drug.Name)) {
              purchasedDrug = this.Drugs.get(drug.Name);
              purchasedDrug.Update(count, drug.Price);
            } else {
              purchasedDrug = new PurchasedDrug(count, drug.Price);
            }
            this.Drugs.set(drug.Name, purchasedDrug);

            this.BackpackSpace -= count;
            this.Money -= drugCost;
            return null;
          }
        }, {
          key: 'SellDrug',
          value: function SellDrug(drug, count, price) {
            count = parseInt(count);
            var purchasedDrug = undefined;
            if (!this.Drugs.has(drug.Name)) {
              return 'You don\'t have any ' + drug.Name + ' to sell... Try finding a college kid to mug first.';
            } else {
              purchasedDrug = this.Drugs.get(drug.Name);
              if (purchasedDrug.BackpackCount - count < 0) {
                return 'You don\'t have that much ' + drug.Name + ' to sell. You tryin\' to your supplier off?';
              } else if (purchasedDrug.BackpackCount - count === 0) {
                this.Drugs['delete'](drug.Name);
              } else {
                purchasedDrug.Update(count * -1, 0);
                this.Drugs.set(drug.Name, purchasedDrug);
              }
            }
            this.BackpackSpace += count;

            if (price === undefined) {
              price = drug.Price;
            }

            this.Money += count * price;

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
        }]);

        return PlayerInfo;
      })();

      _export('PlayerInfo', PlayerInfo);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQztBQUNwQyxvQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztlQUMxQzthQUNGO0FBQ0QsZ0JBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDOztBQUU1QixnQkFBRyxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQ3RCLG1CQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNwQjs7QUFFRCxnQkFBSSxDQUFDLEtBQUssSUFBSyxLQUFLLEdBQUcsS0FBSyxBQUFDLENBQUM7O0FBRTlCLG1CQUFPLElBQUksQ0FBQztXQUNiOzs7aUJBRWlCLDhCQUFHO0FBQ25CLGdCQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQSxBQUFDLENBQUMsQ0FBQztXQUNuRjs7O2lCQUVTLG9CQUFDLGFBQWEsRUFBRTtBQUN4QixnQkFBRyxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsRUFBRTtBQUM3QixxQkFBTyxxR0FBcUcsQ0FBQzthQUM5Rzs7QUFFRCxnQkFBSSxDQUFDLEtBQUssSUFBSSxhQUFhLENBQUM7QUFDNUIsZ0JBQUksQ0FBQyxlQUFlLElBQUksYUFBYSxDQUFDO1dBQ3ZDOzs7ZUEzR1UsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoibW9kZWxzL3BsYXllckluZm8uanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==