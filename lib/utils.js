'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
exports.vecString = vecString;
exports.callFirstFn = callFirstFn;

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

function callFirstFn(fns) {
  if (!(fns && fns.length)) return null;

  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  for (var fn in fns) {
    if (fn && typeof fn === 'function') return fn.apply(undefined, args);
  }
  return null;
}