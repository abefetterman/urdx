import urdx from '../urdx';
import LinkComponent from './LinkComponent'
import { truncate } from '../utils';

export default class Mesh extends LinkComponent {
  geometry({ filename }) {
    return (<mesh filename={filename} />);
  }

  mass({ length = 0.1 }, density) {
    return density * Math.PI * Math.pow(length, 3) / 6.0;
  }

  inertiaTensor({ length = 0.1 }, mass) {
    return {
      ixx: truncate(mass * Math.pow(length, 2) / 10.0),
      ixy: 0,
      ixz: 0,
      iyy: truncate(mass * Math.pow(length, 2) / 10.0),
      iyz: 0,
      izz: truncate(mass * Math.pow(length, 2) / 10.0),
    }
  }
}
