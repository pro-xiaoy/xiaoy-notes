const bind = require("../src/index");
Function.prototype.bind2 = bind;
function info() {
  console.log(this);
  return this;
}
var info_1 = info.bind2({ name: "fang" });
console.log(info_1, info_1(), "111");
 