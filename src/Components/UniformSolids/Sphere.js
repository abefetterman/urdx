import urdx from '../../urdx';
import LinkComponent from '../LinkComponent';
import Origin from '../Origin';
import Material from '../Material';
import { callFirstFn } from '../../utils';

function sphereMass(r, density) {
  let rho = density || 1;
  return rho * 4 * Math.PI * Math.pow(r, 3) / 3.0;
}

function sphereInertiaTensor(r, m) {
  return {
    ixx: 2 * m * Math.pow(r, 2) / 5.0,
    ixy: 0,
    ixz: 0,
    iyy: 2 * m * Math.pow(r, 2) / 5.0,
    iyz: 0,
    izz: 2 * m * Math.pow(r, 2) / 5.0,
  }
}

export default class Sphere extends LinkComponent {
  renderVisual(props) {
    const { parent, attributes } = props;
    const { radius, origin } = attributes;
    let { material } = attributes;
    if (!material && parent && parent.material) material=parent.material;

    return (
      <visual>
        <geometry>
          <sphere radius={radius} />
        </geometry>
        <Origin origin={origin} />
        <Material material={material} />
      </visual>
    );
  }

  renderCollision(props) {
    const { parent, attributes } = props;
    const { radius, origin, mass } = attributes;

    return (
      <collision>
        <geometry>
          <sphere radius={radius} />
        </geometry>
        <Origin origin={origin} />
      </collision>
    );
  }

  renderInertial(props) {
    const { parent, attributes } = props;
    const { radius, origin } = attributes;
    let { material, mass } = attributes;
    if (!material && parent && parent.material) material = parent.material;
    if (!mass) mass = sphereMass(radius, material && material.density);
    const inertia = sphereInertiaTensor(radius, mass);

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
