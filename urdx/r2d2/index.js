import urdx, { Wrapper, Materials, Cylinder } from '../../lib';

import materials from './materials';

import Leg from './Leg';
import Gripper from './Gripper';

const ROBOT_LEG_Y = 0.22;
const ROBOT_LEG_Z = 0.25;

const joints={
  leftLeg: {
    origin: {
      y: ROBOT_LEG_Y,
      z: ROBOT_LEG_Z,
    }
  },
  rightLeg: {
    origin: {
      y: -ROBOT_LEG_Y,
      z: ROBOT_LEG_Z,
    }
  },
  gripper: {
    type: 'prismatic',
    axis: {
      x: 1,
    },
    limit: {
      lower: -0.38,
    },
    origin: {
      y: 0.19,
      z: 0.2,
      yaw: 90,
      degrees: true,
    }
  }
}

const robot = (
  <Wrapper>
    <Materials materials={materials} />
    <Cylinder name="base" length={0.6} radius={0.2} material={materials.blue} >
      <Leg prefix="left_leg" joint={joints.leftLeg} />
      <Leg prefix="right_leg" joint={joints.rightLeg} />
      <Gripper prefix="gripper" joint={joints.gripper} />
    </Cylinder>
  </Wrapper>
);

export default robot;

// console.log(urdx.renderRobot(robot, { name: "r2d2" }));
