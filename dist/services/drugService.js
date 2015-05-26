System.register(["models/drug"], function (_export) {
  var Drug, _classCallCheck, _createClass, drugs, DrugService;

  return {
    setters: [function (_modelsDrug) {
      Drug = _modelsDrug.Drug;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      drugs = [new Drug("Cocaine", 10000, 30000), new Drug("MDMA", 500, 1000), new Drug("Weed", 50, 200), new Drug("Speed", 10, 50), new Drug("Meth", 25, 100)];

      DrugService = (function () {
        function DrugService() {
          _classCallCheck(this, DrugService);
        }

        _createClass(DrugService, [{
          key: "GetDrugList",
          value: function GetDrugList() {
            return new Promise(function (resolve, reject) {
              resolve(drugs);
            });
          }
        }, {
          key: "GetNewPrice",
          value: function GetNewPrice(drug) {
            return new Promise(function (resolve, reject) {
              drug.Price = Math.floor(Math.random() * (drug.MaxPrice - drug.MinPrice)) + drug.MinPrice;
              resolve(true);
            });
          }
        }, {
          key: "GetNewAvailability",
          value: function GetNewAvailability(city, drug) {
            return new Promise(function (resolve, reject) {
              drug.Available = Math.random() >= city.AvailabilityThreshold;
              resolve(true);
            });
          }
        }]);

        return DrugService;
      })();

      _export("DrugService", DrugService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RydWdTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7MkNBRUksS0FBSyxFQVFJLFdBQVc7Ozs7eUJBVmhCLElBQUk7Ozs7Ozs7OztBQUVSLFdBQUssR0FBRyxDQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQzFCOztBQUVZLGlCQUFXO2lCQUFYLFdBQVc7Z0NBQVgsV0FBVzs7O3FCQUFYLFdBQVc7O2lCQUVYLHVCQUFHO0FBQ1osbUJBQU8sSUFBSSxPQUFPLENBQ2hCLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN6QixxQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hCLENBQUMsQ0FBQztXQUNOOzs7aUJBRVUscUJBQUMsSUFBSSxFQUFFO0FBQ2hCLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBLEFBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDekYscUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmLENBQUMsQ0FBQztXQUNOOzs7aUJBRWlCLDRCQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDN0IsbUJBQU8sSUFBSSxPQUFPLENBQ2hCLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN6QixrQkFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDO0FBQzdELHFCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZixDQUFDLENBQUM7V0FDTjs7O2VBdkJVLFdBQVc7Ozs2QkFBWCxXQUFXIiwiZmlsZSI6InNlcnZpY2VzL2RydWdTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=