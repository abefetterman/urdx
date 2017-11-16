import urdx from '../urdx';
import { vecString } from '../utils';
import Component from './Component';

function xyzString(obj) {
  if (!obj) return null;
  return vecString(obj.x, obj.y, obj.z);
}

const degreesToRadians = Math.PI/180.0;

function rpyString(obj) {
  if (!obj) return null;
  if (obj.degrees) {
    return vecString(obj.roll * degreesToRadians, obj.pitch * degreesToRadians, obj.yaw * degreesToRadians)
  }
  return vecString(obj.roll, obj.pitch, obj.yaw)
}

export default class Origin extends Component {
  render() {
    const { origin } = this.props.attributes;
    if (!origin) return null;
    return (
      <origin xyz={xyzString(origin)} rpy={rpyString(origin)} />
    )
  }
}
