import urdx, { Wrapper, Component, LinkComponent } from '../../lib';

// LinkComponent provides inertial data and joint by default
class Gyro extends LinkComponent {
  renderOther() {
    const { attributes } = this.props;
    if (!attributes) return null;
    const { name } = attributes;
    return (
      <gazebo>
        <gazebo_ros_imu namespace="controller" name="imu_controller" plugin="libgazebo_ros_imu.so">
          <alwaysOn>true</alwaysOn>
          <updateRate>50</updateRate>
          <bodyName>{`${name}_link`}</bodyName>
          <topicName>/mobile_base/sensors/imu_data</topicName>
          <gaussianNoise>{0.0017*0.0017}</gaussianNoise>
          <xyzOffsets>0 0 0</xyzOffsets>
          <rpyOffsets>0 0 0</rpyOffsets>
          <position namespace="interface" name={`${name}_link`} />
        </gazebo_ros_imu>
      </gazebo>
    )
  }
}

class CliffSensor extends LinkComponent {
  renderOther() {
    const { attributes } = this.props;
    if (!attributes) return null;
    const { name } = attributes;
    return (
      <gazebo reference={`${name}_link`}>
        <ray namespace="sensor" name={name}>
          <alwaysOn>true</alwaysOn>
          <updateRate>50</updateRate>
          <rayCount>50</rayCount>
          <rangeCount>1</rangeCount>
          <resRange>1.0</resRange>
          <minAngle>-2.5</minAngle>
          <maxAngle>2.5</maxAngle>
          <minRange>0.01</minRange>
          <maxRange>0.15</maxRange>
          <displayRays>true</displayRays>
        </ray>
      </gazebo>
    )
  }
}

class Bumpers extends Component {
  render() {
    const { attributes, parent } = this.props;
    if (!(attributes && parent)) return null;
    const { name } = attributes;
    const parentName = parent.name;
    return (
      <gazebo reference={parentName}>
        <contact namespace="sensor" name={name}>
          <geom>base_footprint_geom_base_link</geom>
          <topic>bumpers</topic>
          <alwaysOn>true</alwaysOn>
          <updateRate>50</updateRate>
        </contact>
      </gazebo>
    )
  }
}

const joints = {
  gyro: {
    axis: {
      y: 1,
    },
    origin: {
      x: 0.056,
      y: 0.062,
      z: 0.0202,
    },
  },
  cliffLeft: {
    origin: {
      x: 0.08734,
      y: 0.13601,
      z: 0.0214,
      pitch: 90,
      degrees: true,
    }
  },
  cliffRight: {
    origin: {
      x: 0.085,
      y: -0.13601,
      z: 0.0214,
      pitch: 90,
      degrees: true,
    }
  },
  cliffFront: {
    origin: {
      x: 0.156,
      y: 0,
      z: 0.0214,
      pitch: 90,
      degrees: true,
    }
  }
}

export default class Sensors extends Component {
  render() {
    return (
      <Wrapper>
        <Gyro name="gyro" joint={joints.gyro} />
        <CliffSensor name="cliff_sensor_front" joint={joints.cliffFront} />
        <CliffSensor name="cliff_sensor_left" joint={joints.cliffLeft} />
        <CliffSensor name="cliff_sensor_right" joint={joints.cliffRight} />
        <Bumpers name="bumpers" />
      </Wrapper>
    )
  }
}
