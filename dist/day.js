System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, Day;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      Day = (function () {
        var _instanceInitializers = {};

        function Day() {
          _classCallCheck(this, Day);

          this.current_day = _instanceInitializers.current_day.call(this);
          this.max_days = _instanceInitializers.max_days.call(this);
          this.is_last_day = _instanceInitializers.is_last_day.call(this);
        }

        _createDecoratedClass(Day, [{
          key: 'current_day',
          decorators: [bindable],
          initializer: function () {
            return 0;
          },
          enumerable: true
        }, {
          key: 'max_days',
          decorators: [bindable],
          initializer: function () {
            return 0;
          },
          enumerable: true
        }, {
          key: 'is_last_day',
          decorators: [bindable],
          initializer: function () {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        return Day;
      })();

      _export('Day', Day);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dEQUVhLEdBQUc7Ozs7bUNBRlIsUUFBUTs7Ozs7Ozs7O0FBRUgsU0FBRzs7O2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7ZUFDSixXQUFXLHlCQUFYLFdBQVc7ZUFDWCxRQUFRLHlCQUFSLFFBQVE7ZUFDUixXQUFXLHlCQUFYLFdBQVc7Ozs4QkFIVixHQUFHOzt1QkFDYixRQUFROzttQkFBZSxDQUFDOzs7Ozt1QkFDeEIsUUFBUTs7bUJBQVksQ0FBQzs7Ozs7dUJBQ3JCLFFBQVE7O21CQUFlLEtBQUs7Ozs7O2VBSGxCLEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImRheS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9