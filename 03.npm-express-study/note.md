# package 管理

## 创建 package.json
- 在 project 一开始的时候执行
- 如果有安装了3rd party module, npm 会自动create package.json 去记录安装的 package 和 version
- 不能包含中文和空格

```ps
npm init -y
```

## dependencies
- npm i 之后的 packages 都会记录在这里


## 一次性 install 全部 package
- 当我们 git clone project 下来, 基本上是没有 node_modules 的，因为 file sinpmze 太大了
- 每次我们 setup project 时候，都需要自己去 install 全部的 package
- 需要 install 哪些 package 都其实是写在 package.json 的 dependencies object 里

```ps
npm i / npm install
```

## 卸载 package
- package.json dependencies 会移除这个package 
```ps
npm uninstall moement
```

## devDependencies
- 只是用在 development 阶段，在 production 后是不会用到的，那就安装在这里
- 如果在 production 后需要用到的，那就安装在 dependencies
- 怎么判断要不要安装在 devDependencies?: 在 npm web 里面找到 package 的 detail, 看他的安装指令

```ps
// short form
npm i {packageName} -D

// complete form
npm i {packageName} --save-dev
```

## Global Dependencies
- 安装在 'C:\Users\User\AppData\Roaming\npm\node_modules' instead of project 本身
- 只有工具性质的 package 才有必要安装在 global

```ps
// install
npm i {packageName} -g

// uninstall
npm uninstall {packageName} --g
```

# 开发自己的 Package
## 3 Basic files
- package.json: package 管理配置文件
- index.js: package 的入口文件
- README.md: 说明文档

## Initialize package.json
```js
{
  "name": "rinney-test-tools", // 名字一定要 unique 的
  "version": "1.0.0",
  "description": "Create my own package",
  "main": "index.js", // 别人用我的 package 的时候他会 import 这里的 index.js
  "keywords": ['test', 'dateFormat', 'escape'],
  "license": "ISC"
}
```

## npm 指令
### Login npm account
```ps
npm login
```
### Public package to npm
```ps
// 1. switch to the path that package contains. e.g: C:\Users\User\OneDrive\Desktop\dev\nodejs-study\npm-study\rinney-test-tools

// 2. publish the package
npm publish
```

### Delete package
```ps
npm unpublish {packageName} --force
```
- 只能删除 72 小时以内 publish 的 package
- 删除后的 package 在 24 小时以内不允许重复发布
- 尽量不要 upload 没有意义的 package