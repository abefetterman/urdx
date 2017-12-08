// mounts children to parentDOM, adds parent to props
function mountChildren(children, parentDOM, parentElement) {
  if (children && (typeof children.map === 'function')) {
    children.map((child) => {
      if (child && child.props) {
        child.props.parent = getDetailsForChild(parentElement);
        const childComponent = instantiateUrdxComponent(child);
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

class UrdxDOMComponent {
    constructor(element) {
        this._element = element;
    }

    mountComponent(container) {
      let domElement = this._element.type;
      const { attributes, children } = this._element.props;
      if (attributes && attributes.namespace && typeof attributes.namespace === 'string') {
        domElement=`${attributes.namespace}:${domElement}`;
        delete attributes.namespace;
      }

      this._parent = container;

      let mountedComponent;
      if (children && children.length && typeof children[0] === 'string') {
        mountedComponent = container.ele(domElement, attributes, children);
      } else {
        mountedComponent = container.ele(domElement, attributes);
        mountChildren(children, mountedComponent, this._element);
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
      let renderResult = componentInstance.render();
      if (renderResult) {
        if (typeof renderResult.map !== 'function') renderResult=[renderResult];
        return mountChildren(renderResult, container, this._element);
      }
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
