System.register([], function (_export) {
  "use strict";

  var SurpriseEvents;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      SurpriseEvents = (function () {
        function SurpriseEvents() {
          _classCallCheck(this, SurpriseEvents);
        }

        _createClass(SurpriseEvents, [{
          key: "activate",
          value: function activate(model) {
            this.results = model.Results;
            this.game = model.Game;
          }
        }, {
          key: "continue",
          value: function _continue() {
            this.game.surpriseTriggered = false;
          }
        }]);

        return SurpriseEvents;
      })();

      _export("SurpriseEvents", SurpriseEvents);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsQm9kaWVzL3N1cnByaXNlRXZlbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFhLGNBQWM7Ozs7Ozs7OztBQUFkLG9CQUFjO2lCQUFkLGNBQWM7Z0NBQWQsY0FBYzs7O3FCQUFkLGNBQWM7O2lCQUNqQixrQkFBQyxLQUFLLEVBQUU7QUFDZCxnQkFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzdCLGdCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7V0FDeEI7OztpQkFFTyxxQkFBRztBQUNULGdCQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztXQUNyQzs7O2VBUlUsY0FBYzs7O2dDQUFkLGNBQWMiLCJmaWxlIjoibW9kYWxCb2RpZXMvc3VycHJpc2VFdmVudHMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==