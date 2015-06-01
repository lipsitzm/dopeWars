System.register([], function (_export) {
  'use strict';

  var drugPriceColorClasses, Drug;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
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

          this.Name = nameIn;
          this.MaxPrice = maxPriceIn;
          this.MinPrice = minPriceIn;
        }

        _createClass(Drug, [{
          key: 'SetThreshold',
          value: function SetThreshold(newPrice) {
            if (newPrice >= this.MaxPrice) {
              this.ThresholdLevel = 4;
            } else if (newPrice <= this.MinPrice) {
              this.ThresholdLevel = 0;
            } else {
              this.ThresholdLevel = Math.floor((this.Price - this.MinPrice) / (this.MaxPrice - this.MinPrice) * 100 / 20);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kcnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFJLHFCQUFxQixFQVFaLElBQUk7Ozs7Ozs7OztBQVJiLDJCQUFxQixHQUFHLENBQzFCLG9CQUFvQixFQUNwQiwyQkFBMkIsRUFDM0Isa0JBQWtCLEVBQ2xCLDRCQUE0QixFQUM1QiwwQkFBMEIsQ0FDM0I7O0FBRVksVUFBSTtBQVFKLGlCQVJBLElBQUksQ0FRSCxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBQztnQ0FSaEMsSUFBSTs7ZUFDZixRQUFRLEdBQUcsQ0FBQztlQUNaLFFBQVEsR0FBRyxDQUFDO2VBQ1osS0FBSyxHQUFHLENBQUM7ZUFDVCxTQUFTLEdBQUcsSUFBSTtlQUNoQixJQUFJLEdBQUcsRUFBRTtlQUNULGNBQWMsR0FBRyxDQUFDOztBQUdoQixjQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNuQixjQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUMzQixjQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztTQUM1Qjs7cUJBWlUsSUFBSTs7aUJBY0gsc0JBQUMsUUFBUSxFQUFFO0FBRXJCLGdCQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzVCLGtCQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzthQUN6QixNQUFNLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDcEMsa0JBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCLE1BQU07QUFFTCxrQkFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBLElBQUssSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBLEFBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDN0c7V0FDRjs7O2VBRXNCLFlBQUc7QUFDeEIsbUJBQU8scUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1dBQ25EOzs7ZUFFUSxZQUFHO0FBQ1YsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztXQUNuQjtlQUVRLFVBQUMsTUFBTSxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztBQUNwQixnQkFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUMzQjs7O2VBckNVLElBQUk7OztzQkFBSixJQUFJIiwiZmlsZSI6Im1vZGVscy9kcnVnLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=