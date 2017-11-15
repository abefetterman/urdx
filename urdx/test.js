var urdx = require('../lib');
import LinkComponent from '../lib/LinkComponent';

function xyzString(obj) {
  if (!obj) return null;
  return `${obj.x || '0'} ${obj.y || '0'} ${obj.z || '0'}`
}

function rpyString(obj) {
  if (!obj) return null;
  return `${obj.r || '0'} ${obj.p || '0'} ${obj.y || '0'}`
}

class Cylinder extends LinkComponent {
  renderLink() {
    const { attributes } = this.props;
    const { length, radius, name } = attributes;
    return (
      <link name={name}>
        <visual>
          <geometry>
            <cylinder length={length} radius={radius} />
          </geometry>
        </visual>
      </link>
    );
  }
};

class Box extends LinkComponent {
  renderLink() {
    const { attributes } = this.props;
    const { size, name } = attributes;
    return (
      <link name={name}>
        <visual>
          <geometry>
            <box size={size} />
          </geometry>
        </visual>
      </link>
    );
  }

  renderJoint() {
    console.log('calling renderJoint');
    const { parent, attributes } = this.props;
    const { joint, name } = attributes;
    if (!(parent || joint)) return null;
    const { origin, type } = joint;
    const { name: parentName } = parent;
    return (
      <joint name={name + '_joint'} type={type}>
        <parent link={parentName} />
        <child link={name} />
      </joint>
    )
  }
}

const robot = (
  <Cylinder name="base_link" length={0.6} radius={0.2} >
    <Box
      name="new_link"
      size="0.6 0.1 0.2"
      joint={{type:'fixed', origin:'0 0 0'}}
    />
  </Cylinder>
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));
