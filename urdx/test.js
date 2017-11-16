import urdx, {LinkComponent, Origin, Wrapper, Materials} from '../lib';



class Box extends LinkComponent {
  renderLink() {
    const { attributes } = this.props;
    const { size, name, origin } = attributes;
    return (
      <link name={name}>
        <visual>
          <Origin origin={origin} />
          <geometry>
            <box size={size} />
          </geometry>
        </visual>
      </link>
    );
  }
}

const robot = (
  <Wrapper>
    <Materials />
    <Cylinder name="base_link" length={0.6} radius={0.2} >
      <Box
        name="new_link"
        size="0.6 0.1 0.2"
        joint={{type:'fixed', origin:{x: 0, yaw: 30, z: 0, degrees: true}}}
      />
    </Cylinder>
  </Wrapper>
);

console.log(urdx.renderRobot(robot, { name: "myfirst" }));
