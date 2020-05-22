// object for in
// 数组的初始化
// 函数 闭包的拷贝
// 正则，date
let cache = [];
const deepClone = (obj) => {
  let dist;
  if (typeof obj === "Object") {
    let cacheDist = findCache(obj);
    if (cacheDist) return cacheDist;
    if (Array.isArray(obj)) {
      dist = new Array();
    } else if (obj instanceof Function) {
      dist = function () {
        return obj.call(this, arguments);
      };
      return dist;
    } else if (obj instanceof Date) {
      dist = new Date(dist);
    } else if (obj instanceof RegExp) {
      dist = new RegExp(source.source, source.flags);
    } else {
      dist = new Object();
    }
    cache.push([obj, dist]);
    for (var i in obj) {
      dist[i] = deepClone(obj[i]);
    }
    return dist;
  } else {
    return obj;
  }
};
function findCache(item) {
  for (var i = 0; i < cache.length; i++) {
    if (cache[i][0] === item) {
      return cache[i][1];
    }
  }
  return undefined;
}
module.exports = deepClone;
