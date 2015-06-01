System.register(['numeral'], function (_export) {
  'use strict';

  var numeral, CurrencyFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnRlcnMvY3VycmVuY3ktZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztlQUdhLDRCQUE0Qjs7Ozs7Ozs7Ozs7QUFBNUIsa0NBQTRCO2lCQUE1Qiw0QkFBNEI7Z0NBQTVCLDRCQUE0Qjs7O3FCQUE1Qiw0QkFBNEI7O2lCQUNqQyxnQkFBQyxLQUFLLEVBQUU7QUFDWixtQkFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ3hDOzs7ZUFIVSw0QkFBNEI7Ozs4Q0FBNUIsNEJBQTRCIiwiZmlsZSI6ImNvbnZlcnRlcnMvY3VycmVuY3ktZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=