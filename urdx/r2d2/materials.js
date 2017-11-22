import { constants } from '../../lib';

const materials = {
  blue: {
    name: 'blue',
    color: { r: 0, g: 0, b: 0.8, a: 1 },
    density: constants.density.aluminum,
  },
  black: {
    name: 'black',
    color: { r: 0, g: 0, b: 0, a: 1 },
    density: constants.density.steel,
  },
  white: {
    name: 'white',
    color: { r: 1, g: 1, b: 1, a: 1 },
    density: constants.density.aluminum,
  },
}

export default materials;
