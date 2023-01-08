# Selecter

:::tip 新版本
Fastjs-next `v1.1.1` 现已发布. [点此查看](../other/changelog.html) 更新日志.
:::

## 选中元素

:::tip 额外知识
用 `selecter as $name` 来更改选择器函数的名称.
:::

```javascript
import { selecter } from 'fastjs-next';

console.log(selecter("body")); // FastjsDom
```

### 使用 id 选中元素

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($("#id")); // FastjsDom
```

### 使用 class 选中元素

```javascript
import { selecter as $ } from 'fastjs-next';

console.log($(".class")); // FastjsDomList
```

::: details FastjsDom 和 FastjsDomList
什么时候会返回 FastjsDom?

如果你使用 id 选中元素, 它会返回 `FastjsDom`.<br/>
另外, 如果你的选择器选中了 ./src/config.ts -> dom.specialDom: Array\<string\> 中的元素, 它会返回 `FastjsDom`.
:::

## 返回值

`selecter` 会返回 `FastjsDom` 或 `FastjsDomList`.