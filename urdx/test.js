import urdx, { Wrapper, Cylinder, Component } from '../lib';


const robot = (
  <Wrapper>
    <Cylinder name="base_link" length={0.6} radius={0.2} >
      <test>false</test>
    </Cylinder>
  </Wrapper>
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));
