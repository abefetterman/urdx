import urdx from '../../urdx';
import UniformSolid from '../UniformSolid'
import { vecString, truncate } from '../../utils';

export default class Box extends UniformSolid {
  geometry({ dx, dy, dz }) {
    return (<box size={vecString(dx, dy, dz)} />);
  }

  mass({ dx, dy, dz }, density) {
    return density * dx * dy * dz;
  }

  inertiaTensor({ dx, dy, dz }, mass) {
    return {
      ixx: truncate(mass * (Math.pow(dy, 2) + Math.pow(dz, 2)) / 12.0),
      ixy: 0,
      ixz: 0,
      iyy: truncate(mass * (Math.pow(dx, 2) + Math.pow(dz, 2)) / 12.0),
      iyz: 0,
      izz: truncate(mass * (Math.pow(dx, 2) + Math.pow(dy, 2)) / 12.0),
    }
  }
}
