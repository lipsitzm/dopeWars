System.register(["models/cityInfo"], function (_export) {
  var CityInfo, _classCallCheck, _createClass, cityInfos, CityService;

  return {
    setters: [function (_modelsCityInfo) {
      CityInfo = _modelsCityInfo.CityInfo;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      cityInfos = [new CityInfo("Dublin", 0.3), new CityInfo("London", 0.4), new CityInfo("Paris", 0.4), new CityInfo("Amsterdam", 0.05), new CityInfo("Munich", 0.3), new CityInfo("Prague", 0.2), new CityInfo("Rome", 0.25), new CityInfo("Ibiza", 0)];

      CityService = (function () {
        function CityService() {
          _classCallCheck(this, CityService);
        }

        _createClass(CityService, [{
          key: "GetCityList",
          value: function GetCityList() {
            return new Promise(function (resolve, reject) {
              resolve(cityInfos);
            });
          }
        }]);

        return CityService;
      })();

      _export("CityService", CityService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NpdHlTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7K0NBRUksU0FBUyxFQVdBLFdBQVc7Ozs7aUNBYmhCLFFBQVE7Ozs7Ozs7OztBQUVaLGVBQVMsR0FBRyxDQUNkLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFFLENBQUMsRUFDMUIsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUUsQ0FBQyxFQUMxQixJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRSxDQUFDLEVBQ3pCLElBQUksUUFBUSxDQUFDLFdBQVcsRUFBQyxJQUFHLENBQUMsRUFDN0IsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUUsQ0FBQyxFQUMxQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRSxDQUFDLEVBQzFCLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFHLENBQUMsRUFDekIsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUN6Qjs7QUFFWSxpQkFBVztpQkFBWCxXQUFXO2dDQUFYLFdBQVc7OztxQkFBWCxXQUFXOztpQkFDWCx1QkFBRztBQUNaLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDdkIscUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN0QixDQUFDLENBQUM7V0FDTjs7O2VBTlUsV0FBVzs7OzZCQUFYLFdBQVciLCJmaWxlIjoic2VydmljZXMvY2l0eVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==