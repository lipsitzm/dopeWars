System.register(['numeral'], function (_export) {
  var numeral, _classCallCheck, _createClass, PercentFormatValueConverter;

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnRlcnMvcGVyY2VudC1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs4Q0FFYSwyQkFBMkI7Ozs7Ozs7Ozs7Ozs7QUFBM0IsaUNBQTJCO2lCQUEzQiwyQkFBMkI7Z0NBQTNCLDJCQUEyQjs7O3FCQUEzQiwyQkFBMkI7O2lCQUNoQyxnQkFBQyxLQUFLLEVBQUU7QUFDWixtQkFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1dBQzNDOzs7ZUFIVSwyQkFBMkI7Ozs2Q0FBM0IsMkJBQTJCIiwiZmlsZSI6ImNvbnZlcnRlcnMvcGVyY2VudC1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==