System.register(['models/surprise'], function (_export) {
  'use strict';

  var Surprise, surprises, SurpriseService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_modelsSurprise) {
      Surprise = _modelsSurprise.Surprise;
    }],
    execute: function () {
      surprises = [new Surprise(0.25, 'DrugService', 'SurpriseMakeRandomAvailableDrugCheaper'), new Surprise(0.25, 'DrugService', 'SurpriseMakeRandomAvailableDrugMoreExpensive'), new Surprise(0.25, 'PlayerService', 'SurpriseFindDrugsOnSubway'), new Surprise(0.25, 'PlayerService', 'SurpriseGetMugged')];

      SurpriseService = (function () {
        function SurpriseService() {
          _classCallCheck(this, SurpriseService);
        }

        _createClass(SurpriseService, [{
          key: 'GetSurprises',
          value: function GetSurprises() {
            return new Promise(function (resolve, reject) {
              resolve(surprises);
            });
          }
        }]);

        return SurpriseService;
      })();

      _export('SurpriseService', SurpriseService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N1cnByaXNlU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRUksU0FBUyxFQU9BLGVBQWU7Ozs7Ozs7O2lDQVRwQixRQUFROzs7QUFFWixlQUFTLEdBQUcsQ0FDZCxJQUFJLFFBQVEsQ0FBQyxJQUFHLEVBQUUsYUFBYSxFQUFFLHdDQUF3QyxDQUFDLEVBQzFFLElBQUksUUFBUSxDQUFDLElBQUcsRUFBRSxhQUFhLEVBQUUsOENBQThDLENBQUMsRUFDaEYsSUFBSSxRQUFRLENBQUMsSUFBRyxFQUFFLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQyxFQUMvRCxJQUFJLFFBQVEsQ0FBQyxJQUFHLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDLENBQ3hEOztBQUVZLHFCQUFlO2lCQUFmLGVBQWU7Z0NBQWYsZUFBZTs7O3FCQUFmLGVBQWU7O2lCQUNkLHdCQUFHO0FBQ2IsbUJBQU8sSUFBSSxPQUFPLENBQ2hCLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN6QixxQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3BCLENBQUMsQ0FBQztXQUNOOzs7ZUFOVSxlQUFlOzs7aUNBQWYsZUFBZSIsImZpbGUiOiJzZXJ2aWNlcy9zdXJwcmlzZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==