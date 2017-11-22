import urdx from '../../urdx';
import UniformSolid from '../UniformSolid'
import { truncate } from '../../utils';

export default class Sphere extends UniformSolid {
  geometry({ radius }) {
    return (<sphere radius={radius} />);
  }

  mass({ radius }, density) {
    return density * 4 * Math.PI * Math.pow(radius, 3) / 3.0;
  }

  inertiaTensor({ radius }, mass) {
    return {
      ixx: truncate(2 * mass * Math.pow(radius, 2) / 5.0),
      ixy: 0,
      ixz: 0,
      iyy: truncate(2 * mass * Math.pow(radius, 2) / 5.0),
      iyz: 0,
      izz: truncate(2 * mass * Math.pow(radius, 2) / 5.0),
    }
  }
}
