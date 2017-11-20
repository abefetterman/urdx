import urdx, { Wrapper, Materials, UniformSolids } from '../../lib';

const { Cylinder } = UniformSolids;

import materials from './materials';

import Leg from './Leg';

const robot = (
  <Wrapper>
    <Materials materials={materials} />
    <Cylinder name="base_link" length={0.6} radius={0.2} material={materials.blue} >
      <Leg prefix="left_leg" />
    </Cylinder>
  </Wrapper>
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));
