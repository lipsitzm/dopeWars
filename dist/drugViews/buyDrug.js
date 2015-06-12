System.register(['aurelia-framework', 'aurelia-validation', 'aurelia-event-aggregator', '../services/playerService'], function (_export) {
  'use strict';

  var inject, bindable, Validation, EventAggregator, PlayerService, BuyDrug;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_servicesPlayerService) {
      PlayerService = _servicesPlayerService.PlayerService;
    }],
    execute: function () {
      BuyDrug = (function () {
        function BuyDrug(validation, eventAggregator, playerService) {
          var _this = this;

          _classCallCheck(this, _BuyDrug);

          this.drug = null;
          this.buyAmount = null;
          this.maxBuyAmount = null;
          this.drugList = null;

          this.validation = validation.on(this).ensure('buyAmount').containsOnlyDigits().isNotEmpty().isBetween(1, function () {
            return _this.maxBuyAmount;
          });

          this.eventAggregator = eventAggregator;

          this.PlayerService = playerService;
          this.Player = null;
          this.PlayerService.GetPlayer().then(function (player) {
            _this.Player = player;
          });
        }

        var _BuyDrug = BuyDrug;

        _createClass(_BuyDrug, [{
          key: 'activate',
          value: function activate(model) {
            this.drug = model.Drug;
            this.buyAmount = this.maxBuyAmount = model.MaxBuyAmount;
            this.drugList = model.DrugList;
          }
        }, {
          key: 'buyDrugs',
          value: function buyDrugs() {
            var _this2 = this;

            this.validation.validate().then(function () {
              _this2.Player.BuyDrug(_this2.drug, _this2.buyAmount);
              _this2.eventAggregator.publish('drugInBackpackChanged', _this2.drug);
              _this2.drugList.showing = false;
            });
          }
        }, {
          key: 'cancel',
          value: function cancel() {
            this.drugList.showing = false;
          }
        }]);

        BuyDrug = inject(Validation, EventAggregator, PlayerService)(BuyDrug) || BuyDrug;
        return BuyDrug;
      })();

      _export('BuyDrug', BuyDrug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRydWdWaWV3cy9idXlEcnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvRUFNYSxPQUFPOzs7Ozs7OztpQ0FOWixNQUFNO21DQUFFLFFBQVE7O3NDQUNoQixVQUFVOztnREFDVixlQUFlOzs2Q0FDZixhQUFhOzs7QUFHUixhQUFPO0FBTVAsaUJBTkEsT0FBTyxDQU1OLFVBQVUsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFOzs7OztlQUx4RCxJQUFJLEdBQUcsSUFBSTtlQUNYLFNBQVMsR0FBRyxJQUFJO2VBQ2hCLFlBQVksR0FBRyxJQUFJO2VBQ25CLFFBQVEsR0FBRyxJQUFJOztBQUdiLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUNuQixrQkFBa0IsRUFBRSxDQUNwQixVQUFVLEVBQUUsQ0FDWixTQUFTLENBQUMsQ0FBQyxFQUFFLFlBQU07QUFBRSxtQkFBTyxNQUFLLFlBQVksQ0FBQTtXQUFDLENBQUMsQ0FBQzs7QUFFbkQsY0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7O0FBRXZDLGNBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ25CLGNBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzVDLGtCQUFLLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEIsQ0FBQyxDQUFDO1NBQ0o7O3VCQXBCVSxPQUFPOzs7O2lCQXNCVixrQkFBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLGdCQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztBQUN4RCxnQkFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1dBQ2hDOzs7aUJBRU8sb0JBQUc7OztBQUNULGdCQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDN0IsWUFBTTtBQUNKLHFCQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBSyxJQUFJLEVBQUUsT0FBSyxTQUFTLENBQUMsQ0FBQztBQUMvQyxxQkFBSyxlQUFlLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLE9BQUssSUFBSSxDQUFDLENBQUM7QUFDakUscUJBQUssUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7YUFDL0IsQ0FDRixDQUFDO1dBQ0g7OztpQkFFSyxrQkFBRztBQUNQLGdCQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7V0FDL0I7OztBQXhDVSxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxVQUFVLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUN0QyxPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6ImRydWdWaWV3cy9idXlEcnVnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=