# 深拷贝

> 什么是深拷贝

B 是 A 的拷贝，没有任何东西的引用。

### 方法

1. JSON.parse

```js
let a2 = JSON.parse(JSON.stringify(a1));
```

- 缺点

  - 遇到 function 自动过滤
  - 遇到环状结构自动过滤 (a1.self = a1)
  - 遇到正则自动过滤
  - 遇到 date 格式转化为字符串
  - 遇到 undefined 自动过滤
  - 遇到 Symbol 自动过滤

- 优点
  - 方便操作执行
  - 遇到不能拷贝的东西过滤不报错就是好的

2. 递归深 clone
   > 详细代码看./src/index.js

考虑因素

- object
- array
- RegExp
- function
- date
- 环状结构（自己指向自己）主要是 cache 部分

  思路就是碰到引用类型递归一直到基础数据类型。
