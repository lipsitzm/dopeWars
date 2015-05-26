System.register([], function (_export) {
  var _classCallCheck, _createClass, DayOption;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      DayOption = (function () {
        function DayOption(totalDaysIn) {
          _classCallCheck(this, DayOption);

          this.totalDays = totalDaysIn;
          this.name = totalDaysIn + " Days";
        }

        _createClass(DayOption, [{
          key: "totalDays",
          value: undefined,
          enumerable: true
        }, {
          key: "name",
          value: undefined,
          enumerable: true
        }, {
          key: "TotalDays",
          get: function () {
            return this.totalDays;
          }
        }, {
          key: "Name",
          get: function () {
            return this.name;
          }
        }]);

        return DayOption;
      })();

      _export("DayOption", DayOption);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9kYXlPcHRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxTQUFTOzs7Ozs7Ozs7OztBQUFULGVBQVM7QUFJVCxpQkFKQSxTQUFTLENBSVIsV0FBVyxFQUFFO2dDQUpkLFNBQVM7O0FBS2xCLGNBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQzdCLGNBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxHQUFHLE9BQU8sQ0FBQztTQUNuQzs7cUJBUFUsU0FBUzs7Ozs7Ozs7OztlQVNQLFlBQUc7QUFDZCxtQkFBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1dBQ3ZCOzs7ZUFFTyxZQUFHO0FBQ1QsbUJBQU8sSUFBSSxDQUFDLElBQUksQ0FBQztXQUNsQjs7O2VBZlUsU0FBUzs7OzJCQUFULFNBQVMiLCJmaWxlIjoibW9kZWxzL2RheU9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9