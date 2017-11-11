var builder = require('xmlbuilder');

class UrdxDOMComponent {
    constructor(element) {
        this._element = element;
    }

    mountComponent(container) {
        const domElement = this._element.type;
        const { attributes, children } = this._element.props;

        this._parent = container;

        const mountedComponent = container.ele(domElement, attributes)
        if (children && (typeof children.map === 'function')) {
          children.map((child) => {
            const childComponent = instantiateUrdxComponent(child)
            return childComponent.mountComponent(mountedComponent)
          })
          return mountedComponent
        }
        return mountedComponent
    }
}

class UrdxCompositeComponentWrapper {
    constructor(element) {
        this._element = element;
    }

    mountComponent(container) {
      const Component = this._element.type;
      const componentInstance = new Component(this._element.props);
      this._instance = componentInstance;
      const renderResult = componentInstance.render();
      if (renderResult && (typeof renderResult.map === 'function')) {
        renderResult.map((child) => {
          const childComponent = instantiateUrdxComponent(child);
          return childComponent.mountComponent(container);
        })
        return container;
      }

      const childComponent = instantiateUrdxComponent(renderResult);
      return childComponent.mountComponent(container);
    }
}

function instantiateUrdxComponent(element) {
    if (typeof element.type === 'string') {
        return new UrdxDOMComponent(element);
    } else if (typeof element.type === 'function') {
        return new UrdxCompositeComponentWrapper(element);
    } else {
      throw new Error('unknown element type for element: '+JSON.stringify(element))
    }
}

const TopLevelWrapper = function(props) {
    this.props = props;
};

TopLevelWrapper.prototype.render = function() {
    return this.props.attributes;
};

const Urdx = {
		createElement(type, attributes, ...args) {
      if (attributes && (typeof attributes === 'object')) {
        Object.keys(attributes).forEach((key) => {
          if (attributes[key] == null) delete attributes[key];
        })
      }

      const props = {
        attributes,
        children: (args && args.length) ? [].concat(...args) : null,
      }
      const element = {
          type: type,
          props,
      };

      return element;
    },

    createClass(spec) {
      function Constructor(props) {
          this.props = props;
      }

      Constructor.prototype = Object.assign(Constructor.prototype, spec);

      return Constructor;
    },

    render(element, container) {
      const wrapperElement =
          this.createElement(TopLevelWrapper, element);

      const componentInstance =
          new UrdxCompositeComponentWrapper(wrapperElement);

      return componentInstance.mountComponent(container);
    },

    renderXML(rootElement) {
      return this.render(rootElement, builder.create('root')).end({pretty: true})
    }
};

module.exports = Urdx;
