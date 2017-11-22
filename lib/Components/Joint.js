'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urdx = require('../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Origin = require('./Origin');

var _Origin2 = _interopRequireDefault(_Origin);

var _Axis = require('./Axis');

var _Axis2 = _interopRequireDefault(_Axis);

var _Limit = require('./Limit');

var _Limit2 = _interopRequireDefault(_Limit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Joint = function (_Component) {
  _inherits(Joint, _Component);

  function Joint() {
    _classCallCheck(this, Joint);

    return _possibleConstructorReturn(this, (Joint.__proto__ || Object.getPrototypeOf(Joint)).apply(this, arguments));
  }

  _createClass(Joint, [{
    key: 'render',
    value: function render() {
      var attributes = this.props.attributes;
      var childName = attributes.childName,
          parentName = attributes.parentName,
          origin = attributes.origin,
          type = attributes.type,
          axis = attributes.axis,
          limit = attributes.limit;

      if (!(childName && parentName)) return null;
      return _urdx2.default.createElement(
        'joint',
        { name: childName + '_joint', type: type || 'fixed' },
        _urdx2.default.createElement('parent', { link: parentName }),
        _urdx2.default.createElement('child', { link: childName }),
        _urdx2.default.createElement(_Origin2.default, { origin: origin }),
        _urdx2.default.createElement(_Axis2.default, { axis: axis }),
        _urdx2.default.createElement(_Limit2.default, { limit: limit })
      );
    }
  }]);

  return Joint;
}(_Component3.default);

exports.default = Joint;