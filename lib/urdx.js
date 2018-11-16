"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var builder = require('xmlbuilder');

var fs = require('fs');

var _require = require('./DOMComponents'),
    instantiateUrdxComponent = _require.instantiateUrdxComponent,
    mountChildren = _require.mountChildren;

var Urdx = {
  createElement: function createElement(type, attributes) {
    var _ref;

    // not sure best place to clean up, but XML can't handle null / undefined
    if (attributes && _typeof(attributes) === 'object') {
      Object.keys(attributes).forEach(function (key) {
        if (attributes[key] == null) delete attributes[key];
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var props = {
      attributes: attributes,
      children: args && args.length ? (_ref = []).concat.apply(_ref, args) : null
    };
    var element = {
      type: type,
      props: props
    };
    return element;
  },
  createClass: function createClass(spec) {
    function Constructor(props) {
      this.props = props;
    }

    Constructor.prototype = Object.assign(Constructor.prototype, spec);
    return Constructor;
  },
  renderRobot: function renderRobot(element, attributes) {
    var root = builder.create('robot');

    if (element && typeof element.forEach === 'function') {
      mountChildren(element, root, null);
    } else {
      var instance = instantiateUrdxComponent(element);
      instance.mountComponent(root);
    }

    if (attributes && _typeof(attributes) === 'object') {
      Object.keys(attributes).forEach(function (key) {
        root.att(key, attributes[key]);
      });
    }

    return root.end({
      pretty: true
    });
  },
  writeOutput: function writeOutput(files) {
    var urdx = this;
    if (!(files && typeof files.map === 'function')) return null;
    return files.map(function (file) {
      var renderedRobot = urdx.renderRobot(file.robot, file.args);
      return fs.writeFile("./urdf/".concat(file.filename), renderedRobot, function (error) {
        if (error) console.log('write failed!');
      });
    });
  }
};
var _default = Urdx;
exports.default = _default;