var builder = require('xmlbuilder');

class UrdxDOMComponent {
    constructor(element) {
        this._element = element;
    }

    mountComponent(container) {
        const domElement = this._element.type;
        const child = this._element.props.children;
        const propClone = Object.assign({}, this._element.props);
        delete propClone['children'];

        this._parent = container;

        const mountedComponent = container.ele(domElement, propClone)
        if (child) {
          const childComponent = instantiateUrdxComponent(child)
          return childComponent.mountComponent(mountedComponent)
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
        const renderedElement = componentInstance.render();
        const child = instantiateUrdxComponent(renderedElement);

        return child.mountComponent(container);
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
		createElement(type, props, children) {
        const element = {
            type: type,
            element: 'hi',
            props: props || {}
        };

        if (children) {
            element.props.children = children;
        }

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
