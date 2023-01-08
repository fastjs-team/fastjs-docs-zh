# Selecter

:::tip 新版本
Fastjs-next `v1.1.1` 现已发布. [点此查看](../other/changelog.html) 更新日志。
:::

## 选中元素

:::warning 选择器 <Badge text="v1.2.0" type="tip" />
在 `v1.2.0` 和更新版本，您应该使用 `selector` 来选择元素。

在 `v1.2.0` 之前您可以使用 `selector` 来代替 `selector` ，但 `selector` 在将来可能会被移除
:::

:::tip
用 `selecter as $name` 来更改选择器函数的名称.
:::

```typescript
const fastjs = {
    selector(
        el: string, place: HTMLElement | Document | FastjsDomList = _dev._dom // _dev._dom: document
    ): FastjsDom | FastjsDomList {}
}
```

```javascript
import { selector } from 'fastjs-next';

console.log(selector("body")); // FastjsDom
console.log(selector("html")); // FastjsDom
console.log(selector("head")); // FastjsDom
console.log(selector("div")); // FastjsDomList
```

### 使用 id 选中元素

```javascript
import { selector as $ } from 'fastjs-next';

console.log($("#id")); // FastjsDom
```

### 使用 class 选中元素

```javascript
import { selector as $ } from 'fastjs-next';

console.log($(".class")); // FastjsDomList
```

::: details FastjsDom 和 FastjsDomList
什么时候会返回 FastjsDom?

如果你使用 id 选中元素, 它会返回 `FastjsDom`.<br/>
另外, 如果你的选择器选中了 ./src/config.ts -> dom.specialDom: Array\<string\> 中的元素, 它会返回 `FastjsDom`。

dom.specialDom default value is `["html", "head", "body"]`.
:::

## 返回值

`selecter` 会返回 `FastjsDom` 或 `FastjsDomList`。