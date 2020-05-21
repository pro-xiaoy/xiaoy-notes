# 搭建 vultr 服务

### 步骤

- 购买 vultr
- 安装本地 git
- 配置 server

### 购买 vultr

不用问不要说[vultr](https://my.vultr.com/)花钱就可以解决的战斗

### 安装本地 git

目的是为了在没有 xshell 时候进入服务系统具体操作就是

```js
ssh root@XXXXX
```

然后输入密码，一顿操作

### 安装 Nginx

因为第一次配置的时候我是按照网上的教程走的，教程是 apt,当然我这边的 shell 上面一直报错，然后在网上搜了下一下关于服务器上面安装包指令
可以参考这篇文章[rpm 和 yum 区别和联系以及 apt-get](https://zhuanlan.zhihu.com/p/27724520)

**_总的来说相当于不同的 linux 系统_**

1. RedHat 系列：Redhat、Centos、Fedora 等

2. Debian 系列：Debian、Ubuntu 等

##### RedHat 系列

1 常见的安装包格式 rpm 包,安装 rpm 包的命令是“rpm -参数”

2 包管理工具 yum

3 支持 tar 包

##### Debian 系列

1 常见的安装包格式 deb 包,安装 deb 包的命令是“dpkg -参数”

2 包管理工具 apt-get

3 支持 tar 包

##### 安装的命令

```js
// 把yum当作npm来使用就好
yum install nginx -y
```

这个时候你可以试下你的公网 ip 能不能访问到，如果没有，很大的可能就是防火墙（反正这个问题蛮坑的对我来说）

```js
firewall-cmd --version    // 防火墙版本
firewall-cmd --state      // 状态
firewall-cmd --zone=public --add-port=80/tcp --permanent //增加权限
systemctl restart  firewalld //重启
```

这个时候你就会发现访问 ip 会进入熟悉的 nginx 页面了

### Git 安装

```js
yum install yum -y
```

### node 安装和淘宝镜像的设置

```
yum install node
```

顺便说两个比较方便的库，而且你想要把 npm 安装地址放到淘宝镜像这样速度会好点，这个时候要设置下镜像源

```js
npm config set registry https://registry.npm.taobao.org
```

同时最好安装一个包,nrm(控制 npm 源)，同时安装下 n，可控制 node 版本

### nginx 配置

修改 Nginx 的方法我觉得目前最简单的就是在 vscode 上面搜 remote-ssh 插件。同时配置 Nginx 对新手很不友好，推荐一个自动配置 Io 地址[nginx 配置](https://nginxconfig.io/)
