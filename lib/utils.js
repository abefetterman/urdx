'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
exports.vecString = vecString;

/** Copy own-properties from `props` onto `obj`.
 *    @returns obj
 *    @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function vecString() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (!(args && typeof args.map === 'function')) return '';
  var strings = args.map(function (arg) {
    return '' + (arg || '0');
  });
  return strings.join(' ');
}