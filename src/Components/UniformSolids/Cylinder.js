import urdx from '../../urdx';
import LinkComponent from '../LinkComponent';
import Origin from '../Origin';
import Material from '../Material';
import { callFirstFn } from '../../utils';

function cylinderMass(r, h, density) {
  let rho = density || 1;
  return rho * Math.PI * Math.Pow(r, 2) * h;
}

function cylinderInertiaTensor(r, h, m) {
  return {
    ixx: m * (3 * Math.pow(r, 2) + Math.pow(h, 2)) / 12.0,
    ixy: 0,
    ixz: 0,
    iyy: m * (3 * Math.pow(r, 2) + Math.pow(h, 2)) / 12.0,
    iyz: 0,
    izz: m * Math.pow(r, 2) / 2.0,
  }
}

export default class Cylinder extends LinkComponent {
  renderVisual(props) {
    const { parent, attributes } = props;
    const { length, radius, origin } = attributes;
    let { material } = attributes;
    if (!material && parent && parent.material) material=parent.material;

    return (
      <visual>
        <geometry>
          <cylinder length={length} radius={radius} />
        </geometry>
        <Origin origin={origin} />
        <Material material={material} />
      </visual>
    );
  }

  renderCollision(props) {
    const { parent, attributes } = props;
    const { length, radius, origin, mass } = attributes;

    return (
      <collision>
        <geometry>
          <cylinder length={length} radius={radius} />
        </geometry>
        <Origin origin={origin} />
      </collision>
    );
  }

  renderInertial(props) {
    const { parent, attributes } = props;
    const { length, radius, origin } = attributes;
    let { material, mass } = attributes;
    if (!material && parent && parent.material) material = parent.material;
    if (!mass) mass = cylinderMass(radius, length, material.density);
    const inertia = cylinderInertiaTensor(radius, length, mass);

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
        {callFirstFn([visual, this.renderVisual], this.props)}
        {callFirstFn([collision, this.renderCollision], this.props)}
        {callFirstFn([inertial, this.renderInertial], this.props)}
      </link>
    );
  }
};