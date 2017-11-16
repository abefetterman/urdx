import urdx from '../urdx';
import { vecString } from '../utils';
import Component from './Component';

function rgbaString(obj) {
  if (!obj) return null;
  return vecString(obj.r, obj.g, obj.b, obj.a);
}

export default class Material extends Component {
  render() {
    const { attributes, parent } = this.props;
    const { material, renderFull } = attributes;
    if (!material) return null;
    if (material.name && !renderFull) {
      return (
        <material name={material.name} />
      );
    }
    return (
      <material name={material.name}>
        {material.color ? <color rgba={rgbaString(material.color)} /> : null}
        {material.texture ? <texture filename={material.texture} /> : null}
      </material>
    )
  }
}
