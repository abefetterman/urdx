var urdx = require('../src');
// import { h, render } from 'preact';


const MyTitle = urdx.createClass({
    render() {
      return (<h1><p message={this.props.message} /></h1>);
    }
});

const yay = (
  <robot><MyTitle message="hi Urdx" /></robot>
);

console.log(urdx.renderXML(yay));
