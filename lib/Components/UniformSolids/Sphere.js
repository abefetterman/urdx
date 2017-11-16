"use strict";

function sphereInertiaTensor(r, m) {
  return {
    ixx: 2 * m * Math.pow(r, 2) / 5.0,
    ixy: 0,
    ixz: 0,
    iyy: 2 * m * Math.pow(r, 2) / 5.0,
    iyz: 0,
    izz: 2 * m * Math.pow(r, 2) / 5.0
  };
}