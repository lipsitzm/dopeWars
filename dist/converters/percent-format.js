System.register(['numeral'], function (_export) {
  'use strict';

  var numeral, PercentFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      PercentFormatValueConverter = (function () {
        function PercentFormatValueConverter() {
          _classCallCheck(this, PercentFormatValueConverter);
        }

        _createClass(PercentFormatValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return numeral(value).format('(0,0.00%)');
          }
        }]);

        return PercentFormatValueConverter;
      })();

      _export('PercentFormatValueConverter', PercentFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnRlcnMvcGVyY2VudC1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2VBRWEsMkJBQTJCOzs7Ozs7Ozs7OztBQUEzQixpQ0FBMkI7aUJBQTNCLDJCQUEyQjtnQ0FBM0IsMkJBQTJCOzs7cUJBQTNCLDJCQUEyQjs7aUJBQ2hDLGdCQUFDLEtBQUssRUFBRTtBQUNaLG1CQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7V0FDM0M7OztlQUhVLDJCQUEyQjs7OzZDQUEzQiwyQkFBMkIiLCJmaWxlIjoiY29udmVydGVycy9wZXJjZW50LWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9