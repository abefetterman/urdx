"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lib = require("../lib");

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cylinder = function (_LinkComponent) {
  _inherits(Cylinder, _LinkComponent);

  function Cylinder() {
    _classCallCheck(this, Cylinder);

    return _possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).apply(this, arguments));
  }

  _createClass(Cylinder, [{
    key: "renderLink",
    value: function renderLink() {
      var attributes = this.props.attributes;
      var length = attributes.length,
          radius = attributes.radius,
          name = attributes.name,
          origin = attributes.origin;

      return _lib2.default.createElement(
        "link",
        { name: name },
        _lib2.default.createElement(
          "visual",
          null,
          _lib2.default.createElement(
            "geometry",
            null,
            _lib2.default.createElement("cylinder", { length: length, radius: radius }),
            _lib2.default.createElement(_lib.Origin, { origin: origin })
          )
        )
      );
    }
  }]);

  return Cylinder;
}(_lib.LinkComponent);

;

var Box = function (_LinkComponent2) {
  _inherits(Box, _LinkComponent2);

  function Box() {
    _classCallCheck(this, Box);

    return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
  }

  _createClass(Box, [{
    key: "renderLink",
    value: function renderLink() {
      var attributes = this.props.attributes;
      var size = attributes.size,
          name = attributes.name,
          origin = attributes.origin;

      return _lib2.default.createElement(
        "link",
        { name: name },
        _lib2.default.createElement(
          "visual",
          null,
          _lib2.default.createElement(_lib.Origin, { origin: origin }),
          _lib2.default.createElement(
            "geometry",
            null,
            _lib2.default.createElement("box", { size: size })
          )
        )
      );
    }
  }]);

  return Box;
}(_lib.LinkComponent);

var robot = _lib2.default.createElement(
  _lib.Wrapper,
  null,
  _lib2.default.createElement(_lib.Materials, null),
  _lib2.default.createElement(
    Cylinder,
    { name: "base_link", length: 0.6, radius: 0.2 },
    _lib2.default.createElement(Box, {
      name: "new_link",
      size: "0.6 0.1 0.2",
      joint: { type: 'fixed', origin: { x: 0, yaw: 30, z: 0, degrees: true } }
    })
  )
);

console.log(_lib2.default.renderRobot(robot, { name: "myfirst" }));