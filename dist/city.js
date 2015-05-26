System.register(['aurelia-framework'], function (_export) {
  var bindable, _classCallCheck, _createDecoratedClass, City;

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      City = (function () {
        var _instanceInitializers = {};

        function City() {
          _classCallCheck(this, City);

          this.city_info = _instanceInitializers.city_info.call(this);
          this.drug_list = _instanceInitializers.drug_list.call(this);
          this.drugs_available = _instanceInitializers.drugs_available.call(this);
        }

        _createDecoratedClass(City, [{
          key: 'city_info',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'drug_list',
          decorators: [bindable],
          initializer: function () {
            return null;
          },
          enumerable: true
        }, {
          key: 'drugs_available',
          decorators: [bindable],
          initializer: function () {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        return City;
      })();

      _export('City', City);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt3REFFYSxJQUFJOzs7O21DQUZULFFBQVE7Ozs7Ozs7OztBQUVILFVBQUk7OztBQUtKLGlCQUxBLElBQUksR0FLRjtnQ0FMRixJQUFJOztlQUNMLFNBQVMseUJBQVQsU0FBUztlQUNULFNBQVMseUJBQVQsU0FBUztlQUNULGVBQWUseUJBQWYsZUFBZTtTQUd4Qjs7OEJBTlUsSUFBSTs7dUJBQ2QsUUFBUTs7bUJBQWEsSUFBSTs7Ozs7dUJBQ3pCLFFBQVE7O21CQUFhLElBQUk7Ozs7O3VCQUN6QixRQUFROzttQkFBbUIsS0FBSzs7Ozs7ZUFIdEIsSUFBSTs7O3NCQUFKLElBQUkiLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9