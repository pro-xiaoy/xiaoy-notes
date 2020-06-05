function bind(...arg) {
  const fn = this;
  console.log('fn++', fn);
  
  return function (...args) {
    fn(...arg, ...args)
  };
}
module.exports = bind;
