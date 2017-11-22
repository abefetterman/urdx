import urdx, { UniformSolids, Component } from '../../lib';
const { Mesh, Cylinder } = UniformSolids;

const origins = {
  pole: {
    x: 0.1,
    pitch: 90,
    degrees: true,
  },
  finger: {
    roll: -180,
    degrees: true,
  },
  tip: {
    x: 0.9137,
    y: 0.00495,
    roll: -180,
    degrees: true,
  }
};

const joints = {
  leftGripper: {
    type: 'revolute',
    axis: {
      z: 1,
    },
    limit: {
      upper: 0.548,
    },
    origin: {
      x: 0.2,
      y: 0.02,
    }
  },
  rightGripper: {
    type: 'revolute',
    axis: {
      z: -1,
    },
    limit: {
      upper: 0.548,
    },
    origin: {
      x: 0.2,
      y: -0.02,
    }
  },
}

class GripperSide extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { prefix, joint } = attributes;
    return (
      <Mesh
        name={prefix}
        filename="l_finger.stl"
        origin={origins.finger}
        length={0.02}
        joint={joint}
      >
        <Mesh
          name={`${prefix}_tip`}
          filename="l_finger_tip.stl"
          length={0.01}
          origin={origins.tip}
        />
      </Mesh>
    )
  }
}

export default class Gripper extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { prefix, joint } = attributes;
    return (
      <Cylinder
        name={`${prefix}_pole`}
        length={0.2}
        radius={0.01}
        joint={joint}
        material={null}
        origin={origins.pole}
      >
        <GripperSide
          prefix={`${prefix}_left`}
          joint={joints.leftGripper}
        />
        <GripperSide
          prefix={`${prefix}_right`}
          joint={joints.rightGripper}
        />
      </Cylinder>
    )
  }
}
