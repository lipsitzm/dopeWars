System.register([], function (_export) {
  "use strict";

  var BuySellChooser;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      BuySellChooser = (function () {
        function BuySellChooser() {
          _classCallCheck(this, BuySellChooser);
        }

        _createClass(BuySellChooser, [{
          key: "activate",
          value: function activate(model) {
            this.drug = model.Drug;
            this.drugCount = model.DrugCount;
            this.maxToBuy = model.MaxBuyAmount;
            this.drugList = model.DrugList;
          }
        }, {
          key: "goToSell",
          value: function goToSell() {
            this.drugList.ShowSellDrugDialog(this.drug, this.drugCount);
          }
        }, {
          key: "goToBuy",
          value: function goToBuy() {
            this.drugList.ShowBuyDrugDialog(this.drug, this.maxToBuy);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.drugList.showing = false;
          }
        }]);

        return BuySellChooser;
      })();

      _export("BuySellChooser", BuySellChooser);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRydWdWaWV3cy9idXlTZWxsQ2hvb3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxjQUFjOzs7Ozs7Ozs7QUFBZCxvQkFBYztpQkFBZCxjQUFjO2dDQUFkLGNBQWM7OztxQkFBZCxjQUFjOztpQkFDakIsa0JBQUMsS0FBSyxFQUFFO0FBQ2QsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN2QixnQkFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0FBQ2pDLGdCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztXQUNoQzs7O2lCQUVPLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7V0FDN0Q7OztpQkFFTSxtQkFBRztBQUNSLGdCQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQzNEOzs7aUJBRUssa0JBQUc7QUFDUCxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1dBQy9COzs7ZUFsQlUsY0FBYzs7O2dDQUFkLGNBQWMiLCJmaWxlIjoiZHJ1Z1ZpZXdzL2J1eVNlbGxDaG9vc2VyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=