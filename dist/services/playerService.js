System.register(['aurelia-framework', 'aurelia-event-aggregator', '../models/playerInfo', '../services/drugService'], function (_export) {
  'use strict';

  var inject, EventAggregator, PlayerInfo, DrugService, player, drugList, eventAggregator, PlayerService;

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
        }]);

        PlayerService = inject(EventAggregator, DrugService)(PlayerService) || PlayerService;
        return PlayerService;
      })();

      _export('PlayerService', PlayerService);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3BsYXllclNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dEQUtJLE1BQU0sRUFDTixRQUFRLEVBQ1IsZUFBZSxFQUdOLGFBQWE7Ozs7Ozs7O2lDQVZsQixNQUFNOztnREFDTixlQUFlOztxQ0FDZixVQUFVOzt5Q0FDVixXQUFXOzs7QUFFZixZQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7QUFDekIsY0FBUSxHQUFHLElBQUk7QUFDZixxQkFBZSxHQUFHLElBQUk7O0FBR2IsbUJBQWE7QUFDYixpQkFEQSxhQUFhLENBQ1osaUJBQWlCLEVBQUUsV0FBVyxFQUFFOzs7QUFDMUMseUJBQWUsR0FBRyxpQkFBaUIsQ0FBQzs7QUFFcEMsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7QUFDL0IsY0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxVQUFVLEVBQUk7QUFDaEQsb0JBQVEsR0FBRyxVQUFVLENBQUM7V0FDdkIsQ0FBQyxDQUFDO1NBQ0o7OzZCQVJVLGFBQWE7Ozs7aUJBVWYscUJBQUc7QUFDVixtQkFBTyxJQUFJLE9BQU8sQ0FDaEIsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ3pCLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDakIsQ0FBQyxDQUFDO1dBQ047OztpQkFFd0IscUNBQUc7QUFDMUIsbUJBQU8sSUFBSSxPQUFPLENBQ2hCLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUN6QixrQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDLENBQUM7QUFDNUQsa0JBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN6QixrQkFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM5RCxrQkFBRyxXQUFXLEdBQUcsQ0FBQyxFQUFFO0FBQ2xCLHNCQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsK0JBQWUsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkQsdUJBQU8sQ0FBQyx3RUFBd0UsR0FBRyxXQUFXLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7ZUFDekgsTUFBTTtBQUNMLHVCQUFPLENBQUMsNEpBQTRKLENBQUMsQ0FBQztlQUN2SzthQUNGLENBQ0YsQ0FBQztXQUNIOzs7aUJBRWdCLDZCQUFHO0FBQ2xCLG1CQUFPLElBQUksT0FBTyxDQUNoQixVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7Ozs7OztBQUN6QixxQ0FBaUIsUUFBUSxDQUFDLE1BQU0sRUFBRSw4SEFBRTtzQkFBM0IsSUFBSTs7QUFDWCxzQkFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RELHNCQUFHLGFBQWEsR0FBRyxDQUFDLEVBQUU7QUFDcEIsMEJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELG1DQUFlLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO21CQUN4RDtpQkFDRjs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG9CQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QyxxQkFBTyxDQUFDLG9HQUFvRyxDQUFDLENBQUM7YUFDL0csQ0FDRixDQUFDO1dBQ0g7OztBQWpEVSxxQkFBYSxHQUR6QixNQUFNLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUN4QixhQUFhLEtBQWIsYUFBYTtlQUFiLGFBQWE7OzsrQkFBYixhQUFhIiwiZmlsZSI6InNlcnZpY2VzL3BsYXllclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==