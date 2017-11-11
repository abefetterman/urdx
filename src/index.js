var builder = require('xmlbuilder');

var { instantiateUrdxComponent, mountChildren } = require('./Components');

const Urdx = {
		createElement(type, attributes, ...args) {
      // not sure best place to clean up, but XML can't handle null / undefined
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

    createClass(spec, meta) {
      function Constructor(props) {
          this.props = props;
      }

      Constructor.prototype = Object.assign(Constructor.prototype, spec);

      if (meta) Constructor.meta = meta;

      return Constructor;
    },

    renderRobot(element, attributes) {
      let root = builder.create('robot');
      if (element && (typeof element.forEach === 'function')) {
        renderChildren(element, root, null);
      } else {
        const instance = instantiateUrdxComponent(element);
        instance.mountComponent(root);
      }
      if (attributes && (typeof attributes === 'object')) {
        Object.keys(attributes).forEach((key) => {
          root.att(key, attributes[key]);
        })
      }
      return root.end({pretty: true})
    }
};

module.exports = Urdx;
