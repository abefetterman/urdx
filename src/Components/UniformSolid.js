import urdx from '../urdx';
import LinkComponent from './LinkComponent';
import Origin from './Origin';
import Material from './Material';
import { callFirstFn, truncate } from '../utils';
import constants from './constants';

export default class UniformSolid extends LinkComponent {
  geometry(attributes) {
    return null;
  }

  mass(attributes, density) {
    return 1;
  }

  inertialTensor(attributes, mass) {
    return {
      ixx: 1e-3,
      ixy: 0,
      ixz: 0,
      iyy: 1e-3,
      iyz: 0,
      izz: 1e-3,
    };
  }

  renderVisual(props) {
    const { parent, attributes } = props;
    const { origin } = attributes;
    let { material } = attributes;
    if (!material && parent && parent.material) material=parent.material;

    return (
      <visual>
        <geometry>
          {this.geometry(attributes)}
        </geometry>
        <Origin origin={origin} />
        <Material material={material} />
      </visual>
    );
  }

  renderCollision(props) {
    const { parent, attributes } = props;
    const { origin, collision, mesh, collisionMesh } = attributes;
    if (collision) return collision;

    return (
      <collision>
        <geometry>
          {this.geometry(attributes)}
        </geometry>
        <Origin origin={origin} />
      </collision>
    );
  }

  renderInertial(props) {
    const { parent, attributes } = props;
    let { material, mass } = attributes;
    if (!material && parent && parent.material) material = parent.material;
    const density = (material && material.density) || constants.density.water;
    if (!mass) mass = this.mass(attributes, density);
    const inertia = this.inertiaTensor(attributes, mass);

    return (
      <inertial>
        <mass value={truncate(mass)} />
        <inertia {...inertia} />
      </inertial>
    );
  }

  renderLink() {
    const { attributes } = this.props;
    if (!attributes) return null;
    const { name } = attributes;
    return (
      <link name={name}>
        {this.renderVisual(this.props)}
        {this.renderCollision(this.props)}
        {this.renderInertial(this.props)}
      </link>
    );
  }
};
