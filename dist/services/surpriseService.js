System.register(['../models/surprise'], function (_export) {
  'use strict';

  var Surprise, surprises, SurpriseService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_modelsSurprise) {
      Surprise = _modelsSurprise.Surprise;
    }],
    execute: function () {
      surprises = [new Surprise(0.15, 'DrugService', 'SurpriseMakeRandomAvailableDrugCheaper'), new Surprise(0.15, 'DrugService', 'SurpriseMakeRandomAvailableDrugMoreExpensive'), new Surprise(0.25, 'PlayerService', 'SurpriseFindDrugsOnSubway'), new Surprise(0.05, 'PlayerService', 'SurpriseGetMugged'), new Surprise(0.05, 'PlayerService', 'SurpriseFindMoney'), new Surprise(0.05, 'PlayerService', 'SurpriseBiggerBackpack')];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3N1cnByaXNlU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRUksU0FBUyxFQVVBLGVBQWU7Ozs7Ozs7O2lDQVpwQixRQUFROzs7QUFFWixlQUFTLEdBQUcsQ0FFZCxJQUFJLFFBQVEsQ0FBQyxJQUFHLEVBQUUsYUFBYSxFQUFFLHdDQUF3QyxDQUFDLEVBQzFFLElBQUksUUFBUSxDQUFDLElBQUcsRUFBRSxhQUFhLEVBQUUsOENBQThDLENBQUMsRUFDaEYsSUFBSSxRQUFRLENBQUMsSUFBRyxFQUFFLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQyxFQUMvRCxJQUFJLFFBQVEsQ0FBQyxJQUFHLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDLEVBQ3ZELElBQUksUUFBUSxDQUFDLElBQUcsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUMsRUFDdkQsSUFBSSxRQUFRLENBQUMsSUFBRyxFQUFFLGVBQWUsRUFBRSx3QkFBd0IsQ0FBQyxDQUM3RDs7QUFFWSxxQkFBZTtpQkFBZixlQUFlO2dDQUFmLGVBQWU7OztxQkFBZixlQUFlOztpQkFDZCx3QkFBRztBQUNiLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIscUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNwQixDQUFDLENBQUM7V0FDTjs7O2VBTlUsZUFBZTs7O2lDQUFmLGVBQWUiLCJmaWxlIjoic2VydmljZXMvc3VycHJpc2VTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=