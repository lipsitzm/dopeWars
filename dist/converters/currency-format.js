System.register(['numeral'], function (_export) {
  var numeral, _classCallCheck, _createClass, CurrencyFormatValueConverter;

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      CurrencyFormatValueConverter = (function () {
        function CurrencyFormatValueConverter() {
          _classCallCheck(this, CurrencyFormatValueConverter);
        }

        _createClass(CurrencyFormatValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return numeral(value).format('($0,0)');
          }
        }]);

        return CurrencyFormatValueConverter;
      })();

      _export('CurrencyFormatValueConverter', CurrencyFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnRlcnMvY3VycmVuY3ktZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OENBR2EsNEJBQTRCOzs7Ozs7Ozs7Ozs7O0FBQTVCLGtDQUE0QjtpQkFBNUIsNEJBQTRCO2dDQUE1Qiw0QkFBNEI7OztxQkFBNUIsNEJBQTRCOztpQkFDakMsZ0JBQUMsS0FBSyxFQUFFO0FBQ1osbUJBQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUN4Qzs7O2VBSFUsNEJBQTRCOzs7OENBQTVCLDRCQUE0QiIsImZpbGUiOiJjb252ZXJ0ZXJzL2N1cnJlbmN5LWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9