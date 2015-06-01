System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, Day;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      Day = (function () {
        var _instanceInitializers = {};

        function Day() {
          _classCallCheck(this, Day);

          _defineDecoratedPropertyDescriptor(this, 'current_day', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'max_days', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'is_last_day', _instanceInitializers);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Z0JBRWEsR0FBRzs7Ozs7Ozs7OzttQ0FGUixRQUFROzs7QUFFSCxTQUFHOzs7aUJBQUgsR0FBRztnQ0FBSCxHQUFHOzs7Ozs7Ozs7OEJBQUgsR0FBRzs7dUJBQ2IsUUFBUTs7bUJBQWUsQ0FBQzs7Ozs7dUJBQ3hCLFFBQVE7O21CQUFZLENBQUM7Ozs7O3VCQUNyQixRQUFROzttQkFBZSxLQUFLOzs7OztlQUhsQixHQUFHOzs7cUJBQUgsR0FBRyIsImZpbGUiOiJkYXkuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==