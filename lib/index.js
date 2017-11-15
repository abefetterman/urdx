'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var builder = require('xmlbuilder');

var _require = require('./DOMComponents'),
    instantiateUrdxComponent = _require.instantiateUrdxComponent,
    mountChildren = _require.mountChildren;

var Urdx = {
  createElement: function createElement(type, attributes) {
    var _ref;

    // not sure best place to clean up, but XML can't handle null / undefined
    if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
      Object.keys(attributes).forEach(function (key) {
        if (attributes[key] == null) delete attributes[key];
      });
    }

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    var props = {
      attributes: attributes,
      children: args && args.length ? (_ref = []).concat.apply(_ref, _toConsumableArray(args)) : null
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
      renderChildren(element, root, null);
    } else {
      var instance = instantiateUrdxComponent(element);
      instance.mountComponent(root);
    }
    if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
      Object.keys(attributes).forEach(function (key) {
        root.att(key, attributes[key]);
      });
    }
    return root.end({ pretty: true });
  }
};

module.exports = Urdx;