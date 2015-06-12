System.register(['aurelia-framework', 'aurelia-validation', 'aurelia-event-aggregator', '../services/playerService'], function (_export) {
  'use strict';

  var inject, bindable, Validation, EventAggregator, PlayerService, SellDrug;

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
      SellDrug = (function () {
        function SellDrug(validation, eventAggregator, playerService) {
          var _this = this;

          _classCallCheck(this, _SellDrug);

          this.drug = null;
          this.sellAmount = null;
          this.maxSellAmount = null;
          this.drugList = null;

          this.validation = validation.on(this).ensure('sellAmount').containsOnlyDigits().isNotEmpty().isBetween(1, function () {
            return _this.maxSellAmount;
          });

          this.eventAggregator = eventAggregator;

          this.PlayerService = playerService;
          this.Player = null;
          this.PlayerService.GetPlayer().then(function (player) {
            _this.Player = player;
          });
        }

        var _SellDrug = SellDrug;

        _createClass(_SellDrug, [{
          key: 'activate',
          value: function activate(model) {
            this.drug = model.Drug;
            this.sellAmount = this.maxSellAmount = model.MaxSellAmount;
            this.drugList = model.DrugList;
          }
        }, {
          key: 'sellDrugs',
          value: function sellDrugs() {
            var _this2 = this;

            this.validation.validate().then(function () {
              _this2.Player.SellDrug(_this2.drug, _this2.sellAmount);
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

        SellDrug = inject(Validation, EventAggregator, PlayerService)(SellDrug) || SellDrug;
        return SellDrug;
      })();

      _export('SellDrug', SellDrug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRydWdWaWV3cy9zZWxsRHJ1Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0VBTWEsUUFBUTs7Ozs7Ozs7aUNBTmIsTUFBTTttQ0FBRSxRQUFROztzQ0FDaEIsVUFBVTs7Z0RBQ1YsZUFBZTs7NkNBQ2YsYUFBYTs7O0FBR1IsY0FBUTtBQU1SLGlCQU5BLFFBQVEsQ0FNUCxVQUFVLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRTs7Ozs7ZUFMeEQsSUFBSSxHQUFHLElBQUk7ZUFDWCxVQUFVLEdBQUcsSUFBSTtlQUNqQixhQUFhLEdBQUcsSUFBSTtlQUNwQixRQUFRLEdBQUcsSUFBSTs7QUFHYixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FDcEIsa0JBQWtCLEVBQUUsQ0FDcEIsVUFBVSxFQUFFLENBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxZQUFNO0FBQUUsbUJBQU8sTUFBSyxhQUFhLENBQUE7V0FBQyxDQUFDLENBQUM7O0FBRXBELGNBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDOztBQUV2QyxjQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyxjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixjQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM1QyxrQkFBSyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCLENBQUMsQ0FBQztTQUNKOzt3QkFwQlUsUUFBUTs7OztpQkFzQlgsa0JBQUMsS0FBSyxFQUFFO0FBQ2QsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN2QixnQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7QUFDM0QsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztXQUNoQzs7O2lCQUVRLHFCQUFHOzs7QUFDVixnQkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzdCLFlBQU07QUFDSixxQkFBSyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQUssSUFBSSxFQUFFLE9BQUssVUFBVSxDQUFDLENBQUM7QUFDakQscUJBQUssZUFBZSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxPQUFLLElBQUksQ0FBQyxDQUFDO0FBQ2pFLHFCQUFLLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQy9CLENBQ0YsQ0FBQztXQUNIOzs7aUJBRUssa0JBQUc7QUFDUCxnQkFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1dBQy9COzs7QUF4Q1UsZ0JBQVEsR0FEcEIsTUFBTSxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQ3RDLFFBQVEsS0FBUixRQUFRO2VBQVIsUUFBUTs7OzBCQUFSLFFBQVEiLCJmaWxlIjoiZHJ1Z1ZpZXdzL3NlbGxEcnVnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=