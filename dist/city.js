System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, City;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      City = (function () {
        var _instanceInitializers = {};

        function City() {
          _classCallCheck(this, City);

          _defineDecoratedPropertyDescriptor(this, 'city_info', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'drug_list', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'drugs_available', _instanceInitializers);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNpdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQUVhLElBQUk7Ozs7Ozs7Ozs7bUNBRlQsUUFBUTs7O0FBRUgsVUFBSTs7O0FBS0osaUJBTEEsSUFBSSxHQUtGO2dDQUxGLElBQUk7Ozs7Ozs7U0FNZDs7OEJBTlUsSUFBSTs7dUJBQ2QsUUFBUTs7bUJBQWEsSUFBSTs7Ozs7dUJBQ3pCLFFBQVE7O21CQUFhLElBQUk7Ozs7O3VCQUN6QixRQUFROzttQkFBbUIsS0FBSzs7Ozs7ZUFIdEIsSUFBSTs7O3NCQUFKLElBQUkiLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9