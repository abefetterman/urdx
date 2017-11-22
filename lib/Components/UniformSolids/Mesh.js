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

var Mesh = function (_UniformSolid) {
  _inherits(Mesh, _UniformSolid);

  function Mesh() {
    _classCallCheck(this, Mesh);

    return _possibleConstructorReturn(this, (Mesh.__proto__ || Object.getPrototypeOf(Mesh)).apply(this, arguments));
  }

  _createClass(Mesh, [{
    key: 'geometry',
    value: function geometry(_ref) {
      var filename = _ref.filename;

      return _urdx2.default.createElement('mesh', { filename: filename });
    }
  }, {
    key: 'mass',
    value: function mass(_ref2, density) {
      var _ref2$length = _ref2.length,
          length = _ref2$length === undefined ? 0.1 : _ref2$length;

      return density * Math.PI * Math.pow(length, 3) / 6.0;
    }
  }, {
    key: 'inertiaTensor',
    value: function inertiaTensor(_ref3, mass) {
      var _ref3$length = _ref3.length,
          length = _ref3$length === undefined ? 0.1 : _ref3$length;

      return {
        ixx: (0, _utils.truncate)(mass * Math.pow(length, 2) / 10.0),
        ixy: 0,
        ixz: 0,
        iyy: (0, _utils.truncate)(mass * Math.pow(length, 2) / 10.0),
        iyz: 0,
        izz: (0, _utils.truncate)(mass * Math.pow(length, 2) / 10.0)
      };
    }
  }]);

  return Mesh;
}(_UniformSolid3.default);

exports.default = Mesh;