System.register(['aurelia-framework', 'aurelia-validation'], function (_export) {
  var inject, bindable, Validation, _classCallCheck, _createDecoratedClass, BuyDrug;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      BuyDrug = (function () {
        var _instanceInitializers = {};

        function BuyDrug(validation) {
          var _this = this;

          _classCallCheck(this, _BuyDrug);

          this.drug = _instanceInitializers.drug.call(this);
          this.buy_amount = _instanceInitializers.buy_amount.call(this);
          this.max_can_buy_amount = _instanceInitializers.max_can_buy_amount.call(this);
          this.drug_list_engine = _instanceInitializers.drug_list_engine.call(this);

          this.validation = validation.on(this).ensure('buy_amount').containsOnlyDigits().isNotEmpty().isBetween(1, function () {
            return _this.max_can_buy_amount;
          });
        }

        var _BuyDrug = BuyDrug;

        _createDecoratedClass(_BuyDrug, [{
          key: 'drug',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'buy_amount',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'max_can_buy_amount',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'drug_list_engine',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'buyDrugs',
          value: function buyDrugs() {
            var _this2 = this;

            this.validation.validate().then(function () {
              _this2.drug_list_engine.buyDrugs(_this2.drug);
            });
          }
        }, {
          key: 'cancel',
          value: function cancel() {
            this.drug_list_engine.loadDrugPanelInfo(this.drug);
          }
        }], null, _instanceInitializers);

        BuyDrug = inject(Validation)(BuyDrug) || BuyDrug;
        return BuyDrug;
      })();

      _export('BuyDrug', BuyDrug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRydWdWaWV3cy9idXlEcnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7NEVBSWEsT0FBTzs7OztpQ0FKWixNQUFNO21DQUFFLFFBQVE7O3NDQUNoQixVQUFVOzs7Ozs7Ozs7QUFHTCxhQUFPOzs7QUFNUCxpQkFOQSxPQUFPLENBTU4sVUFBVSxFQUFFOzs7OztlQUxkLElBQUkseUJBQUosSUFBSTtlQUNKLFVBQVUseUJBQVYsVUFBVTtlQUNWLGtCQUFrQix5QkFBbEIsa0JBQWtCO2VBQ2xCLGdCQUFnQix5QkFBaEIsZ0JBQWdCOztBQUd4QixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FDcEIsa0JBQWtCLEVBQUUsQ0FDcEIsVUFBVSxFQUFFLENBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxZQUFNO0FBQUUsbUJBQU8sTUFBSyxrQkFBa0IsQ0FBQTtXQUFDLENBQUMsQ0FBQztTQUMxRDs7dUJBWlUsT0FBTzs7Ozt1QkFDakIsUUFBUTs7bUJBQVEsSUFBSTs7Ozs7dUJBQ3BCLFFBQVE7O21CQUFjLElBQUk7Ozs7O3VCQUMxQixRQUFROzttQkFBc0IsSUFBSTs7Ozs7dUJBQ2xDLFFBQVE7O21CQUFvQixJQUFJOzs7OztpQkFVekIsb0JBQUc7OztBQUNULGdCQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDN0IsWUFBTTtBQUNKLHFCQUFLLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFLLElBQUksQ0FBQyxDQUFDO2FBQzNDLENBQ0YsQ0FBQztXQUNIOzs7aUJBRUssa0JBQUc7QUFDUCxnQkFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUNwRDs7O0FBeEJVLGVBQU8sR0FEbkIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTzs7O3lCQUFQLE9BQU8iLCJmaWxlIjoiZHJ1Z1ZpZXdzL2J1eURydWcuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==