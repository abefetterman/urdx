var urdx = require('../lib');
import Component from '../lib/Component';
import LinkComponent from '../lib/LinkComponent';


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

const robot = (
  <Cylinder name="base_link" length={0.6} radius={0.2} >
    <Cylinder name="new_link" length={0.4} radius={0.1} />
  </Cylinder>
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));
