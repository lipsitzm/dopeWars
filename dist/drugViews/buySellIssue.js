System.register([], function (_export) {
  "use strict";

  var BuySellIssue;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      BuySellIssue = (function () {
        function BuySellIssue() {
          _classCallCheck(this, BuySellIssue);
        }

        _createClass(BuySellIssue, [{
          key: "activate",
          value: function activate(model) {
            this.drug = model.Drug;
            this.reason = model.Reason;
            this.drugList = model.DrugList;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.drugList.showing = false;
          }
        }]);

        return BuySellIssue;
      })();

      _export("BuySellIssue", BuySellIssue);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRydWdWaWV3cy9idXlTZWxsSXNzdWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsWUFBWTs7Ozs7Ozs7O0FBQVosa0JBQVk7aUJBQVosWUFBWTtnQ0FBWixZQUFZOzs7cUJBQVosWUFBWTs7aUJBQ2Ysa0JBQUMsS0FBSyxFQUFFO0FBQ2QsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN2QixnQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQzNCLGdCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7V0FDaEM7OztpQkFFSyxrQkFBRztBQUNQLGdCQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7V0FDL0I7OztlQVRVLFlBQVk7Ozs4QkFBWixZQUFZIiwiZmlsZSI6ImRydWdWaWV3cy9idXlTZWxsSXNzdWUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==