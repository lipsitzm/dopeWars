System.register(['aurelia-framework', 'aurelia-event-aggregator', './services/playerService', './services/drugService'], function (_export) {
  'use strict';

  var inject, bindable, EventAggregator, PlayerService, DrugService, DrugList;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }, function (_servicesPlayerService) {
      PlayerService = _servicesPlayerService.PlayerService;
    }, function (_servicesDrugService) {
      DrugService = _servicesDrugService.DrugService;
    }],
    execute: function () {
      DrugList = (function () {
        var _instanceInitializers = {};

        function DrugList(eventAggregator, playerService, drugService) {
          var _this = this;

          _classCallCheck(this, _DrugList);

          this.modalTitle = '';
          this.modalView = '';

          _defineDecoratedPropertyDescriptor(this, 'modalModel', _instanceInitializers);

          this.showing = false;
          this.DrugsAvailable = false;

          this.eventAggregator = eventAggregator;

          this.PlayerService = playerService;
          this.Player = null;
          this.PlayerService.GetPlayer().then(function (player) {
            _this.Player = player;
          });

          this.DrugService = drugService;
          this.DrugService.GetDrugList().then(function (drugList) {
            _this.ResetDrugViewModels(drugList);
          });

          this.eventAggregator.subscribe('drugInBackpackChanged', function (drug) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this.drugViewModels.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var drugVM = _step.value;

                if (drugVM.Drug.Name === drug.Name) {
                  var purchasedDrug = _this.Player.GetPurchasedDrug(drug);
                  drugVM.BackpackCount = purchasedDrug.BackpackCount;
                  drugVM.HighestBuyPrice = purchasedDrug.HighestBuyPrice;
                  break;
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
          });

          this.eventAggregator.subscribe('resetDrugsInBackpack', function (drugList) {
            _this.ResetDrugViewModels(drugList);
          });
        }

        var _DrugList = DrugList;

        _createDecoratedClass(_DrugList, [{
          key: 'modalModel',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'ResetDrugViewModels',
          value: function ResetDrugViewModels(drugList) {
            this.drugViewModels = new Array();
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = drugList.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var drug = _step2.value;

                this.drugViewModels.push({
                  Drug: drug,
                  BackpackCount: 0,
                  HighestBuyPrice: 0
                });
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                  _iterator2['return']();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }, {
          key: 'ShowSellDrugDialog',
          value: function ShowSellDrugDialog(drug, curDrugCount) {
            this.modalTitle = 'Sell Drugs';
            this.modalView = 'drugViews/sellDrug';
            this.modalModel = {
              Drug: drug,
              MaxSellAmount: curDrugCount,
              DrugList: this
            };
            this.showing = true;
          }
        }, {
          key: 'ShowBuyDrugDialog',
          value: function ShowBuyDrugDialog(drug, maxToBuy) {
            this.modalTitle = 'Buy Drugs';
            this.modalView = 'drugViews/buyDrug';
            this.modalModel = {
              Drug: drug,
              MaxBuyAmount: maxToBuy,
              DrugList: this
            };
            this.showing = true;
          }
        }, {
          key: 'ShowBuySellChooserDialog',
          value: function ShowBuySellChooserDialog(drug, curDrugCount, maxToBuy) {
            this.modalTitle = 'Buy or Sell';
            this.modalView = 'drugViews/buySellChooser';
            this.modalModel = {
              Drug: drug,
              DrugCount: curDrugCount,
              MaxBuyAmount: maxToBuy,
              DrugList: this
            };
            this.showing = true;
          }
        }, {
          key: 'ShowBuySellIssueDialog',
          value: function ShowBuySellIssueDialog(drug) {
            this.modalModel = {
              Drug: drug,
              DrugList: this
            };
            if (this.Player.BackpackSpace === 0) {
              this.modalTitle = 'No More Space';
              this.modalModel.Reason = 1;
            } else {
              this.modalTitle = 'Not Enough Money and Nothing To Sell';
              this.modalModel.Reason = 2;
            }
            this.modalView = 'drugViews/buySellIssue';
            this.showing = true;
          }
        }, {
          key: 'ShowDrugDialog',
          value: function ShowDrugDialog(drug) {
            var curDrugCount = this.Player.GetBackpackDrugCount(drug);
            var maxToBuy = this.Player.GetMaxPossibleToBuy(drug.Price);
            if (curDrugCount > 0) {
              if (maxToBuy > 0) {
                this.ShowBuySellChooserDialog(drug, curDrugCount, maxToBuy);
              } else {
                this.ShowSellDrugDialog(drug, curDrugCount);
              }
            } else if (curDrugCount === 0) {
              if (maxToBuy > 0) {
                this.ShowBuyDrugDialog(drug, maxToBuy);
              } else {
                this.ShowBuySellIssueDialog(drug);
              }
            }
          }
        }, {
          key: 'cancel',
          value: function cancel() {
            this.showing = false;
          }
        }], null, _instanceInitializers);

        DrugList = inject(EventAggregator, PlayerService, DrugService)(DrugList) || DrugList;
        return DrugList;
      })();

      _export('DrugList', DrugList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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