System.register(['aurelia-framework', 'aurelia-validation', 'services/playerService'], function (_export) {
  var inject, Validation, PlayerService, _classCallCheck, _createClass, BuyDrug;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }, function (_servicesPlayerService) {
      PlayerService = _servicesPlayerService.PlayerService;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      BuyDrug = (function () {
        function BuyDrug(validation, playerService) {
          var _this = this;

          _classCallCheck(this, _BuyDrug);

          this.paymentAmount = 0;

          this.validation = validation.on(this).ensure('paymentAmount').containsOnlyDigits().isNotEmpty().isBetween(1, function () {
            return _this.Player.LoanOutstanding;
          });

          this.PlayerService = playerService;
          this.Player = null;
          this.PlayerService.GetPlayer().then(function (player) {
            _this.Player = player;
          });
        }

        var _BuyDrug = BuyDrug;

        _createClass(_BuyDrug, [{
          key: 'paymentAmount',
          value: undefined,
          enumerable: true
        }, {
          key: 'payDebt',
          value: function payDebt() {
            var _this2 = this;

            this.validation.validate().then(function () {
              _this2.Player.PayOffLoan(_this2.paymentAmount);
            });
          }
        }]);

        BuyDrug = inject(Validation, PlayerService)(BuyDrug) || BuyDrug;
        return BuyDrug;
      })();

      _export('BuyDrug', BuyDrug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsQm9kaWVzL3BheURlYnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt3RUFLYSxPQUFPOzs7O2lDQUxaLE1BQU07O3NDQUNOLFVBQVU7OzZDQUNWLGFBQWE7Ozs7Ozs7OztBQUdSLGFBQU87QUFJUCxpQkFKQSxPQUFPLENBSU4sVUFBVSxFQUFFLGFBQWEsRUFBRTs7Ozs7ZUFIdkMsYUFBYSxHQUFHLENBQUM7O0FBSWYsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQ3ZCLGtCQUFrQixFQUFFLENBQ3BCLFVBQVUsRUFBRSxDQUNaLFNBQVMsQ0FBQyxDQUFDLEVBQUUsWUFBTTtBQUFFLG1CQUFPLE1BQUssTUFBTSxDQUFDLGVBQWUsQ0FBQTtXQUFFLENBQUMsQ0FBQzs7QUFFOUQsY0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsY0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDbkIsY0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDNUMsa0JBQUssTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0QixDQUFDLENBQUM7U0FDSjs7dUJBaEJVLE9BQU87Ozs7Ozs7O2lCQWtCWCxtQkFBRzs7O0FBQ1IsZ0JBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUM3QixZQUFNO0FBQ0oscUJBQUssTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFLLGFBQWEsQ0FBQyxDQUFDO2FBQzVDLENBQ0YsQ0FBQztXQUNIOzs7QUF4QlUsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUNyQixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6Im1vZGFsQm9kaWVzL3BheURlYnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==