import urdx from '../lib';

import r2d2 from './r2d2';
import kobuki from './kobuki';

const files = [
  {
    filename: 'r2d2.urdf',
    args: {
      name: 'r2d2'
    },
    robot: r2d2
  },
  {
    filename: 'kobuki.urdf',
    args: {
      name: 'kobuki'
    },
    robot: kobuki
  },
];

urdx.writeOutput(files);
