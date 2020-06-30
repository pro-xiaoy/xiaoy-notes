# eslint+prettier 配置

> 团队项目中一些同学提交的代码规范有着很大的问题，基本上就两个问题 1. 并没有配置好好的 eslint 和 prettier。2. commit 的时候加了参数-n，跳过检查。

### 准备

作为前端同学编辑器如果是用 vscode 的基本会知道这两个插件，简单介绍下这两个插件。

1.  ESLint 属于一种 QA 工具，是一个 ECMAScript/JavaScript 语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。
2.  Prettier 是一个自动帮你处理代码中不符合 ESLint 规范的工具。

### 设置

文件 > 首选项 > 设置 **_最好展开为编辑模式，右上角有一个打开设置(json)_**

1. 设置代码在保存的时候自动格式化

```js
"editor.formatOnSave": true
```

2. 设置 .js .ts .jsx .tsx .less .css .json 格式的文件都采用 prettier-vscode 插件进行格式化

```js
"[javascript]": {
	"editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[javascript|react]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescript|react]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[less]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[css]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[json]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

3. 配置 prettier 插件读取项目中哪个配置文件，默认是根目录下的 .prettierrc 文件，如果你的项目下不是这个文件就需要修改为你的配置文件，比如很多项目为 .prettierrc.js 或者 .prettierrc.ts

```js
 "prettier.configPath": ".prettierrc.js",
```
