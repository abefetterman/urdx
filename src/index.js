var builder = require('xmlbuilder');

class UrdxDOMComponent {
    constructor(element) {
        this._element = element;
    }

    mountComponent(container) {
        const domElement = this._element.type;
        const children = this._element.props.children;
        const propClone = Object.assign({}, this._element.props);
        delete propClone['children'];

        this._parent = container;

        const mountedComponent = container.ele(domElement, propClone)
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
    return this.props;
};

const Urdx = {
		createElement(type, props, ...args) {
      const element = {
          type: type,
          element: 'hi',
          props: props || {}
      };

      element.props.children = (args && args.length) ? [].concat(...args) : null;


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
