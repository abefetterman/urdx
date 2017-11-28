import urdx from '../urdx';
import LinkComponent from './LinkComponent'
import { truncate } from '../utils';

export default class Sphere extends LinkComponent {
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
