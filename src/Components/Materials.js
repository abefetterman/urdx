import urdx from '../urdx';
import Component from './Component';
import Material from './Material';

export default class Materials extends Component {
  render() {
    const { attributes } = this.props;
    // return null if no materials attribute
    if (!(attributes && attributes.materials)) return null;
    const { materials } = attributes;
    const keys = Object.keys(materials);
    // return null if no keys
    if (!(keys && keys.length)) return null;
    return keys.map((key) => (<Material material={materials[key]} renderFull />))
  }
}
