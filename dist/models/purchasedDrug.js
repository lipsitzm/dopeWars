System.register(['numeral'], function (_export) {
  'use strict';

  var numeral, PurchasedDrug;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      PurchasedDrug = (function () {
        function PurchasedDrug(count, price) {
          _classCallCheck(this, PurchasedDrug);

          this.backpackCount = 0;
          this.HighestBuyPrice = 0;

          this.backpackCount = numeral(count);
          this.HighestBuyPrice = price;
        }

        _createClass(PurchasedDrug, [{
          key: 'Update',
          value: function Update(count, price) {
            this.backpackCount = this.backpackCount.add(count);
            this.HighestBuyPrice = price > this.HighestBuyPrice ? price : this.HighestBuyPrice;
          }
        }, {
          key: 'BackpackCount',
          get: function () {
            return this.backpackCount.format();
          }
        }]);

        return PurchasedDrug;
      })();

      _export('PurchasedDrug', PurchasedDrug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9wdXJjaGFzZWREcnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztlQUVhLGFBQWE7Ozs7Ozs7Ozs7O0FBQWIsbUJBQWE7QUFJYixpQkFKQSxhQUFhLENBSVosS0FBSyxFQUFFLEtBQUssRUFBRTtnQ0FKZixhQUFhOztlQUN4QixhQUFhLEdBQUcsQ0FBQztlQUNqQixlQUFlLEdBQUcsQ0FBQzs7QUFHakIsY0FBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEMsY0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7U0FDOUI7O3FCQVBVLGFBQWE7O2lCQVNsQixnQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ25CLGdCQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELGdCQUFJLENBQUMsZUFBZSxHQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxBQUFDLENBQUM7V0FDdEY7OztlQUVnQixZQUFHO0FBQ2xCLG1CQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7V0FDcEM7OztlQWhCVSxhQUFhOzs7K0JBQWIsYUFBYSIsImZpbGUiOiJtb2RlbHMvcHVyY2hhc2VkRHJ1Zy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9