'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urdx = require('../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _utils = require('../utils');

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function rgbaString(obj) {
  if (!obj) return null;
  return (0, _utils.vecString)(obj.r, obj.g, obj.b, obj.a);
}

var Material = function (_Component) {
  _inherits(Material, _Component);

  function Material() {
    _classCallCheck(this, Material);

    return _possibleConstructorReturn(this, (Material.__proto__ || Object.getPrototypeOf(Material)).apply(this, arguments));
  }

  _createClass(Material, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          attributes = _props.attributes,
          parent = _props.parent;
      var material = attributes.material,
          renderFull = attributes.renderFull;

      if (!material) return null;
      if (material.name && !renderFull) {
        return _urdx2.default.createElement('material', { name: material.name });
      }
      return _urdx2.default.createElement(
        'material',
        { name: material.name },
        material.color ? _urdx2.default.createElement('color', { rgba: rgbaString(material.color) }) : null,
        material.texture ? _urdx2.default.createElement('texture', { filename: material.texture }) : null
      );
    }
  }]);

  return Material;
}(_Component3.default);

exports.default = Material;