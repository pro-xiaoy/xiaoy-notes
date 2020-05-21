# git 基本用法

> 个人和团队开发的技巧

## _1._ 连接仓库

1. 远程建立仓库本地未创建文件
   按照正常 clone 项目
2. 远程建立仓库本地创建文件

```js
  git init //
  git add -A    //改成git add .
  git commit -m '要写入的信息'
  git remote add origin '远程仓库地址'    /
  git push -u origin master

  [warning]:
  有时间会出现:
  git failed to push some refs to git...... 的报错信息

  解决方法:
  git pull --rebase origin master
  git push -u origin master

  //第一次操作方法后面每次
  git add .
  git commit -m"要写入的信息"
  git pull
  解决冲突
  git pull
```

## _2._ 分支管理

团队开发的时候建立三个主要分支

- origin/master
- origin/develop
- origin/release

分别对应着三种环境，线上/测试/预发布。

每个开发者创建属于自己的 feature 分支，例如 feature/xiaoy

master 代码作为测试完成的干净代码，以 master 为基准合并到自己的分支，没事进行 git 操作

```js
git fetch --all
git merge origin/master
```

develop 为测试代码，所谓的脏代码，**_切记： 千万不要往 master 合并_**
发布测试环境代码

```js
git checkout develop
git reset --h
git clean -df
git fetch --all
git pull
git merge feature/XXXX
git status

```

## _3_ git 使用技巧

1. 必须马上切分支写代码但是不提交本地的代码

```js
git stash
git stash list
git stash apply/git stash pop
```

2. 提交了 commit 如何撤回

```js
正常的做法:
git log
git reset --hard <commit_id>
git push origin HEAD --force

但是撤回不了还是存在commit的情况
git reset –soft：回退到某个版本
```
