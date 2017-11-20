import urdx, { Wrapper, Materials, UniformSolids, Component } from '../lib';

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

const WHEEL_OFFSET_X = 0.1333;
const WHEEL_OFFSET_Z = -0.085;

const legOrigins = {
  leg: {
    z: -3,
    pitch: 90,
    degrees: true
  },
  wheel: {
    roll: 90,
    degrees: true,
  },
}

const legJoints = {
  legBase: {
    origin: {
      z: -0.6,
    },
  },
  frontWheel: {
    origin: {
      x: WHEEL_OFFSET_X,
      z: WHEEL_OFFSET_Z,
    }
  },
  backWheel: {
    origin: {
      x: -WHEEL_OFFSET_X,
      z: WHEEL_OFFSET_Z,
    }
  }
}

class Wheel extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { name, joint } = attributes;
    return (
      <Cylinder
        name={name}
        length={0.1}
        radius={0.035}
        origin={legOrigins.wheel}
        joint={Object.assign({},{parentName: parent.name}, joint)}
        material={materials.black}
      />
    )
  }
}

class Leg extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { prefix, origin } = attributes;
    return [(
      <Box
        name={prefix}
        dx={0.6}
        dy={0.1}
        dz={0.2}
        joint={{parentName: parent.name, origin}}
        material={materials.white}
      >
        <Box name={`${prefix}_base`} dx={0.4} dy={0.1} dz={0.1} joint={legJoints.legBase}>
          <Wheel name={`${prefix}_front_wheel`} joint={legJoints.frontWheel} />
          <Wheel name={`${prefix}_back_wheel`} joint={legJoints.backWheel} />
        </Box>
      </Box>
    )]
  }
}

const robot = (
  <Wrapper>
    <Materials materials={materials} />
    <Cylinder name="base_link" length={0.6} radius={0.2} material={materials.blue} >
      <Leg prefix="left_leg" />
    </Cylinder>
  </Wrapper>
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));
