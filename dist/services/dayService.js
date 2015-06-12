System.register(['../models/dayOption'], function (_export) {
  'use strict';

  var DayOption, dayOptions, DayService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_modelsDayOption) {
      DayOption = _modelsDayOption.DayOption;
    }],
    execute: function () {
      dayOptions = [new DayOption(30), new DayOption(60), new DayOption(90), new DayOption(120)];

      DayService = (function () {
        function DayService() {
          _classCallCheck(this, DayService);
        }

        _createClass(DayService, [{
          key: 'GetDayOptions',
          value: function GetDayOptions() {
            return new Promise(function (resolve, reject) {
              resolve(dayOptions);
            });
          }
        }]);

        return DayService;
      })();

      _export('DayService', DayService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RheVNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lCQUVJLFVBQVUsRUFRRCxVQUFVOzs7Ozs7OzttQ0FWZixTQUFTOzs7QUFFYixnQkFBVSxHQUFHLENBRWYsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2pCLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNqQixJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDakIsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQ25COztBQUVZLGdCQUFVO2lCQUFWLFVBQVU7Z0NBQVYsVUFBVTs7O3FCQUFWLFVBQVU7O2lCQUNSLHlCQUFHO0FBQ2QsbUJBQU8sSUFBSSxPQUFPLENBQ2hCLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN6QixxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztXQUNOOzs7ZUFOVSxVQUFVOzs7NEJBQVYsVUFBVSIsImZpbGUiOiJzZXJ2aWNlcy9kYXlTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=