# win 平台下的 git 快捷方式

> mac 用户自行下载 item2 和 oh-my-zsh 主题

### 创建.bashrc 文件

打开 git bash 进入根目录（windows 下的 shell 不支持 cd ~）

```js
cd ~
// 新手先看下有没有.bashrc文件如果没有新建一个有的话直接编辑
// 新建
touch .bashrc
```

### 编辑.bashrc 文件

```js
vim .bashrc
i(键盘点下i，进入编辑模式)
echo 'start'
alias gst="git status" // 注意格式和空格
esc+:+wq(退出和保存)
```

重新打开 git bash 敲下 gst 会发现他其实走的命令是 git status

**当然他可能会报错:not find .bashpro 之类的文字，缺啥补啥就好**

### 我的.bashrc 配置

```js
echo '❤❤❤ git start'

alias gaa="git add -A"
alias gst="git status"
alias gcmsg="git commit -a -m "
alias gp="git push"
alias gcd="git clean -df"
alias grh="git reset --h"
alias gck="git cheakout"
alias grh="git reset --h"

```
