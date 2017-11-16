import urdx from '../../urdx';
import LinkComponent from '../LinkComponent';
import Origin from '../Origin';
import Material from '../Material';
import { callFirstFn, vecString } from '../../utils';

function boxMass(dx, dy, dz, density) {
  const rho = density || 1;
  return rho * dx * dy * dz;
}

function boxInertiaTensor(dx, dy, dz, m) {
  return {
    ixx: m * (Math.pow(dy, 2) + Math.pow(dz, 2)) / 12.0,
    ixy: 0,
    ixz: 0,
    iyy: m * (Math.pow(dx, 2) + Math.pow(dz, 2)) / 12.0,
    iyz: 0,
    izz: m * (Math.pow(dx, 2) + Math.pow(dy, 2)) / 12.0,
  }
}

export default class Box extends LinkComponent {
  renderVisual(props) {
    const { parent, attributes } = props;
    const { dx, dy, dz, origin } = attributes;
    let { material } = attributes;
    if (!material && parent && parent.material) material=parent.material;

    return (
      <visual>
        <geometry>
          <box size={vecString(dx, dy, dz)} />
        </geometry>
        <Origin origin={origin} />
        <Material material={material} />
      </visual>
    );
  }

  renderCollision(props) {
    const { parent, attributes } = props;
    const { dx, dy, dz, origin, mass } = attributes;

    return (
      <collision>
        <geometry>
          <box size={vecString(dx, dy, dz)} />
        </geometry>
        <Origin origin={origin} />
      </collision>
    );
  }

  renderInertial(props) {
    const { parent, attributes } = props;
    const { dx, dy, dz, origin } = attributes;
    let { material, mass } = attributes;
    if (!material && parent && parent.material) material = parent.material;
    if (!mass) mass = boxMass(dx, dy, dz, material && material.density);
    const inertia = boxInertiaTensor(dx, dy, dz, mass);

    return (
      <inertial>
        <mass value={mass} />
        <inertia {...inertia} />
      </inertial>
    );
  }

  renderLink() {
    const { attributes } = this.props;
    if (!attributes) return null;
    const { name, visual, collision, inertial } = attributes;
    return (
      <link name={name}>
        {this.renderVisual(this.props)}
        {this.renderCollision(this.props)}
        {this.renderInertial(this.props)}
      </link>
    );
  }
};
