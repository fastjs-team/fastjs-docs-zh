# 开始使用

## 创建新项目

:::tip Fastjs CLI
我们的官方脚手架 Fastjs-cli 现已可用!
:::

:::warning Fastjs CLI
如果你正在使用 fastjs-next `v1.1.0` 或更高, 请将 fastjs-cli 更新至版本 `v2.3.0` 或更高.
:::

首先，在全局安装 Fastjs-cli:

```bash
npm install -g fastjs-cli
```

安装好之后，用下面的命令创建一个新项目:

```bash
fastjs create my-project
```

## 编写Demo

```js
import { selecter } from 'fastjs-next'

selecter('body').html('Hello World!')
```

## 运行项目

```bash
npm run dev
```