System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var bindable, Player;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      Player = (function () {
        var _instanceInitializers = {};

        function Player() {
          _classCallCheck(this, Player);

          _defineDecoratedPropertyDescriptor(this, "player_info", _instanceInitializers);

          this.modalTitle = "Pay Debt";
          this.modalView = "modalBodies/payDebt";
          this.showing = false;
          this.that = this;
        }

        _createDecoratedClass(Player, [{
          key: "player_info",
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: "showDebtDialog",
          value: function showDebtDialog() {
            this.showing = true;
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.showing = false;
          }
        }], null, _instanceInitializers);

        return Player;
      })();

      _export("Player", Player);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRWEsTUFBTTs7Ozs7Ozs7OzttQ0FGWCxRQUFROzs7QUFFSCxZQUFNOzs7aUJBQU4sTUFBTTtnQ0FBTixNQUFNOzs7O2VBRWpCLFVBQVUsR0FBRyxVQUFVO2VBQ3ZCLFNBQVMsR0FBRyxxQkFBcUI7ZUFDakMsT0FBTyxHQUFHLEtBQUs7ZUFDZixJQUFJLEdBQUcsSUFBSTs7OzhCQUxBLE1BQU07O3VCQUNoQixRQUFROzttQkFBZSxJQUFJOzs7OztpQkFNZCwwQkFBRztBQUNmLGdCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztXQUNyQjs7O2lCQUNLLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1dBQ3RCOzs7ZUFaVSxNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJwbGF5ZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==