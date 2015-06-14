System.register([], function (_export) {
  'use strict';

  var drugPriceColorClasses, drugPriceChangeDirectionClasses, drugThresholdChangeClasses, setThreshold, Drug;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      drugPriceColorClasses = ['cheapest-drug-cost', 'middle-cheapest-drug-cost', 'middle-drug-cost', 'middle-expensive-drug-cost', 'most-expensive-drug-cost'];
      drugPriceChangeDirectionClasses = {
        'down': 'fa fa-arrow-down',
        'up': 'fa fa-arrow-up',
        'even': ''
      };
      drugThresholdChangeClasses = ['noBands', 'oneBand', 'twoBands', 'threeBands', 'fourBands'];

      setThreshold = function setThreshold(newPrice, obj) {
        var curThreshold = obj.ThresholdLevel;

        if (newPrice >= obj.MaxPrice) {
          obj.ThresholdLevel = 4;
        } else if (newPrice <= obj.MinPrice) {
          obj.ThresholdLevel = 0;
        } else {
          obj.ThresholdLevel = Math.floor((obj.Price - obj.MinPrice) / (obj.MaxPrice - obj.MinPrice) * 100 / 20);
        }

        obj.thresholdLevelBandsChanged = obj.ThresholdLevel - curThreshold;
      };

      Drug = (function () {
        function Drug(nameIn, minPriceIn, maxPriceIn) {
          _classCallCheck(this, Drug);

          this.MaxPrice = 1;
          this.MinPrice = 1;
          this.price = null;
          this.Available = true;
          this.Name = '';
          this.ThresholdLevel = 2;
          this.directionChange = 'even';
          this.thresholdLevelBandsChanged = 0;

          this.Name = nameIn;
          this.MaxPrice = maxPriceIn;
          this.MinPrice = minPriceIn;
        }

        _createClass(Drug, [{
          key: 'PriceChangeDirectionClass',
          get: function () {
            return drugPriceChangeDirectionClasses[this.directionChange];
          }
        }, {
          key: 'ThresholdColorClass',
          get: function () {
            return drugPriceColorClasses[this.ThresholdLevel];
          }
        }, {
          key: 'ThresholdChangeClass',
          get: function () {
            return drugThresholdChangeClasses[this.thresholdLevelBandsChanged];
          }
        }, {
          key: 'Price',
          get: function () {
            return this.price;
          },
          set: function (newVal) {
            if (this.price !== null) {
              this.directionChange = newVal > this.price ? 'up' : newVal < this.price ? 'down' : 'even';
            }

            this.price = newVal;
            setThreshold(newVal, this);
          }
        }]);

        return Drug;
      })();

      _export('Drug', Drug);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kcnVnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFJLHFCQUFxQixFQVFyQiwrQkFBK0IsRUFNL0IsMEJBQTBCLEVBUTFCLFlBQVksRUFlSCxJQUFJOzs7Ozs7Ozs7QUFyQ2IsMkJBQXFCLEdBQUcsQ0FDMUIsb0JBQW9CLEVBQ3BCLDJCQUEyQixFQUMzQixrQkFBa0IsRUFDbEIsNEJBQTRCLEVBQzVCLDBCQUEwQixDQUMzQjtBQUVHLHFDQUErQixHQUFHO0FBQ3BDLGNBQU0sRUFBRSxrQkFBa0I7QUFDMUIsWUFBSSxFQUFFLGdCQUFnQjtBQUN0QixjQUFNLEVBQUUsRUFBRTtPQUNYO0FBRUcsZ0NBQTBCLEdBQUcsQ0FDL0IsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsQ0FDWjs7QUFFRyxrQkFBWSxHQUFHLFNBQWYsWUFBWSxDQUFZLFFBQVEsRUFBRSxHQUFHLEVBQUU7QUFDekMsWUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBQzs7QUFFdEMsWUFBRyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRTtBQUMzQixhQUFHLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUN4QixNQUFNLElBQUksUUFBUSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7QUFDbkMsYUFBRyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDeEIsTUFBTTtBQUVMLGFBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQSxJQUFLLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQSxBQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3hHOztBQUVELFdBQUcsQ0FBQywwQkFBMEIsR0FBRyxHQUFHLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQztPQUNwRTs7QUFFWSxVQUFJO0FBVUosaUJBVkEsSUFBSSxDQVVILE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFDO2dDQVZoQyxJQUFJOztlQUNmLFFBQVEsR0FBRyxDQUFDO2VBQ1osUUFBUSxHQUFHLENBQUM7ZUFDWixLQUFLLEdBQUcsSUFBSTtlQUNaLFNBQVMsR0FBRyxJQUFJO2VBQ2hCLElBQUksR0FBRyxFQUFFO2VBQ1QsY0FBYyxHQUFHLENBQUM7ZUFDbEIsZUFBZSxHQUFHLE1BQU07ZUFDeEIsMEJBQTBCLEdBQUcsQ0FBQzs7QUFHNUIsY0FBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7QUFDbkIsY0FBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFDM0IsY0FBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDNUI7O3FCQWRVLElBQUk7O2VBZ0JjLFlBQUc7QUFDOUIsbUJBQU8sK0JBQStCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1dBQzlEOzs7ZUFFc0IsWUFBRztBQUN4QixtQkFBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7V0FDbkQ7OztlQUV1QixZQUFHO0FBQ3pCLG1CQUFPLDBCQUEwQixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1dBQ3BFOzs7ZUFFUSxZQUFHO0FBQ1YsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztXQUNuQjtlQUVRLFVBQUMsTUFBTSxFQUFFO0FBQ2hCLGdCQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQ3RCLGtCQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxBQUFDLENBQUM7YUFDN0Y7O0FBRUQsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ3BCLHdCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1dBQzVCOzs7ZUF2Q1UsSUFBSTs7O3NCQUFKLElBQUkiLCJmaWxlIjoibW9kZWxzL2RydWcuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==