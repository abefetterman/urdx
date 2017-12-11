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
    return 1e-3; // 1 gram
  }

  inertiaTensor(attributes, mass) {
    // corresponds to 1g sphere of diameter 1 cm
    return {
      ixx: 1e-8,
      ixy: 0,
      ixz: 0,
      iyy: 1e-8,
      iyz: 0,
      izz: 1e-8,
    };
  }

  renderVisual(props) {
    const { parent, attributes } = props;
    const { visualGeometry } = attributes;
    let { material, origin } = attributes;
    if (!material && parent && parent.material) material=parent.material;
    if (origin && origin.visual) origin = origin.visual;
    const geometry = visualGeometry || this.geometry(attributes);
    if (!geometry) return null;

    return (
      <visual>
        <geometry>
          {geometry}
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
    const geometry = collisionGeometry || this.geometry(attributes);
    if (!geometry) return null;

    return (
      <collision>
        <geometry>
          {geometry}
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
      <link name={`${name}_link`}>
        {this.renderVisual(this.props)}
        {this.renderCollision(this.props)}
        {this.renderInertial(this.props)}
      </link>
    );
  }
};
