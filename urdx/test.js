var urdx = require('../src');


const MyTitle = urdx.createClass({
    render() {
      const { attributes } = this.props;
      return [
        (<h1><p message={attributes.message} /><p message={2} /></h1>),
        (<h2 message="thanks" />),
      ];
    }
});

const yay = (
  <MyTitle message="hi Urdx" />
);

console.log(urdx.renderRobot(yay, { sassy: true }));
