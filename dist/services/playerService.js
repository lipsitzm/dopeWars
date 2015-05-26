System.register(['models/playerInfo'], function (_export) {
  var PlayerInfo, _classCallCheck, _createClass, player, PlayerService;

  return {
    setters: [function (_modelsPlayerInfo) {
      PlayerInfo = _modelsPlayerInfo.PlayerInfo;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      player = new PlayerInfo();

      PlayerService = (function () {
        function PlayerService() {
          _classCallCheck(this, PlayerService);
        }

        _createClass(PlayerService, [{
          key: 'GetPlayer',
          value: function GetPlayer() {
            return new Promise(function (resolve, reject) {
              resolve(player);
            });
          }
        }]);

        return PlayerService;
      })();

      _export('PlayerService', PlayerService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3BsYXllclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtpREFFSSxNQUFNLEVBRUcsYUFBYTs7OztxQ0FKbEIsVUFBVTs7Ozs7Ozs7O0FBRWQsWUFBTSxHQUFHLElBQUksVUFBVSxFQUFFOztBQUVoQixtQkFBYTtpQkFBYixhQUFhO2dDQUFiLGFBQWE7OztxQkFBYixhQUFhOztpQkFDZixxQkFBRztBQUNWLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQixDQUFDLENBQUM7V0FDTjs7O2VBTlUsYUFBYTs7OytCQUFiLGFBQWEiLCJmaWxlIjoic2VydmljZXMvcGxheWVyU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9