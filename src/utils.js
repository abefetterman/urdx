
/** Copy own-properties from `props` onto `obj`.
 *    @returns obj
 *    @private
 */
export function extend(obj, props) {
    for (let i in props) obj[i] = props[i];
    return obj;
}

export function vecString(...args) {
  if (!(args && typeof args.map === 'function')) return '';
  const strings = args.map((arg) => `${arg || '0'}`);
  return strings.join(' ');
}

export function callFirstFn(fns, ...args) {
  if (!(fns && fns.length)) return null;
  for (let fn in fns) {
    if (fn && typeof fn === 'function') return fn(...args);
  }
  return null;
}
