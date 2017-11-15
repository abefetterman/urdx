"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;

/** Copy own-properties from `props` onto `obj`.
 *    @returns obj
 *    @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}