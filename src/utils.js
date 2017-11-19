
/** Copy own-properties from `props` onto `obj`.
 *    @returns obj
 *    @private
 */
export function extend(obj, props) {
    for (let i in props) obj[i] = props[i];
    return obj;
}

export function truncate(number, digits = 9) {
  if (number && (typeof number === 'number')) {
    const factor = Math.pow(10, digits);
    return Math.round(number * factor) / factor;
  }
  return number;
}

export function vecString(...args) {
  if (!(args && typeof args.map === 'function')) return '';
  const strings = args.map((arg) => `${truncate(arg) || '0'}`);
  return strings.join(' ');
}

export function callFirstFn(fns, ...args) {
  if (!(fns && fns.length)) return null;
  for (let fn in fns) {
    if (fn && typeof fn === 'function') return fn(...args);
  }
  return null;
}
