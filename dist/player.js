System.register(["aurelia-framework"], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, Player;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === "function") { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError("The decorator for method " + descriptor.key + " is of the invalid type " + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      Player = (function () {
        var _instanceInitializers = {};

        function Player() {
          _classCallCheck(this, Player);

          this.player_info = _instanceInitializers.player_info.call(this);
          this.modalTitle = "Pay Debt";
          this.modalView = "modalBodies/payDebt";
        }

        _createDecoratedClass(Player, [{
          key: "player_info",
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: "modalTitle",
          value: undefined,
          enumerable: true
        }, {
          key: "modalView",
          value: undefined,
          enumerable: true
        }, {
          key: "cancel",
          value: function cancel() {}
        }], null, _instanceInitializers);

        return Player;
      })();

      _export("Player", Player);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dEQUVhLE1BQU07Ozs7bUNBRlgsUUFBUTs7Ozs7Ozs7O0FBRUgsWUFBTTs7O2lCQUFOLE1BQU07Z0NBQU4sTUFBTTs7ZUFDUCxXQUFXLHlCQUFYLFdBQVc7ZUFDckIsVUFBVSxHQUFHLFVBQVU7ZUFDdkIsU0FBUyxHQUFHLHFCQUFxQjs7OzhCQUh0QixNQUFNOzt1QkFDaEIsUUFBUTs7bUJBQWUsSUFBSTs7Ozs7Ozs7Ozs7OztpQkFJdEIsa0JBQUcsRUFFUjs7O2VBUFUsTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoicGxheWVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=