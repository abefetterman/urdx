'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = require('../lib/Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var urdx = require('../lib');

var MyTitle = function (_Component) {
  _inherits(MyTitle, _Component);

  function MyTitle() {
    _classCallCheck(this, MyTitle);

    return _possibleConstructorReturn(this, (MyTitle.__proto__ || Object.getPrototypeOf(MyTitle)).apply(this, arguments));
  }

  _createClass(MyTitle, [{
    key: 'render',
    value: function render() {
      var attributes = this.props.attributes;

      return [urdx.createElement(
        'h1',
        null,
        urdx.createElement('p', { message: attributes.message }),
        urdx.createElement('p', { message: 2 })
      ), urdx.createElement('h2', { message: 'thanks' })];
    }
  }]);

  return MyTitle;
}(_Component3.default);

;

var yay = urdx.createElement(MyTitle, { message: 'hi Urdx' });

console.log(urdx.renderRobot(yay, { sassy: true }));