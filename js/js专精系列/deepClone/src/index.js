// object for in
// 数组的初始化
// 函数 闭包的拷贝
// 正则，date
const deepClone = (obj) => {
  let dist;
  if (typeof obj === "Object") {
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
    for (var i in obj) {
      dist[i] = deepClone(obj[i]);
    }
    return dist;
  } else {
    return obj;
  }
};

module.exports = deepClone;
