System.register(["models/drug"], function (_export) {
  "use strict";

  var Drug, drugs, doPriceMath, surpriseUpdateDrugPrice, DrugService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_modelsDrug) {
      Drug = _modelsDrug.Drug;
    }],
    execute: function () {
      drugs = [new Drug("Cocaine", 10000, 30000), new Drug("MDMA", 500, 1000), new Drug("Weed", 50, 200), new Drug("Speed", 10, 50), new Drug("Meth", 25, 100)];

      doPriceMath = function doPriceMath(minPrice, maxPrice) {
        return Math.floor(Math.random() * (maxPrice - minPrice) + minPrice);
      };

      surpriseUpdateDrugPrice = function surpriseUpdateDrugPrice(minFunc, maxFunc) {
        var drugToCheck = undefined;
        for (var i = drugs.length - 1; i > 0; i--) {
          var idx = Math.floor(Math.random() * (i + 1));
          drugToCheck = drugs[idx];

          if (drugToCheck.Available) {
            drugToCheck.Price = doPriceMath(minFunc(drugToCheck), maxFunc(drugToCheck));
            break;
          }
        }
        return drugToCheck;
      };

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
              drug.Price = doPriceMath(drug.MinPrice, drug.MaxPrice);
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
        }, {
          key: "SurpriseMakeRandomAvailableDrugMoreExpensive",
          value: function SurpriseMakeRandomAvailableDrugMoreExpensive() {
            return new Promise(function (resolve, reject) {
              var drugToCheck = surpriseUpdateDrugPrice(function (drug) {
                return drug.MaxPrice;
              }, function (drug) {
                return drug.MaxPrice * 2;
              });
              resolve("The cops seized tons of " + drugToCheck.Name + " making it unreal expensive!");
            });
          }
        }, {
          key: "SurpriseMakeRandomAvailableDrugCheaper",
          value: function SurpriseMakeRandomAvailableDrugCheaper() {
            return new Promise(function (resolve, reject) {
              var drugToCheck = surpriseUpdateDrugPrice(function (drug) {
                return drug.MinPrice / 2;
              }, function (drug) {
                return drug.MinPrice;
              });
              resolve("Someone broke into the evidence locker at the police station and stole a ton of " + drugToCheck.Name + " making it beyond cheap!");
            });
          }
        }]);

        return DrugService;
      })();

      _export("DrugService", DrugService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RydWdTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztZQUVJLEtBQUssRUFRTCxXQUFXLEVBSVgsdUJBQXVCLEVBZWQsV0FBVzs7Ozs7Ozs7eUJBN0JoQixJQUFJOzs7QUFFUixXQUFLLEdBQUcsQ0FDVixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUNqQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUN6QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUMxQjs7QUFFRyxpQkFBVyxHQUFHLFNBQWQsV0FBVyxDQUFJLFFBQVEsRUFBRSxRQUFRLEVBQUs7QUFDeEMsZUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFBLEFBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztPQUNyRTs7QUFFRyw2QkFBdUIsR0FBRyxTQUExQix1QkFBdUIsQ0FBSSxPQUFPLEVBQUUsT0FBTyxFQUFLO0FBRWxELFlBQUksV0FBVyxZQUFBLENBQUM7QUFDaEIsYUFBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pDLGNBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDLENBQUM7QUFDOUMscUJBQVcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXpCLGNBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRTtBQUN4Qix1QkFBVyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzVFLGtCQUFNO1dBQ1A7U0FDRjtBQUNELGVBQU8sV0FBVyxDQUFBO09BQ25COztBQUVZLGlCQUFXO2lCQUFYLFdBQVc7Z0NBQVgsV0FBVzs7O3FCQUFYLFdBQVc7O2lCQUVYLHVCQUFHO0FBQ1osbUJBQU8sSUFBSSxPQUFPLENBQ2hCLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN6QixxQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hCLENBQUMsQ0FBQztXQUNOOzs7aUJBRVUscUJBQUMsSUFBSSxFQUFFO0FBQ2hCLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIsa0JBQUksQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZELHFCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZixDQUFDLENBQUM7V0FDTjs7O2lCQUVpQiw0QkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzdCLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIsa0JBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztBQUM3RCxxQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1dBQ047OztpQkFFMkMsd0RBQUc7QUFDN0MsbUJBQU8sSUFBSSxPQUFPLENBQ2hCLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN6QixrQkFBSSxXQUFXLEdBQUcsdUJBQXVCLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFBRSx1QkFBTyxJQUFJLENBQUMsUUFBUSxDQUFBO2VBQUUsRUFBRSxVQUFDLElBQUksRUFBSztBQUFFLHVCQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFBO2VBQUUsQ0FBQyxDQUFDO0FBQ3RILHFCQUFPLENBQUMsMEJBQTBCLEdBQUcsV0FBVyxDQUFDLElBQUksR0FBRyw4QkFBOEIsQ0FBQyxDQUFDO2FBQ3pGLENBQUMsQ0FBQztXQUNOOzs7aUJBRXFDLGtEQUFHO0FBQ3ZDLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIsa0JBQUksV0FBVyxHQUFHLHVCQUF1QixDQUFDLFVBQUMsSUFBSSxFQUFLO0FBQUUsdUJBQU8sSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7ZUFBRSxFQUFFLFVBQUMsSUFBSSxFQUFLO0FBQUUsdUJBQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtlQUFFLENBQUMsQ0FBQztBQUN0SCxxQkFBTyxDQUFDLGtGQUFrRixHQUFHLFdBQVcsQ0FBQyxJQUFJLEdBQUcsMEJBQTBCLENBQUMsQ0FBQzthQUM3SSxDQUFDLENBQUM7V0FDTjs7O2VBdkNVLFdBQVc7Ozs2QkFBWCxXQUFXIiwiZmlsZSI6InNlcnZpY2VzL2RydWdTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=