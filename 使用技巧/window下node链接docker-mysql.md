# Docker mysql
> 平台： window平台
### 下载Docker
1. [官网注册](https://hub.docker.com/)
2. 下载docker desktop [下载地址](https://docs.docker.com/docker-for-windows/)
3. 正常双击EXE从头点到位安装。
4. 打开window powershell(接下来都以**shell**简称)
5. shell 敲入以下命令:
~~~js
docker --version
docker run hello-world
// 当然run hello-world可能会失败。我们要走第六步
~~~


6. 设置国内的镜像***https://docker.mirrors.ustc.edu.cn***.

### 安装mysql
1. 进入docker,MYSQL安装主页找到mysql, [链接地址](https://hub.docker.com/_/mysql)
2. 选择mysql版本，选择一些稳定版本
3. 使用docker run XXXX
4. MYSQL_ROOT_PASSWORD是密码
5. tag是mysql的版本号
6. *重点*记得带上-p，不然坑很多
7. 最终的命令: docker run --name mysql1 -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.7.28

### 使用docker操作mysql
> 前提： 容器的名字和我的名字一样就是--name 后面的
1. 进入docker虚机
```js
docker exec -it mysql1 bash
``` 
2. 进入数据库 mysql
```js
mysql -u root -p
>password: 123456
```
3. 贴一个菜鸟教程的mysql教学全部跟着后面来一发就行。[菜鸟教程-MYSQL](https://www.runoob.com/mysql/mysql-drop-tables.html)

### node链接mysql
1. npm mysql地址贴出来（这个不会用的话，劝退吧）[mysql](https://www.npmjs.com/package/mysql)
2. node链接
```js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
```

> 顺便提下为什么之前疯狂强调-p端口一定要写，因为不写node是连接不上mysql的。
