System.register(['aurelia-framework', './services/playerService'], function (_export) {
  var inject, bindable, PlayerService, _classCallCheck, _createDecoratedClass, DrugList;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_servicesPlayerService) {
      PlayerService = _servicesPlayerService.PlayerService;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      DrugList = (function () {
        var _instanceInitializers = {};

        function DrugList(playerService) {
          var _this = this;

          _classCallCheck(this, _DrugList);

          this.drugs = _instanceInitializers.drugs.call(this);
          this.currentAmount = 0;
          this.maxAmount = 0;

          this.PlayerService = playerService;
          this.Player = null;

          this.PlayerService.GetPlayer().then(function (player) {
            _this.Player = player;
          });

          this.Engine = this;
        }

        var _DrugList = DrugList;

        _createDecoratedClass(_DrugList, [{
          key: 'drugs',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'currentAmount',
          value: undefined,
          enumerable: true
        }, {
          key: 'maxAmount',
          value: undefined,
          enumerable: true
        }, {
          key: 'showSellDialog',
          value: function showSellDialog(drug) {
            this.currentAmount = this.maxAmount = drug.BackpackCount;
            this.panelBodyToShow = -1;
          }
        }, {
          key: 'showBuyDialog',
          value: function showBuyDialog(drug) {
            this.currentAmount = this.maxAmount = this.Player.GetMaxPossibleToBuy(drug.Price);
            if (this.currentAmount > 0) {
              this.panelBodyToShow = 1;
            } else {
              this.panelBodyToShow = null;
            }
          }
        }, {
          key: 'buyDrugs',
          value: function buyDrugs(drug) {
            var errorMessage = this.Player.BuyDrug(drug, this.currentAmount);
            if (errorMessage == null) {
              this.loadDrugPanelInfo(drug);
            } else {
              console.log('there was an error buying', errorMessage);
              this.errorMessage = errorMessage;
            }
          }
        }, {
          key: 'sellDrugs',
          value: function sellDrugs(drug) {
            var errorMessage = this.Player.SellDrug(drug, this.currentAmount);
            if (errorMessage == null) {
              this.loadDrugPanelInfo(drug);
            } else {
              console.log('there was an error selling', errorMessage);
              this.errorMessage = errorMessage;
            }
          }
        }, {
          key: 'loadDrugPanelInfo',
          value: function loadDrugPanelInfo(drug) {
            var curDrugCount = drug.BackpackCount;
            var maxToBuy = this.Player.GetMaxPossibleToBuy(drug.Price);
            if (curDrugCount > 0) {
              if (maxToBuy > 0) {
                this.drugCount = curDrugCount;
                this.panelBodyToShow = 0;
              } else {
                this.showSellDialog(drug);
              }
            } else if (curDrugCount === 0) {
              this.showBuyDialog(drug);
            }
          }
        }], null, _instanceInitializers);

        DrugList = inject(PlayerService)(DrugList) || DrugList;
        return DrugList;
      })();

      _export('DrugList', DrugList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRydWctbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOytFQUlhLFFBQVE7Ozs7aUNBSmIsTUFBTTttQ0FBRSxRQUFROzs2Q0FDaEIsYUFBYTs7Ozs7Ozs7O0FBR1IsY0FBUTs7O0FBS1IsaUJBTEEsUUFBUSxDQUtQLGFBQWEsRUFBQzs7Ozs7ZUFKaEIsS0FBSyx5QkFBTCxLQUFLO2VBQ2YsYUFBYSxHQUFHLENBQUM7ZUFDakIsU0FBUyxHQUFHLENBQUM7O0FBR1gsY0FBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsY0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7O0FBRW5CLGNBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQzVDLGtCQUFLLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEIsQ0FBQyxDQUFDOztBQUVILGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCOzt3QkFkVSxRQUFROzs7O3VCQUNsQixRQUFROzttQkFBUyxJQUFJOzs7Ozs7Ozs7Ozs7O2lCQWVSLHdCQUFDLElBQUksRUFBRTtBQUNuQixnQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7QUFDekQsZ0JBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7V0FDM0I7OztpQkFFWSx1QkFBQyxJQUFJLEVBQUU7QUFDbEIsZ0JBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRixnQkFBRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtBQUN6QixrQkFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7YUFDMUIsTUFBTTtBQUNMLGtCQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQzthQUU3QjtXQUNGOzs7aUJBRU8sa0JBQUMsSUFBSSxFQUFFO0FBQ2IsZ0JBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDakUsZ0JBQUcsWUFBWSxJQUFJLElBQUksRUFBRTtBQUN2QixrQkFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlCLE1BQU07QUFDTCxxQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUN2RCxrQkFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7YUFDbEM7V0FDRjs7O2lCQUVRLG1CQUFDLElBQUksRUFBRTtBQUNkLGdCQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ2xFLGdCQUFHLFlBQVksSUFBSSxJQUFJLEVBQUU7QUFDdkIsa0JBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QixNQUFNO0FBQ0wscUJBQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDeEQsa0JBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO2FBQ2xDO1dBRUY7OztpQkFFZ0IsMkJBQUMsSUFBSSxFQUFFO0FBQ3RCLGdCQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ3RDLGdCQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzRCxnQkFBRyxZQUFZLEdBQUcsQ0FBQyxFQUFFO0FBQ25CLGtCQUFHLFFBQVEsR0FBRyxDQUFDLEVBQ2Y7QUFDRSxvQkFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7QUFDOUIsb0JBQUksQ0FBQyxlQUFlLEdBQUksQ0FBQyxDQUFDO2VBQzNCLE1BQU07QUFDTCxvQkFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztlQUMzQjthQUNGLE1BQU0sSUFBRyxZQUFZLEtBQUssQ0FBQyxFQUFFO0FBQzVCLGtCQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCO1dBQ0Y7OztBQWxFVSxnQkFBUSxHQURwQixNQUFNLENBQUMsYUFBYSxDQUFDLENBQ1QsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJkcnVnLWxpc3QuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==