System.register(['aurelia-framework', './services/dayService', './models/dayOption', './services/difficultyService', './models/difficultyLevel', 'bootstrap', 'bootstrap/css/bootstrap.css!'], function (_export) {
  'use strict';

  var bindable, inject, DayService, DayOption, DifficultyLevelsService, DifficultyLevel, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_servicesDayService) {
      DayService = _servicesDayService.DayService;
    }, function (_modelsDayOption) {
      DayOption = _modelsDayOption.DayOption;
    }, function (_servicesDifficultyService) {
      DifficultyLevelsService = _servicesDifficultyService.DifficultyLevelsService;
    }, function (_modelsDifficultyLevel) {
      DifficultyLevel = _modelsDifficultyLevel.DifficultyLevel;
    }, function (_bootstrap) {}, function (_bootstrapCssBootstrapCss) {}],
    execute: function () {
      App = (function () {
        function App(dayService, difficultyLevelsService) {
          _classCallCheck(this, _App);

          this.DayService = dayService;
          this.DifficultyLevelsService = difficultyLevelsService;
        }

        var _App = App;

        _createClass(_App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            var _this = this;

            config.mapUnknownRoutes(function (instruction) {
              var promisesAry = [_this.DayService.GetDayOptions(), _this.DifficultyLevelsService.GetDifficultyLevels()];
              return Promise.all(promisesAry).then(function (resultsAry) {
                if (resultsAry.length != 2) {
                  throw 'Expected 2 arrays to be resolved from Service promises';
                }
                if (resultsAry[0].length < 1 && resultsAry[0][0] instanceof DayOption) {
                  throw 'Expected at least one Day Option to load as a default';
                }
                if (resultsAry[1].length < 1 && resultsAry[1][0] instanceof DifficultyLevel) {
                  throw 'Expected at least one Difficulty Level to load as a default';
                }

                instruction.params.totalDays = resultsAry[0][0].TotalDays;
                instruction.params.difficultyLevel = resultsAry[1][0].Name;
                instruction.config.moduleId = './game';
              });
            });

            config.map([{
              route: ':totalDays/:difficultyLevel',
              moduleId: './game',
              title: 'Dope Wars'
            }]);

            config.title = 'Dope Wars';
          }
        }]);

        App = inject(DayService, DifficultyLevelsService)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUZBVWEsR0FBRzs7Ozs7Ozs7bUNBVlIsUUFBUTtpQ0FBRSxNQUFNOzt1Q0FDaEIsVUFBVTs7bUNBQ1YsU0FBUzs7MkRBQ1QsdUJBQXVCOzsrQ0FDdkIsZUFBZTs7O0FBTVYsU0FBRztBQUNILGlCQURBLEdBQUcsQ0FDRixVQUFVLEVBQUUsdUJBQXVCLEVBQUU7OztBQUMvQyxjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixjQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7U0FDeEQ7O21CQUpVLEdBQUc7Ozs7aUJBTUMseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTs7O0FBQzlCLGtCQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBQSxXQUFXLEVBQUk7QUFDckMsa0JBQUksV0FBVyxHQUFHLENBQUMsTUFBSyxVQUFVLENBQUMsYUFBYSxFQUFFLEVBQUUsTUFBSyx1QkFBdUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFDeEcscUJBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2hDLFVBQUEsVUFBVSxFQUFJO0FBQ2Qsb0JBQUksVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDMUIsd0JBQU0sd0RBQXdELENBQUM7aUJBQ2hFO0FBQ0Qsb0JBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLFNBQVMsRUFBRTtBQUNyRSx3QkFBTSx1REFBdUQsQ0FBQztpQkFDL0Q7QUFDRCxvQkFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksZUFBZSxFQUFFO0FBQzNFLHdCQUFNLDZEQUE2RCxDQUFDO2lCQUNyRTs7QUFFRCwyQkFBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUMxRCwyQkFBVyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMzRCwyQkFBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO2VBQ3ZDLENBQ0YsQ0FBQzthQUNILENBQUMsQ0FBQzs7QUFFSCxrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUVUO0FBQ0UsbUJBQUssRUFBRSw2QkFBNkI7QUFDcEMsc0JBQVEsRUFBRSxRQUFRO0FBQ2xCLG1CQUFLLEVBQUUsV0FBVzthQUNuQixDQUNGLENBQUMsQ0FBQzs7QUFFSCxrQkFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUM7V0FDNUI7OztBQXRDVSxXQUFHLEdBRGYsTUFBTSxDQUFDLFVBQVUsRUFBRSx1QkFBdUIsQ0FBQyxDQUMvQixHQUFHLEtBQUgsR0FBRztlQUFILEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9