'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _urdx = require('../../urdx');

var _urdx2 = _interopRequireDefault(_urdx);

var _UniformSolid2 = require('../UniformSolid');

var _UniformSolid3 = _interopRequireDefault(_UniformSolid2);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cylinder = function (_UniformSolid) {
  _inherits(Cylinder, _UniformSolid);

  function Cylinder() {
    _classCallCheck(this, Cylinder);

    return _possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).apply(this, arguments));
  }

  _createClass(Cylinder, [{
    key: 'geometry',
    value: function geometry(_ref) {
      var radius = _ref.radius,
          length = _ref.length;

      return _urdx2.default.createElement('cylinder', { length: length, radius: radius });
    }
  }, {
    key: 'mass',
    value: function mass(_ref2, density) {
      var radius = _ref2.radius,
          length = _ref2.length;

      return density * Math.PI * Math.pow(radius, 2) * length;
    }
  }, {
    key: 'inertiaTensor',
    value: function inertiaTensor(_ref3, mass) {
      var radius = _ref3.radius,
          length = _ref3.length;

      return {
        ixx: (0, _utils.truncate)(mass * (3 * Math.pow(radius, 2) + Math.pow(length, 2)) / 12.0),
        ixy: 0,
        ixz: 0,
        iyy: (0, _utils.truncate)(mass * (3 * Math.pow(radius, 2) + Math.pow(length, 2)) / 12.0),
        iyz: 0,
        izz: (0, _utils.truncate)(mass * Math.pow(radius, 2) / 2.0)
      };
    }
  }]);

  return Cylinder;
}(_UniformSolid3.default);

exports.default = Cylinder;