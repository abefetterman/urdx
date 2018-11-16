"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
exports.truncate = truncate;
exports.vecString = vecString;
exports.callFirstFn = callFirstFn;

/** Copy own-properties from `props` onto `obj`.
 *    @returns obj
 *    @private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }

  return obj;
}

function truncate(number) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;

  if (number && typeof number === 'number') {
    var factor = Math.pow(10, digits);

    if (Math.abs(number) < 1.0 / factor) {
      // don't return 0 if number is not exactly 0,
      // return the closest possible nonzero number
      return Math.sign(number) / factor;
    }

    return Math.round(number * factor) / factor;
  }

  return number;
}

function vecString() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (!(args && typeof args.map === 'function')) return '';
  var strings = args.map(function (arg) {
    return "".concat(truncate(arg) || '0');
  });
  return strings.join(' ');
}

function callFirstFn(fns) {
  if (!(fns && fns.length)) return null;

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  for (var fn in fns) {
    if (fn && typeof fn === 'function') return fn.apply(void 0, args);
  }

  return null;
}