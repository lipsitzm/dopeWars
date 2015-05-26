System.register(['models/dayOption'], function (_export) {
  var DayOption, _classCallCheck, _createClass, dayOptions, DayService;

  return {
    setters: [function (_modelsDayOption) {
      DayOption = _modelsDayOption.DayOption;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      dayOptions = [new DayOption(4), new DayOption(30), new DayOption(60), new DayOption(90), new DayOption(120)];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RheVNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtnREFFSSxVQUFVLEVBUUQsVUFBVTs7OzttQ0FWZixTQUFTOzs7Ozs7Ozs7QUFFYixnQkFBVSxHQUFHLENBQ2YsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2hCLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNqQixJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDakIsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQ2pCLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUNuQjs7QUFFWSxnQkFBVTtpQkFBVixVQUFVO2dDQUFWLFVBQVU7OztxQkFBVixVQUFVOztpQkFDUix5QkFBRztBQUNkLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNyQixDQUFDLENBQUM7V0FDTjs7O2VBTlUsVUFBVTs7OzRCQUFWLFVBQVUiLCJmaWxlIjoic2VydmljZXMvZGF5U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9