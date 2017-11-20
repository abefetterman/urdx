'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// mounts children to parentDOM, adds parent to props
function mountChildren(children, parentDOM, parentElement) {
  if (children && typeof children.map === 'function') {
    children.map(function (child) {
      if (child) {
        child.props.parent = getDetailsForChild(parentElement);
        var childComponent = instantiateUrdxComponent(child);
        return childComponent.mountComponent(parentDOM);
      }
    });
  }
  return parentDOM;
}

function getDetailsForChild(element) {
  if (!(element && element.props)) return null;
  return Object.assign({}, element.props.parent, element.props.attributes);
}

var UrdxDOMComponent = function () {
  function UrdxDOMComponent(element) {
    _classCallCheck(this, UrdxDOMComponent);

    this._element = element;
  }

  _createClass(UrdxDOMComponent, [{
    key: 'mountComponent',
    value: function mountComponent(container) {
      var domElement = this._element.type;
      var _element$props = this._element.props,
          attributes = _element$props.attributes,
          children = _element$props.children;


      this._parent = container;

      var mountedComponent = container.ele(domElement, attributes);

      mountChildren(children, mountedComponent, this._element);

      return mountedComponent;
    }
  }]);

  return UrdxDOMComponent;
}();

var UrdxCompositeComponentWrapper = function () {
  function UrdxCompositeComponentWrapper(element) {
    _classCallCheck(this, UrdxCompositeComponentWrapper);

    this._element = element;
  }

  _createClass(UrdxCompositeComponentWrapper, [{
    key: 'mountComponent',
    value: function mountComponent(container) {
      var Component = this._element.type;
      var componentInstance = new Component(this._element.props);
      this._instance = componentInstance;
      var renderResult = componentInstance.render();
      if (renderResult) {
        if (typeof renderResult.map !== 'function') renderResult = [renderResult];
        return mountChildren(renderResult, container, this._element);
      }
      return container;
    }
  }]);

  return UrdxCompositeComponentWrapper;
}();

function instantiateUrdxComponent(element) {
  if (typeof element.type === 'string') {
    return new UrdxDOMComponent(element);
  } else if (typeof element.type === 'function') {
    return new UrdxCompositeComponentWrapper(element);
  } else {
    throw new Error('unknown element type for element: ' + JSON.stringify(element));
  }
}

module.exports = {
  instantiateUrdxComponent: instantiateUrdxComponent,
  mountChildren: mountChildren
};