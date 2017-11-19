import urdx, { Wrapper, Materials, UniformSolids } from '../lib';

const { Cylinder, Box } = UniformSolids;

const materials = {
  blue: {
    name: 'blue',
    color: { r: 0, g: 0, b: 0.8, a: 1 },
  },
  black: {
    name: 'black',
    color: { r: 0, g: 0, b: 0, a: 1 },
  },
  white: {
    name: 'white',
    color: { r: 1, g: 1, b: 1, a: 1 },
  },
}

const robot = (
  <Wrapper>
    <Materials materials={materials} />
    <Cylinder name="base_link" length={0.6} radius={0.2} material={materials.blue} >
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
