import urdx, { Wrapper, Cylinder, Component } from '../../lib';

import Sensors from './Sensors';

const origins = {
  baseLink: {
    visual: {
      x: 0.001,
      z: 0.05199,
    },
    z: 0.05949,
  }
}

const joints = {
  leftWheel: {
    type: 'continuous',
    origin: {
      y: 0.23/2,
      z: 0.0250,
      roll: -90,
      degrees: true,
    }
  },
  rightWheel: {
    type: 'continuous',
    origin: {
      y: -0.23/2,
      z: 0.0250,
      roll: -90,
      degrees: true,
    }
  },
  frontCaster: {
    origin: {
      x: 0.115,
      z: 0.007,
      roll: -90,
      degrees: true,
    }
  },
  backCaster: {
    origin: {
      x: -0.135,
      z: 0.009,
      roll: -90,
      degrees: true,
    }
  }
}

class Wheel extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { name, joint } = attributes;
    return (
      <Wrapper>
        <Cylinder
          name={name}
          length={0.0206}
          radius={0.0352}
          joint={Object.assign({},{parentName: parent.name}, joint)}
          visualGeometry={(<mesh filename="package://kobuki_description/meshes/wheel.dae" />)}
        />
        <gazebo reference={name}>
          <mu1 value="10"/>
          <mu2 value="10"/>
          <kp value="100000000.0"/>
          <kd value="10000.0"/>
        </gazebo>
      </Wrapper>
    )
  }
}

class Caster extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { name, joint } = attributes;
    return (
      <Wrapper>
        <Cylinder
          name={name}
          length={0.0176}
          radius={0.017}
          joint={Object.assign({},{parentName: parent.name}, joint)}
        />
        <gazebo reference={name}>
          <mu1 value="0"/>
          <mu2 value="0"/>
          <kp value="100000000.0"/>
          <kd value="10000.0"/>
        </gazebo>
      </Wrapper>

    )
  }
}

class Controller extends Component {
  render() {
    return (
      <gazebo>
        <gazebo_ros_kobuki namespace="controller" name="kobuki_controller" plugin="libgazebo_ros_kobuki.so">
          <left_wheel_joint_name>left_wheel_joint</left_wheel_joint_name>
          <right_wheel_joint_name>right_wheel_joint</right_wheel_joint_name>
          <wheel_separation>.230</wheel_separation>
          <wheel_diameter>0.070</wheel_diameter>
          <torque>1.0</torque>
          <velocity_command_timeout>0.6</velocity_command_timeout>
          <cliff_sensor_left_name>cliff_sensor_left</cliff_sensor_left_name>
          <cliff_sensor_front_name>cliff_sensor_front</cliff_sensor_front_name>
          <cliff_sensor_right_name>cliff_sensor_right</cliff_sensor_right_name>
          <cliff_detection_threshold>0.04</cliff_detection_threshold>
          <bumper_name>bumpers</bumper_name>
          <base_collision_model_link>base_link</base_collision_model_link>
        </gazebo_ros_kobuki>
      </gazebo>
    )
  }
}

const robot = (
  <Wrapper>
    <Cylinder
      name="base_link"
      length={0.10938}
      radius={0.176}
      mass={2.4}
      origin={origins.baseLink}
      visualGeometry={(<mesh filename="package://kobuki_description/meshes/main_body.dae" />)}
    >
      <Wheel name="right_wheel" joint={joints.rightWheel} />
      <Wheel name="left_wheel" joint={joints.leftWheel} />
      <Caster name="caster_front" joint={joints.frontCaster} />
      <Caster name="caster_back" joint={joints.backCaster} />
      <Sensors />
    </Cylinder>
    <Controller />
  </Wrapper>
);

console.log(urdx.renderRobot(robot, { name: "kobuki" }));
