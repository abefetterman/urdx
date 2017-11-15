// mounts children to parentDOM, adds parent to props
function mountChildren(children, parentDOM, parentElement) {
  if (children && (typeof children.map === 'function')) {
    children.map((child) => {
      if (child) {
        child.props.parent = getDetailsForChild(parentElement);
        const childComponent = instantiateUrdxComponent(child);
        return childComponent.mountComponent(parentDOM);
      } else {
        console.log('no child: '+JSON.stringify(child));
      }
    });
  }
  return parentDOM;
}

function getDetailsForChild(element) {
  return Object.assign({}, element.props.parent, element.props.attributes);
}

class UrdxDOMComponent {
    constructor(element) {
        this._element = element;
    }

    mountComponent(container) {
      const domElement = this._element.type;
      const { attributes, children } = this._element.props;

      this._parent = container;

      const mountedComponent = container.ele(domElement, attributes);

      mountChildren(children, mountedComponent, this._element);

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
        return mountChildren(renderResult, container, this._element);
      }
      if (renderResult && renderResult.type) {
        const childComponent = instantiateUrdxComponent(renderResult);
        return childComponent.mountComponent(container);
      }
      console.log('No result: '+JSON.stringify(renderResult));
      return container;
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

module.exports = {
  instantiateUrdxComponent,
  mountChildren,
}
