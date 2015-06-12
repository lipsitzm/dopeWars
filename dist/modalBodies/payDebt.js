System.register(['aurelia-framework', 'aurelia-validation', '../services/playerService'], function (_export) {
  'use strict';

  var inject, bindable, Validation, PlayerService, PayDebt;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }, function (_servicesPlayerService) {
      PlayerService = _servicesPlayerService.PlayerService;
    }],
    execute: function () {
      PayDebt = (function () {
        function PayDebt(validation, playerService) {
          var _this = this;

          _classCallCheck(this, _PayDebt);

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

        var _PayDebt = PayDebt;

        _createClass(_PayDebt, [{
          key: 'preparePaymentAmount',
          value: function preparePaymentAmount() {
            this.paymentAmount = this.Player.Money > this.Player.LoanOutstanding ? this.Player.LoanOutstanding : this.Player.Money;
          }
        }, {
          key: 'activate',
          value: function activate(model) {
            this.playerViewModel = model;
            this.preparePaymentAmount();
          }
        }, {
          key: 'payDebt',
          value: function payDebt() {
            var _this2 = this;

            this.validation.validate().then(function () {
              _this2.Player.PayOffLoan(_this2.paymentAmount);
              _this2.playerViewModel.showing = false;
              _this2.preparePaymentAmount();
            });
          }
        }, {
          key: 'cancel',
          value: function cancel() {
            this.playerViewModel.showing = false;
          }
        }]);

        PayDebt = inject(Validation, PlayerService)(PayDebt) || PayDebt;
        return PayDebt;
      })();

      _export('PayDebt', PayDebt);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsQm9kaWVzL3BheURlYnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O21EQUthLE9BQU87Ozs7Ozs7O2lDQUxaLE1BQU07bUNBQUMsUUFBUTs7c0NBQ2YsVUFBVTs7NkNBQ1YsYUFBYTs7O0FBR1IsYUFBTztBQUlQLGlCQUpBLE9BQU8sQ0FJTixVQUFVLEVBQUUsYUFBYSxFQUFFOzs7OztlQUh2QyxhQUFhLEdBQUcsQ0FBQzs7QUFJZixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FDdkIsa0JBQWtCLEVBQUUsQ0FDcEIsVUFBVSxFQUFFLENBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxZQUFNO0FBQUUsbUJBQU8sTUFBSyxNQUFNLENBQUMsZUFBZSxDQUFBO1dBQUUsQ0FBQyxDQUFDOztBQUU5RCxjQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyxjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixjQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUM1QyxrQkFBSyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCLENBQUMsQ0FBQztTQUNKOzt1QkFoQlUsT0FBTzs7OztpQkFrQkUsZ0NBQUc7QUFDckIsZ0JBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7V0FDeEg7OztpQkFFTyxrQkFBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDN0IsZ0JBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1dBQzdCOzs7aUJBRU0sbUJBQUc7OztBQUNSLGdCQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDN0IsWUFBTTtBQUNKLHFCQUFLLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBSyxhQUFhLENBQUMsQ0FBQztBQUMzQyxxQkFBSyxlQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNyQyxxQkFBSyxvQkFBb0IsRUFBRSxDQUFDO2FBRTdCLENBQ0YsQ0FBQztXQUNIOzs7aUJBRUssa0JBQUc7QUFDUCxnQkFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1dBQ3RDOzs7QUF4Q1UsZUFBTyxHQURuQixNQUFNLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUNyQixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6Im1vZGFsQm9kaWVzL3BheURlYnQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==