var urdx = require('../src');
// import { h, render } from 'preact';


const MyTitle = urdx.createClass({
    render() {
      return [
        (<h1><p message={this.props.message} /><p message="how are you" /></h1>),
        (<h2 message="thanks" />),
      ];
    }
});

const yay = (
  <robot><MyTitle message="hi Urdx" /></robot>
);

console.log(urdx.renderXML(yay));
