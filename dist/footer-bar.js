System.register([], function (_export) {
  "use strict";

  var FooterBar;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      FooterBar = (function () {
        function FooterBar() {
          _classCallCheck(this, FooterBar);
        }

        _createClass(FooterBar, [{
          key: "CurrentYear",
          get: function () {
            return new Date().getFullYear();
          }
        }]);

        return FooterBar;
      })();

      _export("FooterBar", FooterBar);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQWEsU0FBUzs7Ozs7Ozs7O0FBQVQsZUFBUztpQkFBVCxTQUFTO2dDQUFULFNBQVM7OztxQkFBVCxTQUFTOztlQUNMLFlBQUc7QUFDaEIsbUJBQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztXQUNqQzs7O2VBSFUsU0FBUzs7OzJCQUFULFNBQVMiLCJmaWxlIjoiZm9vdGVyLWJhci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9