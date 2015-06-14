System.register(['aurelia-framework', 'aurelia-event-aggregator', '../models/playerInfo', '../services/drugService', 'numeral'], function (_export) {
  'use strict';

  var inject, EventAggregator, PlayerInfo, DrugService, numeral, player, drugList, eventAggregator, PlayerService;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_modelsPlayerInfo) {
      PlayerInfo = _modelsPlayerInfo.PlayerInfo;
    }, function (_servicesDrugService) {
      DrugService = _servicesDrugService.DrugService;
    }, function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      player = new PlayerInfo();
      drugList = null;
      eventAggregator = null;

      PlayerService = (function () {
        function PlayerService(eventAggregatorIn, drugService) {
          _classCallCheck(this, _PlayerService);

          eventAggregator = eventAggregatorIn;

          this.DrugService = drugService;
          this.DrugService.GetDrugList().then(function (drugListIn) {
            drugList = drugListIn;
          });
        }

        var _PlayerService = PlayerService;

        _createClass(_PlayerService, [{
          key: 'GetPlayer',
          value: function GetPlayer() {
            return new Promise(function (resolve, reject) {
              resolve(player);
            });
          }
        }, {
          key: 'SurpriseFindDrugsOnSubway',
          value: function SurpriseFindDrugsOnSubway() {
            return new Promise(function (resolve, reject) {
              var idx = Math.floor(Math.random() * (drugList.length + 1));
              var drug = drugList[idx];
              var drugsToFind = Math.floor(player.BackpackSpace / 10 * 1.5);
              if (drugsToFind > 0) {
                player.BuyDrug(drug, drugsToFind, 0);
                eventAggregator.publish('drugInBackpackChanged', drug);
                resolve('You saw a dead guy on the subway so you checked his pockets and found ' + drugsToFind + ' ' + drug.Name + '!');
              } else {
                resolve('You saw a dead guy on the subway with a ton of drugs on him, but your backpack was already full so you had to gave em all to the homeless guy next to you.');
              }
            });
          }
        }, {
          key: 'SurpriseGetMugged',
          value: function SurpriseGetMugged() {
            return new Promise(function (resolve, reject) {
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;

              try {
                for (var _iterator = drugList.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var drug = _step.value;

                  var drugsOnPlayer = player.GetBackpackDrugCount(drug);
                  if (drugsOnPlayer > 0) {
                    player.SellDrug(drug, Math.ceil(drugsOnPlayer / 2), 0);
                    eventAggregator.publish('drugInBackpackChanged', drug);
                  }
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              player.Money = Math.floor(player.Money / 2);
              resolve('You got jumped in the middle the middle of the night! They stole half of all your drugs and money!');
            });
          }
        }, {
          key: 'SurpriseFindMoney',
          value: function SurpriseFindMoney() {
            return new Promise(function (resolve, reject) {
              var moneyToAdd = Math.floor(Math.random() * (player.Money / 2 - 1) + 1);
              player.Money = player.Money + moneyToAdd;
              resolve('You found a briefcase on the subway with ' + numeral(moneyToAdd).format('($0,0)') + ' in it!');
            });
          }
        }, {
          key: 'SurpriseBiggerBackpack',
          value: function SurpriseBiggerBackpack() {
            return new Promise(function (resolve, reject) {
              var spaceToAdd = Math.floor(Math.random() * (player.BackpackSize / 5 - 1) + 1);
              if (spaceToAdd <= 1) {
                spaceToAdd = 2;
              }
              player.BackpackSize = player.BackpackSize + spaceToAdd;
              player.BackpackSpace = player.BackpackSpace + spaceToAdd;
              resolve('You were on your way to your next customer and found a new backpack with space for ' + spaceToAdd + ' more drugs in it!');
            });
          }
        }]);

        PlayerService = inject(EventAggregator, DrugService)(PlayerService) || PlayerService;
        return PlayerService;
      })();

      _export('PlayerService', PlayerService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3BsYXllclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lFQU1JLE1BQU0sRUFDTixRQUFRLEVBQ1IsZUFBZSxFQUdOLGFBQWE7Ozs7Ozs7O2lDQVhsQixNQUFNOztnREFDTixlQUFlOztxQ0FDZixVQUFVOzt5Q0FDVixXQUFXOzs7OztBQUdmLFlBQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtBQUN6QixjQUFRLEdBQUcsSUFBSTtBQUNmLHFCQUFlLEdBQUcsSUFBSTs7QUFHYixtQkFBYTtBQUNiLGlCQURBLGFBQWEsQ0FDWixpQkFBaUIsRUFBRSxXQUFXLEVBQUU7OztBQUMxQyx5QkFBZSxHQUFHLGlCQUFpQixDQUFDOztBQUVwQyxjQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixjQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFVBQVUsRUFBSTtBQUNoRCxvQkFBUSxHQUFHLFVBQVUsQ0FBQztXQUN2QixDQUFDLENBQUM7U0FDSjs7NkJBUlUsYUFBYTs7OztpQkFVZixxQkFBRztBQUNWLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDekIscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQixDQUFDLENBQUM7V0FDTjs7O2lCQUV3QixxQ0FBRztBQUMxQixtQkFBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3pCLGtCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUMsQ0FBQztBQUM1RCxrQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLGtCQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxh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