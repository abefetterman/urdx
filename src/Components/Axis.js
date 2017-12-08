import urdx from '../urdx';
import { vecString } from '../utils';
import Component from './Component';

function normalizedXyzString(obj) {
  if (!obj) return null;
  const x = (typeof obj.x === 'number') ? obj.x : 0;
  const y = (typeof obj.y === 'number') ? obj.y : 0;
  const z = (typeof obj.z === 'number') ? obj.z : 0;
  const abs = Math.sqrt(
    Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2)
  );
  return vecString(x/abs, y/abs, z/abs);
}

export default class Axis extends Component {
  render() {
    const { axis } = this.props.attributes;
    if (!axis) return null;
    return (
      <axis xyz={normalizedXyzString(axis)} />
    )
  }
}
