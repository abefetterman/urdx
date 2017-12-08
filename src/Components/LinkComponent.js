import urdx from '../urdx';
import JoinedComponent from './JoinedComponent';
import Origin from './Origin';
import Material from './Material';
import { callFirstFn, truncate } from '../utils';
import constants from './constants';

export default class LinkComponent extends JoinedComponent {
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
    const { visualGeometry } = attributes;
    let { material, origin } = attributes;
    if (!material && parent && parent.material) material=parent.material;
    if (origin && origin.visual) origin = origin.visual;

    return (
      <visual>
        <geometry>
          {visualGeometry || this.geometry(attributes)}
        </geometry>
        <Origin origin={origin} />
        <Material material={material} />
      </visual>
    );
  }

  renderCollision(props) {
    const { attributes } = props;
    const { collisionGeometry } = attributes;
    let { origin } = attributes;
    if (origin && origin.collision) origin = origin.collision;

    return (
      <collision>
        <geometry>
          {collisionGeometry || this.geometry(attributes)}
        </geometry>
        <Origin origin={origin} />
      </collision>
    );
  }

  renderInertial(props) {
    const { parent, attributes } = props;
    let { material, mass, origin } = attributes;
    if (!material && parent && parent.material) material = parent.material;
    const density = (material && material.density) || constants.density.water;
    if (!mass) mass = this.mass(attributes, density);
    const inertia = this.inertiaTensor(attributes, mass);
    if (origin && origin.inertial) origin = origin.inertial;

    return (
      <inertial>
        <mass value={truncate(mass)} />
        <inertia {...inertia} />
        <Origin origin={origin} />
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
