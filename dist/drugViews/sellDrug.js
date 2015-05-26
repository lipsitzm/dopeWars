System.register(['aurelia-framework', 'aurelia-validation'], function (_export) {
  var inject, bindable, Validation, _classCallCheck, _createDecoratedClass, SellDrug;

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

      SellDrug = (function () {
        var _instanceInitializers = {};

        function SellDrug(validation) {
          var _this = this;

          _classCallCheck(this, _SellDrug);

          this.drug = _instanceInitializers.drug.call(this);
          this.sell_amount = _instanceInitializers.sell_amount.call(this);
          this.max_can_sell_amount = _instanceInitializers.max_can_sell_amount.call(this);
          this.drug_list_engine = _instanceInitializers.drug_list_engine.call(this);

          this.validation = validation.on(this).ensure('sell_amount').containsOnlyDigits().isNotEmpty().isBetween(1, function () {
            return _this.max_can_sell_amount;
          });
        }

        var _SellDrug = SellDrug;

        _createDecoratedClass(_SellDrug, [{
          key: 'drug',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'sell_amount',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'max_can_sell_amount',
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
          key: 'sellDrugs',
          value: function sellDrugs() {
            var _this2 = this;

            this.validation.validate().then(function () {
              _this2.drug_list_engine.sellDrugs(_this2.drug);
            });
          }
        }, {
          key: 'cancel',
          value: function cancel() {
            this.drug_list_engine.loadDrugPanelInfo(this.drug);
          }
        }], null, _instanceInitializers);

        SellDrug = inject(Validation)(SellDrug) || SellDrug;
        return SellDrug;
      })();

      _export('SellDrug', SellDrug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRydWdWaWV3cy9zZWxsRHJ1Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzRFQUlhLFFBQVE7Ozs7aUNBSmIsTUFBTTttQ0FBRSxRQUFROztzQ0FDaEIsVUFBVTs7Ozs7Ozs7O0FBR0wsY0FBUTs7O0FBTVIsaUJBTkEsUUFBUSxDQU1QLFVBQVUsRUFBRTs7Ozs7ZUFMZCxJQUFJLHlCQUFKLElBQUk7ZUFDSixXQUFXLHlCQUFYLFdBQVc7ZUFDWCxtQkFBbUIseUJBQW5CLG1CQUFtQjtlQUNuQixnQkFBZ0IseUJBQWhCLGdCQUFnQjs7QUFHeEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQ3JCLGtCQUFrQixFQUFFLENBQ3BCLFVBQVUsRUFBRSxDQUNaLFNBQVMsQ0FBQyxDQUFDLEVBQUUsWUFBTTtBQUFFLG1CQUFPLE1BQUssbUJBQW1CLENBQUE7V0FBQyxDQUFDLENBQUM7U0FDM0Q7O3dCQVpVLFFBQVE7Ozs7dUJBQ2xCLFFBQVE7O21CQUFRLElBQUk7Ozs7O3VCQUNwQixRQUFROzttQkFBZSxJQUFJOzs7Ozt1QkFDM0IsUUFBUTs7bUJBQXVCLElBQUk7Ozs7O3VCQUNuQyxRQUFROzttQkFBb0IsSUFBSTs7Ozs7aUJBVXhCLHFCQUFHOzs7QUFDVixnQkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzdCLFlBQU07QUFDSixxQkFBSyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsT0FBSyxJQUFJLENBQUMsQ0FBQzthQUM1QyxDQUNGLENBQUM7V0FDSDs7O2lCQUVLLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDcEQ7OztBQXhCVSxnQkFBUSxHQURwQixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJkcnVnVmlld3Mvc2VsbERydWcuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==