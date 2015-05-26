System.register([], function (_export) {
  var _classCallCheck, _createClass, FooterBar;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtxQ0FBYSxTQUFTOzs7Ozs7Ozs7OztBQUFULGVBQVM7aUJBQVQsU0FBUztnQ0FBVCxTQUFTOzs7cUJBQVQsU0FBUzs7ZUFDTCxZQUFHO0FBQ2hCLG1CQUFPLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7V0FDakM7OztlQUhVLFNBQVM7OzsyQkFBVCxTQUFTIiwiZmlsZSI6ImZvb3Rlci1iYXIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==