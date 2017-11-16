import urdx, { Wrapper, Materials, UniformSolids } from '../lib';

const { Cylinder, Box } = UniformSolids;

const robot = (
  <Wrapper>
    <Materials />
    <Cylinder name="base_link" length={0.6} radius={0.2} >
      <Box
        name="new_link"
        dx={0.6}
        dy={0.1}
        dz={0.2}
        joint={{type:'fixed', origin:{x: 0, yaw: 30, z: 0, degrees: true}}}
      />
    </Cylinder>
  </Wrapper>
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));
