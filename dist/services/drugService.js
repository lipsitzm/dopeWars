System.register(["../models/drug"], function (_export) {
  "use strict";

  var Drug, drugs, doPriceMath, surpriseUpdateDrugPrice, DrugService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_modelsDrug) {
      Drug = _modelsDrug.Drug;
    }],
    execute: function () {
      drugs = [new Drug("Acid", 1000, 3000), new Drug("Cocaine", 10000, 30000), new Drug("Hashish", 800, 1500), new Drug("Heroin", 6000, 20000), new Drug("Ludes", 25, 100), new Drug("Meth", 25, 100), new Drug("MDMA", 1000, 4000), new Drug("Opium", 500, 1250), new Drug("PCP", 750, 2000), new Drug("Peyote", 100, 750), new Drug("Shrooms", 100, 1250), new Drug("Speed", 50, 200), new Drug("Weed", 50, 200)];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RydWdTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztZQUVJLEtBQUssRUFnQkwsV0FBVyxFQUlYLHVCQUF1QixFQWVkLFdBQVc7Ozs7Ozs7O3lCQXJDaEIsSUFBSTs7O0FBRVIsV0FBSyxHQUFHLENBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsRUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFDNUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFDOUIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FDMUI7O0FBRUcsaUJBQVcsR0FBRyxTQUFkLFdBQVcsQ0FBSSxRQUFRLEVBQUUsUUFBUSxFQUFLO0FBQ3hDLGVBQU8sSUFBSSxDQUFDLEtB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