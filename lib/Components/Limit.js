'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urdx = require('../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Limit = function (_Component) {
  _inherits(Limit, _Component);

  function Limit() {
    _classCallCheck(this, Limit);

    return _possibleConstructorReturn(this, (Limit.__proto__ || Object.getPrototypeOf(Limit)).apply(this, arguments));
  }

  _createClass(Limit, [{
    key: 'render',
    value: function render() {
      var limit = this.props.attributes.limit;

      if (!limit) return null;
      var _limit$effort = limit.effort,
          effort = _limit$effort === undefined ? 1000.0 : _limit$effort,
          _limit$lower = limit.lower,
          lower = _limit$lower === undefined ? 0.0 : _limit$lower,
          _limit$upper = limit.upper,
          upper = _limit$upper === undefined ? 0.0 : _limit$upper,
          _limit$velocity = limit.velocity,
          velocity = _limit$velocity === undefined ? 0.5 : _limit$velocity;

      return _urdx2.default.createElement('limit', {
        effort: effort,
        lower: lower,
        upper: upper,
        velocity: velocity
      });
    }
  }]);

  return Limit;
}(_Component3.default);

exports.default = Limit;