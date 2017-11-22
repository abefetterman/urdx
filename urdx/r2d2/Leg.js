import urdx, { UniformSolids, Component } from '../../lib';

const { Cylinder, Box } = UniformSolids;

import materials from './materials';

const WHEEL_OFFSET_X = 0.1333;
const WHEEL_OFFSET_Z = -0.085;
const WHEEL_DIAMETER = 0.035;

const origins = {
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

const joints = {
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
        radius={WHEEL_DIAMETER/2}
        origin={origins.wheel}
        joint={Object.assign({},{parentName: parent.name}, joint)}
        material={materials.black}
      />
    )
  }
}

export default class Leg extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { prefix, joint } = attributes;
    return (
      <Box
        name={prefix}
        dx={0.6}
        dy={0.1}
        dz={0.2}
        joint={joint}
        material={materials.white}
        origin={origins.leg}
      >
        <Box name={`${prefix}_base`} dx={0.4} dy={0.1} dz={0.1} joint={joints.legBase}>
          <Wheel name={`${prefix}_front_wheel`} joint={joints.frontWheel} />
          <Wheel name={`${prefix}_back_wheel`} joint={joints.backWheel} />
        </Box>
      </Box>
    )
  }
}
