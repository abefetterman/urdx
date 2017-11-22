import urdx from '../urdx';
import Component from './Component';

export default class Limit extends Component {
  render() {
    const { limit } = this.props.attributes;
    if (!limit) return null;
    const { effort = 1000.0, lower = 0.0, upper = 0.0, velocity = 0.5 } = limit;
    return (
      <limit
        effort={effort}
        lower={lower}
        upper={upper}
        velocity={velocity}
      />
    )
  }
}
