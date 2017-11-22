import urdx from '../../urdx';
import UniformSolid from '../UniformSolid'
import { truncate } from '../../utils';

export default class Cylinder extends UniformSolid {
  geometry({ radius, length }) {
    return (<cylinder length={length} radius={radius} />);
  }

  mass({ radius, length }, density) {
    return density * Math.PI * Math.pow(radius, 2) * length;
  }

  inertiaTensor({ radius, length }, mass) {
    return {
      ixx: truncate(mass * (3 * Math.pow(radius, 2) + Math.pow(length, 2)) / 12.0),
      ixy: 0,
      ixz: 0,
      iyy: truncate(mass * (3 * Math.pow(radius, 2) + Math.pow(length, 2)) / 12.0),
      iyz: 0,
      izz: truncate(mass * Math.pow(radius, 2) / 2.0),
    }
  }
}
