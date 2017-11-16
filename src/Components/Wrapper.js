import urdx from '../urdx';
import Component from './Component';

export default class Wrapper extends Component {
  render() {
    const { children } = this.props;
    if (children) return children;
    return null;
  }
}
