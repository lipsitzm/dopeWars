System.register([], function (_export) {
  var _classCallCheck, _createClass, drugPriceColorClasses, Drug;

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      drugPriceColorClasses = ['cheapest-drug-cost', 'middle-cheapest-drug-cost', 'middle-drug-cost', 'middle-expensive-drug-cost', 'most-expensive-drug-cost'];

      Drug = (function () {
        function Drug(nameIn, minPriceIn, maxPriceIn) {
          _classCallCheck(this, Drug);

          this.MaxPrice = 1;
          this.MinPrice = 1;
          this.price = 1;
          this.Available = true;
          this.Name = '';
          this.ThresholdLevel = 2;
          this.BackpackCount = 0;
          this.HighestBuyPrice = 0;

          this.Name = nameIn;
          this.MaxPrice = maxPriceIn;
          this.MinPrice = minPriceIn;
        }

        _createClass(Drug, [{
          key: 'MaxPrice',
          value: undefined,
          enumerable: true
        }, {
          key: 'MinPrice',
          value: undefined,
          enumerable: true
        }, {
          key: 'price',
          value: undefined,
          enumerable: true
        }, {
          key: 'Available',
          value: undefined,
          enumerable: true
        }, {
          key: 'Name',
          value: undefined,
          enumerable: true
        }, {
          key: 'ThresholdLevel',
          value: undefined,
          enumerable: true
        }, {
          key: 'BackpackCount',
          value: undefined,
          enumerable: true
        }, {
          key: 'HighestBuyPrice',
          value: undefined,
          enumerable: true
        }, {
          key: 'SetThreshold',
          value: function SetThreshold(newPrice) {
            this.ThresholdLevel = Math.floor((this.Price - this.MinPrice) / (this.MaxPrice - this.MinPrice) * 100 / 20);
          }
        }, {
          key: 'ThresholdColorClass',
          get: function () {
            return drugPriceColorClasses[this.ThresholdLevel];
          }
        }, {
          key: 'Price',
          get: function () {
            return this.price;
          },
          set: function (newVal) {
            this.price = newVal;
            this.SetThreshold(newVal);
          }
        }]);

        return Drug;
      })();

      _export('Drug', Drug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kcnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7cUNBQUkscUJBQXFCLEVBUVosSUFBSTs7Ozs7Ozs7Ozs7QUFSYiwyQkFBcUIsR0FBRyxDQUMxQixvQkFBb0IsRUFDcEIsMkJBQTJCLEVBQzNCLGtCQUFrQixFQUNsQiw0QkFBNEIsRUFDNUIsMEJBQTBCLENBQzNCOztBQUVZLFVBQUk7QUFVSixpQkFWQSxJQUFJLENBVUgsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUM7Z0NBVmhDLElBQUk7O2VBQ2YsUUFBUSxHQUFHLENBQUM7ZUFDWixRQUFRLEdBQUcsQ0FBQztlQUNaLEtBQUssR0FBRyxDQUFDO2VBQ1QsU0FBUyxHQUFHLElBQUk7ZUFDaEIsSUFBSSxHQUFHLEVBQUU7ZUFDVCxjQUFjLEdBQUcsQ0FBQztlQUNsQixhQUFhLEdBQUcsQ0FBQztlQUNqQixlQUFlLEdBQUcsQ0FBQzs7QUFHakIsY0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDbkIsY0FBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDM0IsY0FBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDNUI7O3FCQWRVLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBZ0JILHNCQUFDLFFBQVEsRUFBRTtBQUNyQixnQkFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBLElBQUssSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBLEFBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7V0FDN0c7OztlQUVzQixZQUFHO0FBQ3hCLG1CQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztXQUNuRDs7O2VBRVEsWUFBRztBQUNWLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7V0FDbkI7ZUFFUSxVQUFDLE1BQU0sRUFBRTtBQUNoQixnQkFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDcEIsZ0JBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDM0I7OztlQS9CVSxJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJtb2RlbHMvZHJ1Zy5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9