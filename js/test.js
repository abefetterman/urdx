'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component = require('../lib/Component');

var _Component2 = _interopRequireDefault(_Component);

var _LinkComponent2 = require('../lib/LinkComponent');

var _LinkComponent3 = _interopRequireDefault(_LinkComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var urdx = require('../lib');

var Cylinder = function (_LinkComponent) {
  _inherits(Cylinder, _LinkComponent);

  function Cylinder() {
    _classCallCheck(this, Cylinder);

    return _possibleConstructorReturn(this, (Cylinder.__proto__ || Object.getPrototypeOf(Cylinder)).apply(this, arguments));
  }

  _createClass(Cylinder, [{
    key: 'renderLink',
    value: function renderLink() {
      var attributes = this.props.attributes;
      var length = attributes.length,
          radius = attributes.radius,
          name = attributes.name;

      return urdx.createElement(
        'link',
        { name: name },
        urdx.createElement(
          'visual',
          null,
          urdx.createElement(
            'geometry',
            null,
            urdx.createElement('cylinder', { length: length, radius: radius })
          )
        )
      );
    }
  }]);

  return Cylinder;
}(_LinkComponent3.default);

;

var robot = urdx.createElement(
  Cylinder,
  { name: 'base_link', length: 0.6, radius: 0.2 },
  urdx.createElement(Cylinder, { name: 'new_link', length: 0.4, radius: 0.1 })
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));