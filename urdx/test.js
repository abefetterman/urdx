import urdx, { Wrapper, Cylinder, Box } from '../lib';


const robot = (
  <Wrapper>
    <Cylinder name="base" length={0.1} radius={0.1} material={{name: 'blue'}}>
      <Box name="child" dx={0.1} dy={0.1} dz={0.1} />
    </Cylinder>
  </Wrapper>
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));
