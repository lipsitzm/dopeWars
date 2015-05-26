System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, BuySellChooser;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      BuySellChooser = (function () {
        var _instanceInitializers = {};

        function BuySellChooser() {
          _classCallCheck(this, BuySellChooser);

          this.drug = _instanceInitializers.drug.call(this);
          this.drug_count = _instanceInitializers.drug_count.call(this);
          this.drug_list_engine = _instanceInitializers.drug_list_engine.call(this);
        }

        _createDecoratedClass(BuySellChooser, [{
          key: 'drug',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'drug_count',
          decorators: [bindable],
          initializer: function () {
            return 0;
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
          key: 'goToSell',
          value: function goToSell() {
            this.drug_list_engine.showSellDialog(this.drug);
          }
        }, {
          key: 'goToBuy',
          value: function goToBuy() {
            this.drug_list_engine.showBuyDialog(this.drug);
          }
        }], null, _instanceInitializers);

        return BuySellChooser;
      })();

      _export('BuySellChooser', BuySellChooser);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRydWdWaWV3cy9idXlTZWxsQ2hvb3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dEQUVhLGNBQWM7Ozs7bUNBRm5CLFFBQVE7Ozs7Ozs7OztBQUVILG9CQUFjOzs7aUJBQWQsY0FBYztnQ0FBZCxjQUFjOztlQUNmLElBQUkseUJBQUosSUFBSTtlQUNKLFVBQVUseUJBQVYsVUFBVTtlQUNWLGdCQUFnQix5QkFBaEIsZ0JBQWdCOzs7OEJBSGYsY0FBYzs7dUJBQ3hCLFFBQVE7O21CQUFRLElBQUk7Ozs7O3VCQUNwQixRQUFROzttQkFBYyxDQUFDOzs7Ozt1QkFDdkIsUUFBUTs7bUJBQW9CLElBQUk7Ozs7O2lCQUV6QixvQkFBRztBQUNULGdCQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztXQUNqRDs7O2lCQUVNLG1CQUFHO0FBQ1IsZ0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1dBQ2hEOzs7ZUFYVSxjQUFjOzs7Z0NBQWQsY0FBYyIsImZpbGUiOiJkcnVnVmlld3MvYnV5U2VsbENob29zZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==