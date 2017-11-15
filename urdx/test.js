var urdx = require('../lib');
import Component from '../lib/Component';


class MyTitle extends Component {
  render() {
    const { attributes } = this.props;
    return [
      (<h1><p message={attributes.message} /><p message={2} /></h1>),
      (<h2 message="thanks" />),
    ];
  }
};

const yay = (
  <MyTitle message="hi Urdx" />
);

console.log(urdx.renderRobot(yay, { sassy: true }));
